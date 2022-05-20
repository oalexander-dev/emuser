const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models');

// Returns current user's info. Auth required.
const getCurrentUserInfo = async (req, res) => {
    const user = await User.findOne({ username: req.user.username });

    return res.json({
        user: {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            userType: user.userType,
            email: user.email
        }
    });
};

// Returns current user's auth status. Auth required.
const getUserAuth = (req, res) => {
    return res.send('Logged in');
};

// Returns details about a given user. Username param required. Auth required.
const getUserInfo = async (req, res) => {
    const user = await User.findOne({ username: req.params.username });

    return res.json({
        user: {
            user: {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                userType: user.userType,
            }
        }
    });
};

// Creates a new user and returns an auth token if successful.
// Username, firstName, lastName, email, userType, and password required in body.
const postUser = async (req, res) => {
    const userArgs = req.body;

    const userSearch = await User.findOne({ username: userArgs.username });
    if (userSearch) {
        return res.json({
            success: false,
            message: "Username is taken."
        });
    }

    const user = new User(userArgs);
    const savedUser = await user.save();

    const token = jwt.sign({ username: userArgs.username },
        process.env.SESSION_SECRET,
        { expiresIn: '4h' });

    return res.json({
        success: true,
        token
    });
};

// Returns an auth token if credentials are good.
// Username and password required in body.
const postLogin = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.json({
            success: false,
            message: 'Username or password incorrect.'
        });
    }

    const token = jwt.sign({ username },
        process.env.SESSION_SECRET,
        { expiresIn: '4h' });

    return res.json({
        success: true,
        token
    });
};

// Accepts an image file and sets it to the current user's profile picture. Auth required.
const postProfilePicture = async (req, res) => {
    const user = await User.findOne({ username: req.user.username });

    const path = process.cwd() + '/media/profile-pictures/' + req.files.image.name;
    await req.files.image.mv(path);

    user.image = req.files.image.name;
    await user.save();

    return res.json({
        result: "OK",
    });
};

// Returns a profile picture as a download. fileName param required.
const getProfilePicture = (req, res) => {
    const path = process.cwd() + '/media/profile-pictures/' + req.params.fileName;
    return res.download(path);
};

module.exports = {
    getCurrentUserInfo,
    getUserAuth,
    getUserInfo,
    postUser,
    postLogin,
    postProfilePicture,
    getProfilePicture
};
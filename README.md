<h1 align="center">Welcome to @zentechdev/emuser 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@zentechdev/emuser" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@zentechdev/emuser.svg">
  </a>
  <a href="https://github.com/oalexander-dev/zentechdev-emuser#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/oalexander-dev/zentechdev-emuser/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/oalexander-dev/zentechdev-emuser/blob/master/LICENSE.txt" target="_blank">
    <img alt="License" src="https://img.shields.io/npm/l/@zentechdev/emuser">
  </a>
  <a href="https://www.npmjs.com/package/@zentechdev/emuser" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/dw/@zentechdev/emuser?label=npm%20downloads">
  </a>
</p>

> Express and Mongo stack user models and endpoints

### 🏠 [Homepage](https://github.com/oalexander-dev/zentechdev-emuser#readme)

## Install

```sh
npm install @zentechdev/emuser --save
```

## Usage

__**Using this library requires that the application has a valid Mongoose 
connection to a database.**__

Some handlers require body parameters, somerequire URL parameters, some 
require authentication, and some are a some combination of 
those three. Most IDEs will show the handler's documentation
comment if you hover over the name of the function, which will tell you
what is required for using that handler. Additionally, you can find it in 
the chart below.

```sh
// Import model and handlers
const { User: model, handlers } = require('@zentechdev/emuser');

// Interact with user model, provides direct access to mongoose model
const user1 = User.model.findOne({ username: req.user.username });

// Use user handler in an endpoint, check documentation for handler requirements
const express = require('express');
const router = express.Router();
router.get('/api/v1/login', handlers.postLogin);
```

## Run tests

```sh
npm run test
```

## Modules

This section will go more in depth into the modules available in this 
package and provide examples of how to use them. 

### Models

The models module contains the Mongoose model for the users and utility 
tokens. The models are used by the handlers to interact with the database.
The models can also be used directly to interact with the database. 

The first model is the User model. This represents a user in the database.
The following table displays the fields of this model.

**User Schema**
| Field Name  | Type   | Required |
| ----------- | ------ | -------- |
| username    | String | Yes      |
| password    | String | Yes      |
| firstName   | String | Yes      |
| lastName    | String | Yes      |
| userType    | String | Yes      | 
| email       | String | Yes      |
| image       | String | No       |

**Examples**
```sh
const { User: model } = require('@zentechdev/emuser');

// must call query functions from inside an async function and use
// await or a callback, or use the .then() construction

const getUserByUsername = async (username) => {
    const user await User.findOne({ username: 'user123' });
    return user;
};

const newUser = new User({
    firstName: 'Test',
    lastName: 'User',
    username: 'testuser123',
    password: 'password2022',
    email: 'test@test.com',
    userType: 'member'
});
await newUser.save();
```

### Handlers

The handlers module containts the functions that will interact with the 
database using the request object and constructing a response using
the response object. These functions should be passed directly into
the Express router endpoints, as shown below. The requirements to use
each function are also shown below

**Handler Functions**
| Function Name      | Requires Auth | URL Params | Body Params | Purpose |
| ------------------ | ------------- | ---------- | ----------- | ------- |
| getCurrentUserInfo | Yes           | None       | None       | Returns current user's info |
| getUserAuth        | Yes           | None       | None       | Returns current user's auth status |
| getUserInfo        | Yes           | username   | None       | Returns given user's info |
| postUser           | No            | None       | username, firstName, lastName, email, userType, and password | Registers a new user |
| postLogin          | No            | None       | username, password | Logs a user in and returns a token |
| postProfilePicture | Yes           | None       | File object uploaded in a form | Updates a user's profile picture with the uploaded image |
| getProfilePicture  | No            | fileName   | None | Returns a profile picture as a download |

**Examples**
```sh
const express = require('express');
const { handlers } = require('@zentechdev/emuser');
const requireAuth = require('../middleware/auth');

const router = express.Router();

// GET /api/v1/users
// Returns details about current user
// Requires none
router.get('/', requireAuth, handlers.getCurrentUserInfo);

// GET /api/v1/users/auth
// Checks if a user is logged in
// Requires none
router.get('/auth', requireAuth, handlers.getUserAuth);

// GET /api/v1/users/:username
// Returns details about given user
// Requires none
router.get('/:username', requireAuth, handlers.getUserInfo);

// POST /api/v1/users
// Registers a new account
// Requires username, firstName, lastName, email, userType, password
router.post('/', handlers.postUser);

// POST /api/v1/users/login
// Logs a user in
// Requires username, password
router.post('/login', handlers.postLogin);

// POST /api/v1/users/picture
// Updates a user's profile picture
// Requires image file
router.post('/picture', requireAuth, handlers.postProfilePicture);

// GET /api/v1/users/picture/:fileName
// Returns a user's profile picture
// Requires fileName param
router.get('/picture/:fileName', handlers.getProfilePicture);

module.exports = router;
```

## Author

👤 **Owen Alexander**

* Website: www.linkedin.com/in/owen-alexander-8620981b3
* Github: [@oalexander-dev](https://github.com/oalexander-dev)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Owen Alexander](https://github.com/oalexander-dev).<br />
This project is [MIT](https://github.com/oalexander-dev/zentechdev-emuser/blob/master/LICENSE.txt) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
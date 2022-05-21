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
  <a href="https://github.com/oalexander-dev/zentechdev-emuser/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/oalexander-dev/@zentechdev/emuser" />
  </a>
</p>

> Express and Mongo stack user models and endpoints

### 🏠 [Homepage](https://github.com/oalexander-dev/zentechdev-emuser#readme)

## Install

```sh
npm install @zentechdev/emuser --save
```

## Usage

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
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
</p>

> Express and Mongo stack user models and endpoints

### 🏠 [Homepage](https://github.com/oalexander-dev/zentechdev-emuser#readme)

## Install

```sh
npm install @zentechdev/emuser --save
```

## Usage
Using this library requires that the application has a valid Mongoose 
connection to a database. Some handlers require body parameters, some
require URL parameters, some require authentication, and some are a some 
combination of those three. Most IDEs will show the handler's documentation
comment if you hover over the name of the function, which will tell you
what is required for using that handler. Additionally, check the chart below.

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
| userType    | String ("member" or "rushee") | Yes | 
| email       | String | Yes      |
| image       | String | No       |

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
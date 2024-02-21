<h1 align="center">NestJs Simple Restful API</h1>
<h1></h1>

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Project Pattern](#project-pattern)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Links](#links)


## Overview

Made by : [FarelW](https://github.com/FarelW)

Here is the purpose of making this project :
- To create user authentication and protection cookie-jwt token
- To make a sustainable database
- To create a RESTFUL API that contains Create Read Update and Delete methods toward database

## Built With

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Project Pattern
- `Folders`: The src folder divide into 2 different folders, such as (auth and users), auth used for handling user authentication and users used for handling method for getting user data.
- `Controller`: This is responsible for handling HTTP requests and to define endpoints with their own method and calling functions from service.
- `Service`: This contains handler or logic to handle the operations of data processing and also callable.
- `Modules`: This contains the method from the folder src that use to pass the logic from another module, in this project I made UsersModule, AuthModule, and PrismaModule.

## Features
- `User Authentication`: This feature enables users to signup, signin, and signout with an authentication guard with cookie token.
- `Get Data User`: This feature enables users to get their data.
- `Change Username`: This feature enables users to change their username.

## Prerequisites

To run this project, you will need to perform several installations, including:
- `Node.js` : Node.js is essential for running JavaScript on the server-side and for managing JavaScript-based build processes, including those used in React applications.
- `npm` (Node package manager) : npm is indeed the package manager for JavaScript and is used to install and manage JavaScript packages and libraries, including those required for React development.

## Installation

If you want to run this program you will need to do these steps

1. Clone this repository :
```shell
git clone https://github.com/FarelW/NestJS-API
```

2. Open directory :
```shell
cd  NestJS-API
```

3. Install all packages :
```shell
npm install
```

4. Run API
``` shell
npm run start
```

5. For unit testing
``` shell
npm run test:e2e
```

The backend server will run in port:8080, make sure that the port is not occupied

## Links
- [Repository](https://github.com/FarelW/NestJS-API)
- Issue tracker :
   - If you encounter any issues with the program, come across any disruptive bugs, or have any suggestions for improvement, please don't hesitate to reach out by sending an email to winaldafarell@gmail.com Your feedback is greatly appreciated.

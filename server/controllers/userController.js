const User = require("../models/UserModel");

const userController = {};

userController.createUser = (req, res, next) => {
  console.log("username: ", req.body.username);
  console.log("password: ", req.body.password);
  // passed in use
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  console.log("userController engaged");
  console.log("req: ", req);
  User.create(user, (err, user) => {
    // error handler + res.locals here
    // if (err) {
    //   return next({ error: "" });
    // }
    res.locals.newUser = user;
    return next();
  });
};

// authorize
userController.verifyUser = (req, res, next) => {};

// update profile
userController.updateUser = (req, res, next) => {};

module.exports = userController;

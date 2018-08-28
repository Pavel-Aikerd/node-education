const mongoose = require(`mongoose`);
const passport = require(`passport`);
const User = require(`../models/User`);

const userController = {};

// Restrict access to root page
userController.home = function (req, res) {
  res.send(req.user);
};

// Go to registration page
userController.register = function (req, res) {
  res.send(`register`);
};

// Post registration
userController.doRegister = function (req, res) {
  User.register(new User({username: req.body.username, name: req.body.name}), req.body.password, function (err, user) {
    if (err) {
      return res.send(`register  ${user}`);
    }

    passport.authenticate(`local`)(req, res, function () {
      res.redirect(`/api/user`);
    });
  });
};

// Go to login page
userController.login = function (req, res) {
  res.send(`login`);
};

// Post login
userController.doLogin = function (req, res) {
  passport.authenticate(`local`)(req, res, function () {
    res.redirect(`/api/user`);
  });
};

// logout
userController.logout = function (req, res) {
  req.logout();
  res.redirect(`/api/user`);
};
// profile
userController.profile = function (req, res) {
  res.send(`profile`);
};

module.exports = userController;

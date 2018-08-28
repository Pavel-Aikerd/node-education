const express = require(`express`);
const router = new express.Router();
const auth = require(`../../controllers/AuthController`);
const connectEnsureLogin = require(`connect-ensure-login`);

// restrict index for logged in user only
router.get(`/`, auth.home);

// route to register page
router.get(`/register`, auth.register);

// route for register action
router.post(`/register`, auth.doRegister);

// route to login page
router.get(`/login`, auth.login);

// route for login action
router.post(`/login`, auth.doLogin);

// route for logout action
router.get(`/logout`, auth.logout);

router.get(`/profile`, connectEnsureLogin.ensureLoggedIn(), auth.profile);

module.exports = router;

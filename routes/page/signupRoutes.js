const router = require('express').Router();
const SignupController = require('../../controllers/SignupController');

router.get('/signup', SignupController.getSignupPage);

module.exports = router;



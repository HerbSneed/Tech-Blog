const router = require('express').Router();
const SignupController = require('../../controllers/SignupController');

router.get('/', SignupController.getSignupPage);

module.exports = router;
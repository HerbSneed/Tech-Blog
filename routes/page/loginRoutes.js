const router = require('express').Router();
const LoginController = require('../../controllers/LoginController');

router.get('/login', LoginController.getLoginPage);

module.exports = router;


const router = require('express').Router();
const LoginController = require('../../controllers/LoginController');

router.get('/', LoginController.getLoginPage);

module.exports = router;
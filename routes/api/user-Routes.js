const router = require('express').Router();
const userController = require('../../controllers/UserController');

router.get('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/register', userController.register);
router.post('/register', userController.register);




module.exports = router;

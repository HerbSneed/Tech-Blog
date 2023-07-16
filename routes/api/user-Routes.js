const router = require('express').Router();
const userController = require('../../controllers/userController');



router.get('/', userController.login);

router.post('/', userController.login);

router.get('/', userController.logout);



module.exports = router;

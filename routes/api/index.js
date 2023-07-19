const router = require('express').Router();
const PostController = require('../../controllers/PostController');
const UserController = require('../../controllers/UserController');
const isAuthenticated = require('../../middleware/isAuthenticated');
const userRoutes = require('./user-Routes');

router.use('/register', UserController.register);
router.use('/login', UserController.login);
router.use('/logout', isAuthenticated, UserController.logout);
router.use('/createPost', PostController.createPost);

module.exports = router;
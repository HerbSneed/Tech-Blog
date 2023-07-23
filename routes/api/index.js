const router = require('express').Router();
const PostController = require('../../controllers/PostController');
const UserController = require('../../controllers/UserController');
const CommentController = require('../../controllers/CommentController');

const isAuthenticated = require('../../middleware/isAuthenticated');
const userRoutes = require('./user-Routes');
const getSinglePost = require('./../page/single-post-routes');
const commentRoutes = require('./comment-routes');


router.use('/register', UserController.register);
router.use('/login', UserController.login);
router.use('/logout', isAuthenticated, UserController.logout);
router.use('/createPost', PostController.createPost);
router.use('/singlePost', PostController.getSinglePost);
router.use('/createComment', CommentController.createComment);
// router.use('/comments', CommentController.getComment);

module.exports = router;
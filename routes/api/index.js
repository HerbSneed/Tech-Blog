const router = require('express').Router();
const UserController = require('../../controllers/UserController');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./commentRoutes');
const isAuthenticated = require('../../middleware/isAuthenticated');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', isAuthenticated, UserController.logout);

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
const router = require('express').Router();
const UserController = require('../../controllers/UserController');
const commentRoutes = require('./commentRoutes');
const isAuthenticated = require('../../middleware/isAuthenticated');
const userRoutes = require('./user-Routes');

router.use('/register', UserController.register);
router.use('/login', userRoutes);
router.use('/logout', isAuthenticated, UserController.logout);


module.exports = router;
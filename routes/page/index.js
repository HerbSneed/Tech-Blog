const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
// const UserController = require('../../controllers/UserController');
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');



router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);


// Pages with data
// router.get('/register', UserController.register);
// router.get('/login', UserController.login);



module.exports = router;


// router.use('/', CreateNewPost);
// router.use('/', loginRoutes);

// const CreateNewPost = require('./createNewPostRoutes');
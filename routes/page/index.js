const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const signupRoutes = require('./signupRoutes');
const loginRoutes = require('./loginRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const CreateNewPost = require('./createNewPostRoutes');

router.use('/', homeRoutes);
router.use('/', signupRoutes);
router.use('/', loginRoutes);
router.use('/', dashboardRoutes);
router.use('/', CreateNewPost);



module.exports = router;

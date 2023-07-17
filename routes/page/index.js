const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const loginRoutes = require('./login-page-routes');
const signupRoutes = require('./signupRoutes');
const newPostRoutes = require('./new-post-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/create-new-post', newPostRoutes);


module.exports = router;




  // homeRoutes,
  // dashboardRoutes,
  // loginRoutes,
  // signupRoutes,
  // newPostRoutes,
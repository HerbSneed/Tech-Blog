const router = require('express').Router();
const path = require('path');

router.use('/', pageRoutes);
router.use('/api', apiRoutes);
router.use('/movie', forumRoutes);



module.exports = router;
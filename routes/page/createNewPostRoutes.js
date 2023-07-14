const router = require('express').Router();
const CreateNewPost = require('../../controllers/CreateNewPost');

router.get('/create-new-post', CreateNewPost.getNewPostPage);

module.exports = router;


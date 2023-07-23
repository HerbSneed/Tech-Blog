const router = require('express').Router();
const PostController = require('../../controllers/PostController');


router.get('/:post_id', PostController.getSinglePost);router.get('/:post_id/comments', PostController.getSinglePostComment);

module.exports = router;
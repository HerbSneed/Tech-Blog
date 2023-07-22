const router = require('express').Router();
const PostController = require('../../controllers/PostController');

router.get('/:post_id', PostController.getSinglePost);


module.exports = router;
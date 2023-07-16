const router = require('express').Router();
const PostController = require('../../controllers/PostController');

router.get('/api', PostController.getAllPosts);
router.get('/api/:id', PostController.getPostById);

router.post('/api', PostController.createPost);


module.exports = router;
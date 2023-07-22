const router = require('express').Router();
const CommentController = require('../../controllers/CommentController')

router.post('/', CommentController.createComment);
router.get('/:post_id', CommentController.getComment)
module.exports = router;
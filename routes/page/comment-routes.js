const router = require('express').Router();
const CommentController = require('../../controllers/CommentController');

router.get('/', CommentController.getCommentPage);


module.exports = router;
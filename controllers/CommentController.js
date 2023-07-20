const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

module.exports = {
  getCommentPage: async (req, res) => {
    res.render('comments', {loggedIn: req.session.loggedIn});
  },
  createComment: async (req, res) => {
    const {
      body: {
        description,
      },
      session:
      user_id
    } = req;
    try{
      const commentData = await Comment.create({
        description,
        user_id,
        post_id
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}


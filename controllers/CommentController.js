const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

module.exports = {
  getCommentPage: async (req, res) => {
    res.render('single-post-no-form', {
      loggedIn: req.session.loggedIn,
    });
  },
  createComment: async (req, res) => {
    const {
      body: {
        description,
        post_id,
      },
      session: {
        user_id,
      }
    } = req;

    try {
      const commentData = await Comment.create({
        description,
        user_id,
        post_id,
      });
      console.log(commentData);
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getComment: async (req, res) => {
    try {
      const commentData = await Comment.findByPk(req.params.post_id, {
        include: [User, Post]
      });
      const comments = commentData.get({ plain: true });

      res.render('single-post-no-form', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
        comments,
      })
      console.log(comments)
    } catch (err) {
      res.status(500).json(err);
    }
  }
}


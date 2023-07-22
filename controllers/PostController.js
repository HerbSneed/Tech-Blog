const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = {
  getNewPostPage: async (req, res) => {
    res.render('create-new-post', {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id
    });
  },

  // CREATE new post
  createPost: async (req, res) => {
    const {
      body: {
        title,
        description,
      },
      session: {
        user_id
      }
    } = req;
    try {

      const postData = await Post.create({
        title,
        description,
        user_id
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getSinglePost: async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.post_id, {
        include: [User, Comment]
      });
      const post = postData.get({ plain: true });

      res.render('single-post-form', {
        post,
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id,
      })
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
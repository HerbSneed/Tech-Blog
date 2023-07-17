const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = {
  getNewPostPage: async (req, res) => {
    res.render('create-new-post', { loggedIn: req.session.loggedIn });
  }, 

  createPost: async (req, res) => {
    try{
      const postData = await Post.create({
        title: req.body.title,
        description: req.body.description,
        userId: req.session.userId
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
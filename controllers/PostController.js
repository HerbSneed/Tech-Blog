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
    console.log(req);
    const {
      body: {
        title,
        description,
        // user_id,
      },
      session: {
        user_id
      }
    } = req;
    try {
      console.log('user_id from post controller' + user_id);
      const postData = await Post.create({
        title,
        description,
        user_id
      });
      res.status(200).json(postData);
      console.log(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

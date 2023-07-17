const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = {
  getDashboardPage: async (req, res) => {
    res.render('dashboard', { loggedIn: req.session.loggedIn });
  },
  getUserDashboard: async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.user_id, {
        include: [Post]
      });

      if (!userData) {
        res.status(500).json({ message: 'No user found with this id!' });
        return;
      }

      const userPosts = userData.posts.map((post) => post.get({ plain: true }));
      console.log(userPosts);

      res.render('dashboard', { loggedIn: req.session.loggedIn, userPosts });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

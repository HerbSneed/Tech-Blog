const {User, Post} = require('../models');

module.exports = {
  getHomePage: async (req, res) => {
  try{
   const postData = await Post.findAll({
      include: [User]
   });
   const posts = postData.map((post) => post.get({
      plain: true}))
     res.render('homepage', { loggedIn: req.session.loggedIn, posts}
     );


   } catch (err) {
      res.status(500).json(err);
   }
}
};












  
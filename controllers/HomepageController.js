const {User, Post} = require('../models');
const sequelize = require('../config/connection');

module.exports = {
  getHomePage: async (req, res) => {
  try{
   const postData = await Post.findAll({
      include: [User]
   });
   
   const posts = postData.map((post) => post.get({
      plain: true}))

   console.log(posts);

   res.render('homepage', {posts});
   } catch (err) {
      res.status(500).json(err);
   }
}
};















//   try{
//    const postData = await Post.findAll({
//       include: [ 
//          {
//             model: User,
//             attributes: ['username']
//          },
//       ],
//    });


  
const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
  getHomePage: async (req, res) => {
  try{
   const postData = await Post.findAll({
      attributes: {include: ['title', 'description']},
   });



   const userData = await User.findAll({
      attributes: {include: ['username']},
  });

   const posts = postData.map((post) => post.get({
      plain: true}))
   
   const users = userData.map((user) => user.get({
      plain: true}))  

         console.log(posts, users);

   return res.render('homepage', {posts, users});


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


  
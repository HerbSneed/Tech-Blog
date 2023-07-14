const Post = require('../models/post');

module.exports = {
  getAllPosts: async (req, res) => {
  try{
    
   const postData = await Post.findAll({
      attributes: {include: ['title', 'description', 'date_created']},
   });
   console.log(postData);
   const post = postData.map((post) => post.get({
      plain: true}))
   res.render('homepage', {post});

   } catch (err) {
      res.status(500).json(err);
   }
  },
  getPostById: async (req, res) => {
    try{
      const postData = await Post.findByPk(req.params.id);
      if(!postData){
        res.status(404).json({message: 'No post found with this id!'});
        return;
      }
      const post = postData.get({plain: true});
      res.render('single-post', {post});
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
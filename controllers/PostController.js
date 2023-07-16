const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = {
  getNewPostPage: async (req, res) => {
  res.render('create-new-post');
  }, 
  getAllPosts: async (req, res) => {
  try{
   const postData = await Post.findAll({
      include: [User, Comment]
   });
   console.log(postData);
   const post = postData.map((post) => post.get({
      plain: true}))

  req.session.save(() => {
    if(req.session.countVisit) {
      req.session.countVisit++;
    } else {
      req.session.countVisit = 1;
    }
   res.render('homepage', {post,
   countVisit: req.session.countVisit,
  loggedIn: req.session.loggedIn
  });
  })
   } catch (err) {
      console.log(err);
      res.status(500).json(err);
   }
  },
  getPostById: async (req, res) => {
    try{
      const postData = await Post.findByPk(req.params.id, {
        include: [User, Comment] 
        });
      if(!postData){
        res.status(500).json({message: 'No post found with this id!'});
        return;
      }
      const post = postData.get({plain: true});
      res.render('single-post', {post});
    } catch (err) {
      res.status(500).json(err);
    }
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
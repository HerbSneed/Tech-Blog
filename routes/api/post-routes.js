const router = require('express').Router();
const Post = require('../../models/Post');

// GET all posts, comments, and users
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User, Comment],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post, and user
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User]
    });
    const post = postData.get({ plain: true });
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err);
  }
});      

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      description: req.body.description,
    });
    res.status(200).json(newPost)
  } catch (err) {
    res.status(500).json(err); 
  } 
});

module.exports = router;
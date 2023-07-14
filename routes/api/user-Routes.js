const router = require('express').Router();
const User = require('../../models/user');

router.get('/', async (req, res) => {
  try{
   const userData = await User.findAll({
      attributes: {include: ['username']},
   });
   const user = userData.map((post) => post.get({
      plain: true
   }))
   res.status(200).json(userData);

   } catch (err) {
      res.status(500).json(err);
   }
  });

router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});




  router.post('/', async (req, res) => {
    try {
      const newUser = await User.create({
        user: req.body.username
      });
      res.status(200).json(newUser)
    } catch (err) {
      res.status(400).json(err); 
    } 
  });

  module.exports = router;

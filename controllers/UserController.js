const User = require('../models/user');

module.exports = {
  getAllUsers: async (req, res) => {
  try{
   const userData = await User.findAll({
      attributes: {include: ['username']},
   });
   const user = postData.map((post) => post.get({
      plain: true}))
   res.render('homepage', {user});

   } catch (err) {
      res.status(500).json(err);
   }
  },
  getUserById: async (req, res) => {
    try{
      const userData = await User.findByPk(req.params.id);
      if(!userData){
        res.status(404).json({message: 'No user found with this id!'});
        return;
      }
      const user = userData.get({plain: true});
      res.render('user-dashboard', {user});
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
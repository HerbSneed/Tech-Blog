module.exports = {
  getDashboardPage: async (req, res) => {
   res.render('dashboard');
   } 
};













            // where: {
            //     userId: req.session.userId,
            // },
            // attributes: ['post_id', 'title', 'description', 'created_at'],
            // include: [{
            //         model: Comment,
            //         attributes: ['comment_id', 'description', 'user_id', 'post_id', 'created_at'],
            //         include: {
            //             model: User,
            //             attributes: ['username'],
            //         },
            //     },
            //     {
            //         model: User,
            //         attributs: ['username'],
            //     },
            // ],
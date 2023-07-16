module.exports = {
  getDashboardPage: async (req, res) => {
    res.render('dashboard', {loggedIn: req.session.loggedIn});
   } 
};
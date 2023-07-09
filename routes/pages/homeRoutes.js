const router = require('express').Router();
const sequelize = require('../../db/config');
const isAuth = require('../../middleware/isAuthenticated')
const {
    User,
    Post,
    Comment,
    Movie
} = require('../../models');

//localhost:3001/
//findAll posts for home page
router.get('/', async (req, res) => {
   res.render('all')
});

module.exports = router
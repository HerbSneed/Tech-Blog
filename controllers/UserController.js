const router = require('express').Router();
const User = require('../models/User');


module.exports = {
   getSignupPage: async (req, res) => {
   res.render('signup');
   },
   getLoginPage: async (req, res) => {
   res.render('login');
   }, 

// CREATE new user
  register: async (req, res) => {
    const {
        body: {
        username,
        password
      },
    } = req;
    try {
      const user = await User.create(req.body);

      delete user.password;

      req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json(user);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

// LOGIN user
  login: async (req, res) => {
    const {
      body: {
        username,
        password
      },
    } = req;
    try {
      const user = await User.findOne({
        where: {
          username,
          password,
        },
        attributes: {
          exclude: ['createdAt, updatedAt']
        },
      });
    console.log(user);
      if (!user) {
        res.status(400).json({
          message: 'Incorrect username or password. Please try again!',
        });
        return;
      }

      delete user.password;

      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = username;









      

      res.status(200)
        .json({ user: username, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  },

// LOGOUT user
  logout: (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
};


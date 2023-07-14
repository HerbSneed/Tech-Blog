const sequelize = require('../config/connection');
const{ Post, User } = require('../models');


const postSeeds = require('./post-seeds.json');
const userSeeds = require('./user-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await User.bulkCreate(userSeeds);
  console.log('\n----- USERS SEEDED -----\n');

  await Post.bulkCreate(postSeeds);
  console.log('\n----- POSTS SEEDED -----\n');



  process.exit(0);
};

seedDatabase();
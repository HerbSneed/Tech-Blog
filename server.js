const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const sequelize = require('./config/connection')
const app = express();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(session(sessionConfig));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));



app.use(routes);
// app.use(require('./controllers/'));



const force = process.env.FORCE_SYNC === 'true';

sequelize.sync({
  force
}).then(() => {
  app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
  });
});
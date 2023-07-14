const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const sequelize = require('./config/connection')
const app = express();
// const session = require('express-session');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
// app.use(require('./controllers/'));



sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Server is listening on https://localhost:' + PORT));
});
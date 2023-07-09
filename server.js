const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs';)

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/UserController'));

app.listen(PORT, () = {
  console.log('Server is listening on https://localhost:' + PORT);
});
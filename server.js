const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const SECRET = process.env.SECRET || 'secret';

const hbs = exphbs.create({ 
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
 });

// Configure + link session object with sequelize store
const sess = {
    secret: SECRET,
    cookie: {
      expires: 3600000
    },
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

// Add express-session + store as Express.js middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Connect all routes to the application - w/api prefix
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
  

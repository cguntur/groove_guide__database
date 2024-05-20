const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  // Use DATABASE_URL if set, which is typical for production environments like Heroku
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    protocol: 'mysql',
    logging: false // you can enable logging for debugging if needed
  });
} else {
  // Use individual environment variables for local development
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      port: process.env.DB_PORT || 3001,
      logging: true // you can enable logging for debugging if needed
    }
  );
}

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

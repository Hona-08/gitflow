const knex = require('knex');
const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

async function checkDatabaseConnection() {
    try {
      // Use the raw SQL query to check the database connection
      await db.raw('SELECT 1');
      console.log('Connected to MySQL database');
    } catch (error) {
      console.error('Database connection error:', error);
    }
  }
  
  // Check the database connection when this module is imported
  checkDatabaseConnection();
  
module.exports = db;

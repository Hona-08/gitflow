const express = require('express');
const router = express.Router();
const db = require('../../config/db.config'); 

// Define a route for checking the database connection
router.get('/check-db-connection', async (req, res) => {
    try {
      // Attempt to query the database to check the connection
      await db.raw('SELECT 1');
      res.status(200).json({ message: 'Database connection is successful' });
    } catch (error) {
      res.status(500).json({ error: 'Database connection failed' });
    }
  });
  
  module.exports = router;

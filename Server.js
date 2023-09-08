// queries/user-queries.js
const pool = require('./db/dbconfig');

// Example query to get all users
const getAllUsers = async () => {
  try {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Add more user-related queries here

module.exports = {
  getAllUsers,
  // Export other user queries
};

// queries/post-queries.js
const pool = require('../db/dbconfig');

// Example query to get all posts
const getAllPosts = async () => {
  try {
    const query = 'SELECT * FROM posts';
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Add more post-related queries here

module.exports = {
  getAllPosts,
  // Export other post queries
};

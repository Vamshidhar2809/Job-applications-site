const express = require('express');
const router = express.Router();
const { createApplicant } = require('../controllers/applicantcontroller');
const pool = require('../config/db'); // Needed for test and get

// POST route to insert applicant
router.post('/', createApplicant);

// Simple test route
router.get('/test', (req, res) => {
  res.send('API working fine!');
});

// GET route to view all applicants (for testing/debug)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM applicants ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

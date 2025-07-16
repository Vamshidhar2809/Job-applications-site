const Applicant = require('../models/applicantmodel'); // Import model

// Controller function to handle form submission
exports.createApplicant = async (req, res) => {
  try {
    console.log('📥 Incoming form data:', req.body); // ADD THIS

    const newApplicant = await Applicant.create(req.body);
    console.log('✅ Controller: Applicant saved to DB');
    res.status(201).json(newApplicant);
  } catch (error) {
    console.error('❌ Controller Error:', error.message);
    res.status(500).json({ error: 'Failed to create applicant' });
  }
};

const Applicant = require('../models/applicantmodel');

// Controller function to handle form submission
exports.createApplicant = async (req, res) => {
  try {
    console.log('📥 Incoming form data:', req.body);

    const newApplicant = await Applicant.create(req.body);
    console.log('✅ Controller: Applicant saved to DB');

    res.status(201).json(newApplicant);
  } catch (error) {
    console.error('❌ Controller Error:', error); // full error object
    res.status(500).json({ error: 'Failed to create applicant' });
  }
};

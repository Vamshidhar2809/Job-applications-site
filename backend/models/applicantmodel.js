const pool = require('../config/db');

const Applicant = {
  create: async (data) => {
    const {
      name,
      email,
      contact,
      qualification,
      organization,
      notice, // 'notice' comes from frontend
      skills,
      resume_link = '' // optional fallback
    } = data;

    const result = await pool.query(
      `INSERT INTO applicants 
        (name, email, contact, qualification, organization, notice_period, skills, resume_link)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [name, email, contact, qualification, organization, notice, skills, resume_link]
    );

    console.log('✅ DB Inserted Record:', result.rows[0]);
    return result.rows[0];
  }
};

module.exports = Applicant;

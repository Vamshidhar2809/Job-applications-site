const pool = require('../config/db');

const Applicant = {
  create: async (data) => {
    const {
      name,
      email,
      contact,
      qualification,
      organization,
      notice,
      skills,
      resume_link, // <-- include this
    } = data;

    const result = await pool.query(
      `INSERT INTO applicants (name, email, contact, qualification, organization, notice, skills, resume_link)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [name, email, contact, qualification, organization, notice, skills, resume_link]
    );

    return result.rows[0];
  },
};

module.exports = Applicant;

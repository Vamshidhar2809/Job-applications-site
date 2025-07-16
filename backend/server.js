const express = require('express');
const app = express();
const cors = require('cors');
const applicantRoutes = require('./routes/applicantroutes');
require('dotenv').config();

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Mount route correctly
app.use('/api/applicants', applicantRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

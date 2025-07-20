Job Application Portal - AK Group of Companies
📌 Project Overview
This is a full-stack job application portal designed to streamline the process of collecting and managing applicant data for the AK Group of Companies. It features a user-friendly React frontend where applicants can submit their details. The submissions are then stored in a PostgreSQL database and simultaneously sent via email to the administration for immediate visibility.

The backend is built with Express.js and deployed on Railway, while the responsive frontend is hosted on Netlify, creating a robust and scalable MERN-like stack (PostgreSQL instead of MongoDB).

🚀 Live Demo
Frontend (Netlify): https://my-job-application-site.netlify.app/

🎯 Key Features
Clean & Responsive UI: Modern interface built with React and Tailwind CSS.

Instant Email Notifications: Sends applicant details directly to an admin email using EmailJS.

Persistent Data Storage: Securely stores all application data in a PostgreSQL database.

Resume Collection: Allows users to submit their resumes (currently stores the file name).

Seamless User Experience: Automatically redirects users to a welcome page after successful submission.

Scalable Architecture: Easily extendable to support full cloud file uploads (e.g., S3, Cloudinary).

💻 Technologies Used
Category

Technology / Service

Frontend

React JS Tailwind CSS Framer Motion React Router DOM

Backend

Node.js Express.js PostgreSQL pg (node-postgres) CORS Body-parser dotenv

Deployment

Netlify (Frontend) Railway (Backend & DB)

Other Tools

EmailJS Git & GitHub VS Code Postman

📄 Pages Developed
Landing Page (/)

Displays a welcome message: "Welcome to AK Group of companies!!!"

Serves as the introductory page and the destination after form submission.

Home Page / Application Form (/apply)

A comprehensive form for applicants to fill in their details.

Form Fields: Name, Email, Contact Number, Qualification, Current Organization, Notice Period, Skills, and a Resume Upload button.

📤 Form Submission Flow
A user navigates to the application form and fills in all the required fields.

Upon clicking "Submit," two actions are triggered simultaneously:

Email Notification: An email is sent via EmailJS to a pre-configured admin address, containing the applicant's details and the submission timestamp.

Data Persistence: A POST request is sent to the backend API. The Express server processes the data and inserts it into the applicants table in the PostgreSQL database.

The user is shown a "Thank You" message for confirmation.

The user is then automatically redirected back to the landing page.

🌐 Backend API Endpoint
The Express.js backend exposes the following endpoint:

POST /api/applicants

Description: Receives applicant data from the frontend form and stores it in the PostgreSQL database.

Request Body:

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "contact": "1234567890",
  "qualification": "M.Sc. Computer Science",
  "organization": "Tech Corp",
  "notice": "2 Months",
  "skills": "React, Node.js, PostgreSQL",
  "resume_link": "JohnDoe_Resume.pdf"
}

Success Response: 201 Created with a success message.

Error Response: 500 Internal Server Error with an error message.

📦 Database Schema
The project uses a PostgreSQL database hosted on Railway with the following table structure.

Table: applicants

Column

Data Type

Constraints

Description

id

SERIAL

PRIMARY KEY

Auto-incrementing unique identifier.

name

VARCHAR(255)

NOT NULL

Applicant's full name.

email

VARCHAR(255)

NOT NULL

Applicant's email address.

contact

VARCHAR(20)



Applicant's contact number.

qualification

VARCHAR(255)



Applicant's highest qualification.

organization

VARCHAR(255)



Applicant's current or last organization.

notice

VARCHAR(50)



Applicant's notice period.

skills

TEXT



A list of skills provided by the applicant.

resume_link

VARCHAR(255)



The filename of the uploaded resume.

created_at

TIMESTAMP

DEFAULT CURRENT_TIMESTAMP

Timestamp of when the record was created.

🚀 Getting Started Locally
To set up and run this project on your local machine, follow these steps.

Prerequisites
Node.js and npm installed

A PostgreSQL instance (local or cloud-based)

An EmailJS account

1. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Frontend Setup
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Create a .env file in the frontend root
touch .env

Add your EmailJS credentials to the .env file:

REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_public_key

3. Backend Setup
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the backend root
touch .env

Add your PostgreSQL connection string to the .env file:

DATABASE_URL="postgresql://user:password@host:port/database"

4. Run the Application
# Run the backend server (from the backend folder)
# The server will run on http://localhost:8080
node server.js

# Run the frontend React app (from the frontend folder)
# The app will run on http://localhost:3000
npm start

📈 Future Improvements
Cloud File Uploads: Integrate a service like AWS S3 or Cloudinary to handle actual resume file uploads.

Input Validation: Add robust server-side and client-side validation, along with a CAPTCHA to prevent spam.

Applicant Email Confirmation: Send an automated email to applicants confirming their submission.

Admin Dashboard: Create a secure admin panel to view, sort, and filter applicants from the database.

Authentication: Implement JWT-based authentication for the admin dashboard.

Testing: Add unit and integration tests for the backend API to ensure reliability.

Internationalization (i18n): Add support for multiple languages.

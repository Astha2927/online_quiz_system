## Online Quiz System (MERN Stack)

This is an Online Quiz System developed as part of my internship project using the MERN stack.

## Features
- User Registration
- User Login (Authentication)
- Quiz API
- RESTful APIs
- MongoDB Database

## Tech Stack
- Frontend: React
- Backend: Node.js, Express.js
- Database: MongoDB
- Tools: GitHub, Thunder Client

## Folder Structure
client/
server/
 ├── index.js
 ├── routes/
 │    └── auth.js
 ├── models/
 │    └── User.js
 ├── .env
 └── package.json

 ## How to Run the Project

1. Clone the repository
2. Navigate to the server folder  
   cd server
3. Install dependencies  
   npm install
4. Create a .env file and add:
   MONGO_URI=your_mongodb_connection_string
5. Start the server  
   npm start

 Note: The .env file is not pushed to GitHub for security reasons.

 ## API Endpoints

POST /api/auth/register  
POST /api/auth/login  
GET  /api/quiz

## Project Status
Backend authentication and quiz APIs are completed.

## Author
Astha

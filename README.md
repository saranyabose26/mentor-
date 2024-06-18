
# Mentor-Student Assigning API

This repository contains an Express.js server with APIs to manage mentors, students, and their assignments using a MongoDB database. This API allows for creating mentors and students, assigning students to mentors, managing mentor-student relationships, and retrieving relevant information such as assigned students for a mentor or the previous mentor of a student.


## Features

1. Create Mentor
* Endpoint: `POST /api/mentors`
* Description: Creates a new mentor in the database.

2. Create Student
* Endpoint: `POST /api/students`
* Description: Creates a new student in the database.

3. Assign Student to Mentor
* Endpoint: POST `/api/mentor/assign`
* Description: Assigns a student to a mentor.

4. Add Multiple Students to One Mentor
* Endpoint: POST `/api/mentor/:mentorId/add-students`
* Description: Adds multiple students to a particular mentor.

5. Assign or Change Mentor for a Student
* Endpoint: PUT `/api/student/:studentId/assign-mentor/:mentorId`
* Description: Assigns or changes the mentor for a particular student.

6. Show All Students for a Mentor
* Endpoint: GET `/api/mentor/:mentorId/students`
* Description: Retrieves all students assigned to a specific mentor.

7. Show Previously Assigned Mentor for a Student
* Endpoint: GET `/api/student/:studentId/previous-mentor`
* Description: Retrieves the previously assigned mentor for a specific student.
## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose (MongoDB ODM)
## Setup Instructions

1. Clone the repository: 
git clone :
https://github.com/harikrishnan1697/Mentor-and-Student-Assigning

2. Install dependencies: `npm install`

3. Set up your MongoDB database and add the connection string in a `.env` file.
4. Start the server: `npm start`
5. postman Link : https://documenter.getpostman.com/view/30449091/2sA2rFSfy1

## Usage

* Use a tool like Postman or integrate these endpoints into your front-end application to interact with the APIs.
* Send requests to the specified endpoints with the required payload or parameters as described in the features.
## Deployment

This server can be deployed on platforms like Render or any other hosting service supporting Node.js applications.

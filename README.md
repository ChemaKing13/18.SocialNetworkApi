# Social Network API 🚀 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
This is a RESTful API for a social network application. It allows users to create accounts, share thoughts, add friends, and interact with other users.

## Table of Contents 
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)
- [Credits](#credits)
- [Demo](#demo)

## Technologies Used 
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation 
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd social-network-api`
3. Install the dependencies: `npm install`

## Usage
1. Start the server: `npm start`
2. Access the API at `http://localhost:<PORT>`

## API Routes
## Users 👥
- `GET /api/users` - Get all users
- `GET /api/users/:userId` - Get a single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:userId` - Update a user by ID
- `DELETE /api/users/:userId` - Delete a user by ID
- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list
## Thoughts 💡
- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:thoughtId` - Get a single thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:thoughtId` - Update a thought by ID
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Credits 
In order to complete this challenge, I applied the knowledge seen in class, as well as additional resources from the Internet, such as articles and videos.
- https://www.mongodb.com/docs/manual/reference/method/cursor.skip/
- https://mongoosejs.com/docs/tutorials/findoneandupdate.html
- https://www.mongodb.com/docs/manual/reference/method/connect/
- https://www.geeksforgeeks.org/mongoose-mongoose-model-function/
- https://www.geeksforgeeks.org/mongoose-findoneanddelete-function/

## Demo 
You can checkout how does the API works [Here](https://drive.google.com/file/d/1pdHt2GSsWjOP1EMd5M-XkQ0Sn9yu-aeC/view)


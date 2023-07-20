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

##Credits 



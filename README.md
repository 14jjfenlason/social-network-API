# Social Network API 

## Description

The application is a backend API for a social network web application. It allows users to share their thoughts, react to friends' thoughts, and manage a list of friends. The API is built using Node.js, Express.js, and MongoDB with Mongoose for data modeling.

## Video usage:
https://drive.google.com/file/d/1AIdmkuph6I9f75zm-D0b6te8-17QYxKS/view

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/social-network-api.git
    ```

2. Navigate to the project directory:
    ```sh
    cd social-network-api
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the server:
    ```sh
    node server.js
    ```
## Usage

1. Start the server:
    ```sh
    node server.js
    ```

2. Open Insomnia (or any API client) and create a new request collection.

3. Add the following routes to the collection:

### User Routes

**`/api/users`**

- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a single user by its `_id` and populated thought and friend data.
- `POST /api/users`: Create a new user.
  ```json
  // example data
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```
- `PUT /api/users/:userId`: Update a user by its `_id`.
- `DELETE /api/users/:userId`: Remove user by its `_id`.

**`/api/users/:userId/friends/:friendId`**

- `POST /api/users/:userId/friends/:friendId`: Add a new friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Thought Routes

**`/api/thoughts`**

- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a single thought by its `_id`.
- `POST /api/thoughts`: Create a new thought.
  ```json
  // example data
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```
- `PUT /api/thoughts/:thoughtId`: Update a thought by its `_id`.
- `DELETE /api/thoughts/:thoughtId`: Remove a thought by its `_id`.

**`/api/thoughts/:thoughtId/reactions`**

- `POST /api/thoughts/:thoughtId/reactions`: Create a reaction stored in a single thought's `reactions` array field.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction by the reaction's `reactionId` value.

## Credits

Node.js: https://nodejs.org/
Insomnia: https://insomnia.rest/
Express.js: https://expressjs.com/
MongoDB: https://www.mongodb.com/
All codes used as reference are from projects and activities within The Coding Bootcamp at The University of Texas at Austin.
All guidance led by The Coding Bootcamp at The University of Texas at Austin.
Created by Joshua Fenlason: https://github.com/14jjfenlason

## License

MIT License

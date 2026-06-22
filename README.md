# Basic Texting App

A simple Texting Application built using  **Node.js** ,  **Express.js** ,  **MongoDB** , and  **EJS** . This project demonstrates basic CRUD (Create, Read, Update, Delete) operations with MongoDB.

## Features

* Create new messages
* View all messages
* Edit existing messages
* Delete messages
* Store data in MongoDB
* Server-side rendering using EJS

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Method Override

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mihirprabhakar/basic-texting-app
```

2. Install dependencies:

```bash
npm install
```

3. Start MongoDB locally.
4. Run the application:

```bash
npm start
```

or

```bash
npm run dev
```

5. Open your browser and visit:

```bash
http://localhost:8080/chats
```

## CRUD Routes

| Method | Route           | Description                |
| ------ | --------------- | -------------------------- |
| GET    | /chats          | Display all chats          |
| GET    | /chats/new      | Show form to create a chat |
| POST   | /chats          | Create a new chat          |
| GET    | /chats/:id/edit | Show edit form             |
| PUT    | /chats/:id      | Update a chat              |
| DELETE | /chats/:id      | Delete a chat              |

## Author

Mihir Prabhakar

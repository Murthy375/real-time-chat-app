# Read-Time Chat App

## ✍️ Description

A one-to-one real-time chat application built with authentication and message history.

## ⭐ Core Features

- User authentication(JWT)
- 1-to-1 messaging
- Real-time communication via Socket.IO
- Chat history
- Simple UI(Daisy UI)

## 🛠️ Tech Stack

### Frontend:

- React
- Daisy UI
- Tailwind CSS
- Socket.IO (client)

### Backend:

- Node.js
- Express
- Socket.IO
- MongoDB

## 🗂️ Project Structure

```
real-time-chat-app/
|_ /client
|_ /docs
|_ /server
|   |_ /node_modules
|   |_ /src
|   |   |_ /connections
|   |   |_ /controllers
|   |   |_ /middlewares
|   |   |_ /models
|   |   |_ /routes
|   |   |_ /services
|   |   |_ /utils
|   |   |_ /validations
|   |   |_ app.js
|   |   |_ server.js
|   |   |_ socket.js
|   |
|   |_ .env
|   |_ .env.example
|   |_ package.json
|   |_ pnpm-lock.yaml
|
|_ .gitignore
|_ notes.txt
|_ README.md
```

## 🛣️ API Routes

### Auth Routes

| method | endpoint    | desc                               | authentication needed |
| ------ | ----------- | ---------------------------------- | --------------------- |
| POST   | `/register` | to register a new user             | false                 |
| POST   | `/login`    | so user can login and recive token | false                 |

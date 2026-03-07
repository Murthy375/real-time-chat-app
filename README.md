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
my-chat-app/
|--/client
|--/docs
|--/server
|--README.md
|--.gitignore
```

## 🛣️ API Routes

### Auth Routes

| method | endpoint    | desc                               | authentication needed |
| ------ | ----------- | ---------------------------------- | --------------------- |
| POST   | `/register` | to register a new user             | false                 |
| POST   | `/login`    | so user can login and recive token | false                 |

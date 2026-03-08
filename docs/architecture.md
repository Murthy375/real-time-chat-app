# Architecture

The backend follows a layered architecture:

Routes -> Controllers -> Services -> Models

the flow:

- Route reveives the req
- Controller handles the req
- Service contains business logic and applies that logic
- Model interacts with DB(CRUD ops)

# Trybesmith Application

## Overview
Trybesmith is a Node.js application designed to manage a database of users and products. It features RESTful API endpoints to perform CRUD operations and user authentication. The application is containerized using Docker and employs MySQL for data storage.

## Table of Contents
1. [Features](#features)
2. [Dependencies](#dependencies)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Docker Usage](#docker-usage)
6. [Documentation](#documentation)
7. [Examples](#examples)
8. [Testing](#testing)
9. [License](#license)

## Features
- **User Management:** Create and manage user accounts.
- **Product Management:** Add, update, and delete products.
- **Authentication:** Secure login with JWT tokens.

## Dependencies
### Main Dependencies
- Node.js: `>=16.0.0`
- TypeScript
- Express
- MySQL
- Sequelize

### Dev Dependencies
- Jest
- Mocha
- Chai
- ESLint

For a complete list, see the `package.json` file

## Installation
To set up the Trybesmith project on your local machine, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/valedobrandi/trybesmith.git
   cd trybesmith
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Build and start the Docker containers:**
   ```sh
   docker-compose up -d --build
   ```

   The application will be available at `http://localhost:3001/swagger`.

## Project Structure

```plaintext
trybesmith/
├── src/
│   ├── controller/
│   ├── database/
│   ├── middleware/
│   ├── routers/
│   ├── service/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── tests/
│   ├── integration/
│   ├── unit/
│   ├── setup.js
│   └── teardown.js
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .sequelizerc
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

## Environment Variables

The application requires the following environment variables:

- `DB_USER`: Database user.
- `DB_PASSWORD`: Database password.
- `DB_HOST`: Database host.
- `DB_PORT`: Database port.
- `DB_NAME`: Database name.
- `JWT_SECRET`: Secret key for JWT authentication.

## Docker Usage

The application can be containerized using Docker. The `docker-compose.yml` file defines two services: `app-trybesmith` for the Node.js application and `db` for the MySQL database.

- **Build and start the containers:**

  ```sh
  docker-compose up --build
  ```

- **Stop the containers:**

  ```sh
  docker-compose down
  ```

## Documentation
### API Endpoints

#### User Endpoints
- **GET /users**: Retrieve all users.
- **POST /login**: User login.

#### Product Endpoints
- **GET /products**: Retrieve all products.
- **POST /products**: Add a new product.

### Middleware
- **Authorization**: Ensures the presence of `username` and `password` in requests.
- **Register Fields**: Validates the fields for product registration.

### Error Handling
Custom error handling middleware captures errors and sends appropriate HTTP responses.

## Examples
### User Registration
POST "/users"
```bash
'{
  "username": "Hagar",
  "password": "terrível",
  "vocation": "Guerreiro",
  "level": 10
}'
```

### Add Product
POST "/products"
```bash
'{
  "name": "Excalibur",
  "price": "10 peças de ouro",
  "userId": 1
}'
```

## Testing
The project includes unit and integration tests using Mocha, Chai, and Jest.

To run the tests, use:
```bash
npm test
```

To run the test coverage, use:
```bash
npm coverage
```

## Contributors
- **Bernardo Albuquerque** - Initial work

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details.

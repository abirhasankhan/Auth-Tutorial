# Auth-Tutorial

Auth-Tutorial is a full-stack authentication app built to handle user account creation, password reset, email verification, and user authentication with JWT tokens. This project demonstrates essential authentication workflows, including email-based verification, welcome emails, and cookie-based JWT authentication.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- User registration with email verification
- Password reset functionality
- Secure password storage using bcrypt
- Email notifications with Mailtrap (verification email and welcome email)
- JWT-based authentication with cookies for session management
- MongoDB for user data storage

## Technologies

### Backend

- **Node.js** with **Express.js**: For handling server requests and managing the API.
- **Mailtrap**: For sending email notifications during signup, account verification, and password reset.
- **JWT (JSON Web Tokens)**: For managing user authentication and sessions.
- **MongoDB**: Database to store user information.
- **Packages**:
  - `express`
  - `cookie-parser`
  - `mailtrap`
  - `bcryptjs`
  - `dotenv`
  - `jsonwebtoken`
  - `mongoose`
  - `crypto` _(Note: The standalone `crypto` package is deprecated; we use Node's built-in crypto module)_

### Frontend

- **React**: For building user interfaces.
- **Tailwind CSS**: For styling and a responsive design.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mailtrap Account](https://mailtrap.io/)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Auth-Tutorial.git
   cd Auth-Tutorial/backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in `Auth-Tutorial/`.

```plaintext
# Server port
PORT=your_server_port

# MongoDB URI
MONGO_URI=your_mongodb_uri

# JWT Secret
JWT_SECRET=your_jwt_secret

# Mailtrap configuration
MAILTRAP_USER=your_mailtrap_user
MAILTRAP_PASSWORD=your_mailtrap_password

NODE_ENV=development

CLIENT_URL=http://localhost:your-frontend-port

```

## Usage

1. Register a new account through the registration form on the frontend.
2. Verify the account by checking the verification email sent via Mailtrap.
3. Login using the registered credentials to access protected routes.
4. Use the “Forgot Password” feature to reset the password if necessary.
5. Upon successful login, a JWT token is stored in cookies to manage sessions.

## Folder Structure

```plaintext
Auth-Tutorial/
│
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── mailtrap          # Mailtrap configuration file
│   ├── middleware
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js           # Main server file
│
├── frontend/
│   ├── src/
│   ├── public/
|
├── .env            # environment variables 
└── README.md
```

## License

This project is licensed under the MIT License.

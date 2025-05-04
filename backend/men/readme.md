# MERN Backend Boilerplate

This is a generalized and deployment-ready backend boilerplate using Express, Mongoose, and Node.js. It provides a solid foundation for building RESTful APIs that can be easily deployed on platforms like Railway, Render, or any other cloud hosting service.

Initial version created by Muhammad Shahzeel.

## Features

- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Environment Variables**: `.env` file support via dotenv
- **CORS Support**: Built-in Cross-Origin Resource Sharing
- **ES Modules**: Modern JavaScript with import/export syntax
- **Development Mode**: Fast development with nodemon auto-restart
- **Deployment-Ready**: Preconfigured for easy deployment on services like Railway, Render, etc.
- **Always Updated**: Configured to use the latest versions of all dependencies

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (or a cloud database service like MongoDB Atlas)
- [Git](https://git-scm.com/)

## Project Details

- **Name**: mern-backend-boilerplate
- **Version**: 1.0.0
- **License**: MIT
- **Type**: ES Modules (uses `import` syntax)

## Installation

Follow these steps to get your project up and running locally.

### Clone the Repository

```bash
git clone https://github.com/MuhammadShahzeel/mern-backend-boilerplate.git
cd mern-backend-boilerplate
```

### Install Dependencies

This boilerplate is designed to always use the latest versions of dependencies. Run the following commands to install them:

```bash
# Install main dependencies
npm install express mongoose dotenv cors

# Install development dependencies
npm install nodemon --save-dev
```

This ensures that you always get the most recent stable versions of all packages.

### Set Up Environment Variables

The project includes an `.env.example` file. Copy it to create your own `.env` file:

```bash
cp .env.example .env
```

Then edit the `.env` file with your actual configuration:

```bash
MONGO_URI=mongodb://localhost:27017/your-database-name
PORT=5000
```

* **MONGO_URI**: Your MongoDB connection string (use your actual MongoDB Atlas connection string or local MongoDB instance)
* **PORT**: The port your server will run on (default is 5000)

### Run the Project Locally

To run the backend server in development mode with nodemon (auto-restart on file changes):

```bash
npm run dev
```

To run the backend server in production mode:

```bash
npm start
```

The server will start and your backend API will be available at `http://localhost:5000` (or the port you specified in your .env file).

## Deployment

### Backend Deployment

**Railway**:
* Create a new project on [Railway](https://railway.app/)
* Link your GitHub repository and deploy the backend
* Set environment variables (`MONGO_URI` and `PORT`) in the Railway dashboard

## Dependencies

### Required Dependencies
- **express** - Fast, unopinionated web framework for Node.js
- **mongoose** - MongoDB object modeling tool
- **dotenv** - Loads environment variables from .env file
- **cors** - Enable CORS (Cross-Origin Resource Sharing)

### Development Dependencies
- **nodemon** - Monitor for any changes and automatically restart server

This boilerplate doesn't specify version numbers in package.json, ensuring you always install the latest stable versions of all dependencies.

## Troubleshooting

* If you encounter issues with MongoDB connection, check if your `MONGO_URI` is correct and your MongoDB instance is running
* Ensure that environment variables are correctly set on your cloud platform during deployment

## Contributing

Feel free to fork this repository and submit pull requests if you find bugs or want to add new features!
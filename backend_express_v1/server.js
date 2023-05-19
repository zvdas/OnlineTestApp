// import the necessary modules
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/mongodb.config');

// load environment variables
dotenv.config({ path: './config/config.env' });

// define express app
const app = express();

// connect to mongodb
connectDB();

// define port
const PORT = process.env.PORT || 4500;

// start express server
const server =
app.listen(
    PORT,
    () => console.log(`Express running on ${process.env.NODE_ENV} server running on port ${PORT}`.blue.bold.underline)
);

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.underline);
    // close server and exit process
    server.close(() => process.exit(1));
});
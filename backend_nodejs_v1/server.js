// import the necessary modules
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

// load environment variables
dotenv.config({ path: './config/config.env' });

// define express app
const app = express();

// define port
const PORT = process.env.PORT || 5000;

// start express server
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`.green.bold.underline));

// handle undhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.underline);
    // close server and exit process
    server.close(() => process.exit(1));
});
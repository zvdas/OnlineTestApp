// import the necessary modules
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const bodyParser = require('body-parser');

// load environment variables
dotenv.config({ path: './config/config.env' });

// database config files`
const connectDB = require('./config/mongodb.config');

// route files
const quiz = require('./routes/quiz.route');

// define express app
const app = express();

// use body parser
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

// connect to mongodb
connectDB();

// mount routers
app.use('/api/v1/quiz', quiz);

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
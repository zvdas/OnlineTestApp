const ErrorResponse = require("../utils/errorResponse");

const ErrorHandler = (err, req, res, next) => {
    let error = {...err};

    error.message = err.message;

    // mongoose bad ObjectId error
    if(err.name === 'CastError') {
        const message = `Resource with ID ${err.value} not found`;
        error = new ErrorResponse(message, 404);
    }

    // mongoose duplicate key error
    if(err.code === 11000) {
        const message = `Resource with name ${Object.keys(err.keyValue)} already exists`;
        error = new ErrorResponse(message, 400);
    }

    // mongoose validation error
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res
        .status(err.statusCode || 500)
        .json({
            success: false,
            error: error.message || 'Internal Server Error'
        });
};

module.exports = ErrorHandler;
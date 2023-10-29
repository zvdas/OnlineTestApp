const asyncHandler = require('../middleware/async');
const QuizModel = require('../models/quiz.model');
const ErrorResponse = require('../utils/errorResponse');

// @desc        Get all quiz questions
// @route       GET /api/v1/quiz
// @access      Public
exports.getQuizList = asyncHandler(async (req, res, next) => {
    const quiz = await QuizModel.find();

    res
        .status(200)
        .json({
            success: true,
            data: quiz
        });
});

// @desc        Get quiz questions by ID
// @route       GET /api/v1/quiz/:id
// @access      Public
exports.getQuizById = asyncHandler(async (req, res, next) => {
    const quiz = await QuizModel.findById(req.params.id);

    if(!quiz) {
        return(next(new ErrorResponse(`Quiz with ID ${req.params.id} not found`, 404)));
    }

    res
        .status(200)
        .json({
            success: true,
            data: quiz
        });
});

// @desc        Create new quiz question
// @route       POST /api/v1/quiz
// @access      Public
exports.createQuiz = asyncHandler(async (req, res, next) => {
    await QuizModel.create(req.body);

    res
        .status(201)
        .json({
            success: true,
            msg: `Quiz question created successfully`
        });
});

// @desc        Update quiz question by ID
// @route       PUT /api/v1/quiz/:id
// @access      Public
exports.updateQuizById = asyncHandler(async (req, res, next) => {
    const quiz = await QuizModel.findByIdAndUpdate(req.params.id, req.body, {runValidators: true});

    if(!quiz) {
        return(next(new ErrorResponse(`Quiz with ID ${req.params.id} not found`, 404)));
    }

    res
        .status(200)
        .json({
            success: true,
            msg: `Quiz questions for id ${req.params.id} updated successfully`
        });
});

// @desc        Delete quiz question by ID
// @route       DELETE /api/v1/quiz/:id
// @access      Public
exports.deleteQuizById = asyncHandler(async (req, res, next) => {
    const quiz = await QuizModel.findByIdAndDelete(req.params.id);

    if(!quiz) {
        return(next(new ErrorResponse(`Quiz with ID ${req.params.id} not found`, 404)));
    }

    res
        .status(200)
        .json({
            success: true,
            msg: `Quiz questions for id ${req.params.id} deleted successfully`
        });
});
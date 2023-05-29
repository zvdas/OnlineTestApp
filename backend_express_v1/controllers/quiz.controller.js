const QuizModel = require('../models/quiz.model');

exports.getQuizList = async (req, res, next) => {
    const quiz = await QuizModel.find();

    res
        .status(200)
        .json({
            success: true,
            data: quiz
        });
};

exports.getQuizById = async (req, res, next) => {
    const quiz = await QuizModel.findById(req.params.id);

    res
        .status(200)
        .json({
            success: true,
            data: quiz
        });
};

exports.createQuiz = async (req, res, next) => {
    await QuizModel.create(req.body);

    res
        .status(201)
        .json({
            success: true,
            msg: `Quiz question created successfully`
        });
};

exports.updateQuizById = async (req, res, next) => {
    const quiz = QuizModel.updateOne(req.params.id, req.body, { });

    res
        .status(200)
        .json({
            success: true,
            msg: `Quiz questions for id ${req.params.id} updated successfully`
        });
};

exports.deleteQuizById = async (req, res, next) => {
    res
        .status(200)
        .json({
            success: true,
            msg: `Quiz questions for id ${req.params.id} deleted successfully`
        });
};
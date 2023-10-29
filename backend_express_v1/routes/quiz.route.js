const express = require('express');
const {
    getQuizList,
    createQuiz,
    getQuizById,
    updateQuizById,
    deleteQuizById
} = require('../controllers/quiz.controller');

const router = express.Router();

router
    .route('/')
    .get(getQuizList)
    .post(createQuiz);

router
    .route('/:id')
    .get(getQuizById)
    .put(updateQuizById)
    .delete(deleteQuizById);

module.exports = router;
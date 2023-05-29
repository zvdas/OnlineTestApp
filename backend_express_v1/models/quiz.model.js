const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Please enter a question']
    },
    optionA: {
        type: String,
        required: [true, 'Please enter option A']
    },
    optionB: {
        type: String,
        required: [true, 'Please enter option B']
    },
    optionC: String,
    optionD: String,
    answer: {
        type: String,
        required: [true, 'Please enter an answer']
    }
});

module.exports = mongoose.model('Quiz', QuizSchema);
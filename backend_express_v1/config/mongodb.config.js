const mongoose = require('mongoose');

/* connect to mongoose and return success/error message */
const connectDB = async() => {
    const conn = await mongoose.connect(
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    console.log(`MongoDB connected: ${conn.connection.host}`.yellow.bold.underline);
};

module.exports = connectDB;
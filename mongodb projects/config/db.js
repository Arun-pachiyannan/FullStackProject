const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB) 
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error.message);
    }
}

module.exports = connectDb;


// "mongodb+srv://aruncoder1715:aruncoder1715@cluster0.hz9n33f.mongodb.net/Arun?retryWrites=true&w=majority&appName=Cluster0"
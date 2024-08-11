const mongoose= require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/blog_api');
    console.log("connected DB");
}

module.exports=connectDB
//exportting component like work in react
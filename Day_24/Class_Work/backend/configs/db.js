const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://ramazanrain:mdramjankhan01@cluster0.ba0zj.mongodb.net/MyDB";

exports.connectDB = mongoose.connect(mongoURI);
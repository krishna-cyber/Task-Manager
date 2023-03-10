const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const dbConnection = asyncHandler(async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
});

module.exports = dbConnection;

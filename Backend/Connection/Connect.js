const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://akhilsanker12345:A2khil002s@cluster0.yytggck.mongodb.net/Menu?appName=Cluster0";

mongoose.connect(mongoURI)
  .then(() => {
    console.log(" Connected to MongoDB Atlas via Mongoose");
    // Start server here if needed
  })
  .catch((err) => {
    console.error(" Mongoose connection error:", err);
  });

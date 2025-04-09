// const express = require("express");
// const app=express()
// const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/Menu',).then(()=>console.log('connected sucessfully'))
// .catch((err) => {console.error(err);})

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://akhilsanker12345:A2khil002s@cluster0.yytggck.mongodb.net/?appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
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

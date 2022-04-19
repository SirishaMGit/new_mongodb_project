
import mongoose from 'mongoose';
import express from 'express';
const app = express();
const hostname = '127.0.0.1';
const PORT = 2000;
const router = express.Router();
app.use("/", router);
//const mongoose = Require('mongoose'); 
//const { connect, Promise } = pkg;
//import { connect, Promise } from 'mongodb';
//const uri = 'mongodb+srv://sirisha:password@532@cluster0.3nisr.mongodb.net/posts?retryWrites=true&w=majority';
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//connecting to mongoose
import posts from './model.js';

 mongoose.connect('mongodb+srv://sirisha:vABnqXqm5J2Z1HjJ@cluster0.3nisr.mongodb.net/posts?retryWrites=true&w=majority',
{
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
  );
//mongoose.Promise = global.Promise;
const  client= mongoose.connection;

client.once('open',()=>{
 console.log('connected to db'); 
});
//router.route("/insertdata").post(function(req, res) {});
router.route("/insertdata").post(function(req, res) {
  posts.insertMany(
    [
      { name: "Scooby" },
      { age: 5 },
      { breed: "Great Dane" },
      { name: "Rambo" },
      { age: 2 },
      { breed: "Pitbull" },
      { name: "Johny boy" },
      { age: 3 },
      { breed: "German Shephard" }
    ],    
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
    );
    posts.updateOne (
      [      
        { age: 6 }
      ],
  );
});


//client.collection(_err => {
//  const  collection  =  mongoose.db("store").collection("products");
//  collection
 //      .insertOne(
 //      {
 //          name:  "JavaScript T-Shirt",
  //        category:  "T-Shirts",
  //     }) 
  //     .then(() => {
   //      client.close();
  //    });
////});
//router.route("/update").post(function(req, res) {
//  posts.updateOne (
//    [      
//      { age: 5 }
//    ]
//  )
//});

app.use('/', (_req, res) => {
  res.send(client)
});

app.listen(PORT,hostname,()=>{
   console.log(`connected to database:  http://${hostname}:${PORT}`);
});
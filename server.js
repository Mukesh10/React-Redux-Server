//import the modules 

//require() is the predefined function used to import the modules.
const express = require("express");
const mongodb = require("mongodb");
const cors    = require("cors");

// we should devlope the rest api. 

//create the "rest" object.
//rest object used to develop rest services
const app = express();
//where "app" is the rest object
//where "app" object used to develope the rest services.

//enabled the cors policy.

// automatically enalbed the cors policy.
app.use(cors()) // cors used to enabled the port for communcation between port.

//set the JSON as MIME Type 
//MIME -> comunication language between client and server.

app.use(express.json()); // json is the communincation language between client and server.

//create the client object 
const ashokIT = mongodb.MongoClient;
// where "ashokIT" is the client oject.
// by using ashokIt only we can connect to the database.

//create the get request 

app.get("/products",(req,resp) => {
   ashokIT.connect("mongodb+srv://mukesh-10:mukesh-10@cluster0.b9efh.mongodb.net/redux-middleware?retryWrites=true&w=majority",
  (err,conection) =>{
      if(err) throw err;
      else {
          const db = conection.db("redux-middleware");
          console.log("db object is "+db);
          db.collection("products").find().toArray((err,array) =>{
                if(err) throw err;
                else {
                    console.log("response array : ",array);
                    resp.send(array);
                } 
          });
      }

  } );   
});

//assign the port number
app.listen(8085,()=>{
  console.log("server listening the port number 8085");    

});

// start the node server.js 
   // node server 

  // test the rest api by using postman

























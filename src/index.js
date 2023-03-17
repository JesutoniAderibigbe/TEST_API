const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();



const app = express();
const port =  process.env.PORT || 3000;


//mongodb+srv://<username>:<password>@cluster0.8azare7.mongodb.net/?retryWrites=true&w=majority
//Jaderibigbe147$
//Jesutoni

// Connect to MongoDB
mongoose.connect('mongodb+srv://Jesutoni:Jaderibigbe147$@cluster0.8azare7.mongodb.net/todo-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: {
    w: 'majority'
  }
}).then(()=>{
  console.log("MongoDB connected")
});

// Set up middleware
app.use(bodyParser.json());


// Set up routes
app.use('/todos', todoRoutes);
app.use('/getUsers', userRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Todo API running at http://localhost:${port}`);
});


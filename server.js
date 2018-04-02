const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/petapp');
mongoose.connection.once('open', ()=>{
  console.log('connected to mongod');
})

app.listen(port, ()=>{
  console.log('listening');
})

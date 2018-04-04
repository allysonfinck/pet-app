const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const session = require('express-session');

app.use(express.json());
app.use(express.static('public'));
app.use(session({
  secret: 'feedmeseymour',
  resave: false,
  saveUninitialized: false
}))

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

const petsController = require('./controllers/pets.js');
app.use('/pets', petsController);



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/petapp');
mongoose.connection.once('open', ()=>{
  console.log('connected to mongod');
})

app.listen(port, ()=>{
  console.log('listening');
})

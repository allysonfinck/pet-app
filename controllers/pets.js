const express = require('express');
const router = express.Router();
const Pets = require('../models/pets.js');

router.get('/', (req, res)=>{
  Pets.find({}, (err, foundPets)=>{
    res.json(foundPets);
  })
})

router.post('/', (req, res)=>{
  Pets.create(req.body, (err, createdPets)=>{
    res.json(createdPets);
  })
})

module.exports = router;

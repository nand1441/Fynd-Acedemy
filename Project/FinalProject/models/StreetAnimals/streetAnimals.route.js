const express = require("express");
const User = require("./streetAnimals.model")
const app = express.Router();


app.post("/request", async (req, res) => {
  try{

    let obj = {
      fullname : req.body.fullname,
      email : req.body.email,
      mobileno : req.body.mobileno ,
      animaltype : req.body.animaltype ,
      animalno : req.body.animalno ,
      state : req.body.state ,
      city : req.body.city ,
      area : req.body.area ,
      street : req.body.street ,
      landmark : req.body.landmark 
    }
    console.log(req.body)
        let newStreetanimal = await User.create(req.body);
        res.send({
          newStreetanimal
        })
    }
    catch(err){
      return res.status(500).send(err.message);
    }
  })
  
  module.exports = app;
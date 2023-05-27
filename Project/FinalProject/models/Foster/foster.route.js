const express = require("express");
const Foster = require("./foster.model")
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
        let newFosteranimal = await Foster.create(req.body);
        res.send({
          newFosteranimal
        })
    }
    catch(err){
      return res.status(500).send(err.message);
    }
  })
  
  module.exports = app;
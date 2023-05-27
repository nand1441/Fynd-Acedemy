const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    mobileno: {type: String, required: true},
    animaltype:{type:String, required:true},
    animalno:{type:String, required:true},
    state:{type:String, required:true},
    city:{type:String, required:true},
    area:{type:String, required:true},
    street:{type:String, required:true},
    landmark:{type:String, required:true},
});

const Adopt = mongoose.model("adoption", adoptionSchema);

module.exports = Adopt;


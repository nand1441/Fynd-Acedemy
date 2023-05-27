const mongoose = require("mongoose");

const streetSchema = new mongoose.Schema({
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

const User = mongoose.model("street", streetSchema);

module.exports = User;


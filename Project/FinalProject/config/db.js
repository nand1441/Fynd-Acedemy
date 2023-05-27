const mongoose = require("mongoose");
const connect = () => {
    try {
        return mongoose.connect(`mongodb+srv://nanddadhania615:AHSLybvxEjpcmgrz@cluster1.mrdyhvt.mongodb.net/street_animals`);
        
    } catch (error) {
        console.log(error.message)
    }
}

// password Ko6NXGlqR52pf3gm

mongodb://localhost:27017/

module.exports = connect;
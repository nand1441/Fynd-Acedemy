const express = require("express");
const dbConnect = require("./config/db");
const cors = require("cors");

//Routers
const userRouter = require("./models/StreetAnimals/streetAnimals.route")
const adoptRouter = require("./models/Adoption/adoption.route")
const fosterRouter = require("./models/Foster/foster.route")
const app = express();
app.use(cors());
app.use(express.json());
//check
app.get("/", (req, res) => {
    res.send("Hi Fynd Academy")
})

//signup
app.use("/streetanimal", userRouter);
app.use("/adopt", adoptRouter);
app.use("/foster", fosterRouter);


let PORT = 8080;
app.listen(PORT, async() => {
    await dbConnect()
    console.log(`Listening to http://localhost:${PORT}`);

})
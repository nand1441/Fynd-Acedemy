<template >
    <div class="main-container">
        <button id="close-btn" @click="showForm()">&#10005;</button>
        <div class="container">
            <div class="content">
                <h1>"It's Take Only One minute"</h1>
                <div class="item-1">
                    <h2>How You Can Foster</h2>
                    <li>Fill The Form </li>
                    <li>Select A type of Animal</li>
                    <li>Please Provide Your Real Details. We take care about Your Privacy</li>
                    <li>We Will Contact You After you request for Foster</li>
                    <li>Our Team Come to Your place and check everything and take a signature in condition of Foster form</li>
                    <li>After completing All process you will take experience with that animal</li>
                </div>
            </div>
            <form @submit.prevent="handleSubmit">
                <h1>Foster Animals</h1>
                <label for="full-name">Full Name :</label>
                <input type="text" placeholder="Enter Full Name" v-model="fullname" name="full-name" id="full-name">
                <label for="email">Email :</label>
                <input type="email" placeholder="abc@gmail.com" v-model="email" name="email" id="email">
                <label for="mobile-no">Mobile No</label>
                <input type="tel" placeholder="+91" v-model="mobileno" name="mobile-no" id="mobile-no">
                <label for="">Animal Type : <span id="note">* note: Select Animal based on Available Animals</span></label>
                <select id="animal-tyle" v-model="animaltype" name="animal-type">
                    <option value="cow">Cow</option>
                    <option value="bull">Bull</option>
                    <option value="pig">Pig</option>
                </select>

                <label for="animal-no">Number Of Animal :</label>
                <input type="number" v-model="animalno" name="animal-no" id="animal-no">
                <label for="address">Address :</label>
                <div class="address">
                    <input id="state" v-model="state" type="text" placeholder="State">
                    <input id="city" v-model="city" type="text" placeholder="City">
                    <input id="area" v-model="area" type="text" placeholder="Area">
                    <input id="street" v-model="street" type="text" placeholder="Street">
                    <input id="landmark" v-model="landmark" type="text" placeholder="Landmark">
                </div>
                <button id="submit-btn">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "AnimalForm",
    data(){
        return{
            fullname:"",
            email:"",
            mobileno:"",
            animaltype:"",
            animalno:"",
            state:"",
            city:"",
            area:"",
            street:"",
            landmark:"",
            StreetAnimal: []
        }
    },
    methods: {
        handleSubmit(){
            axios.post("http://localhost:8080/foster/request", {
                fullname:this.fullname,
                email:this.email,
                mobileno:this.mobileno,
                animaltype:this.animaltype,
                animalno:this.animalno,
                state:this.state,
                city:this.city,
                area:this.area,
                street:this.street,
                landmark:this.landmark
            })
            .then((response) => {
                const data = response.data;
                this.StreetAnimal.push(data);
                this.fullname="";
                this.email="";
                this.mobileno="";
                this.animaltype="";
                this.animalno="";
                this.state="";
                this.city="";
                this.area="";
                this.street="";
                this.landmark="";
                console.log(data)
            })
        },
        showForm(){
            this.$emit("setShow1")
        }
    }
}
</script>

<style scoped>
.main-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.895);
    z-index: 1;
    /* padding-top: 5%; */
}
.container{
    height: 100%;
    width:100%;
    display: flex;
}
.content{
    width: 50%;
    height: 100%;
    background-color: rgba(175, 173, 173, 0.895);   
    padding: 10% 10%;
}
.content h1{
    font-size: 2vw;
}
.item-1{
    margin-top: 5%;
}
.item-1 h2{
    font-size: 1.5vw;
    margin-bottom: 2%;
    color: rgb(181, 87, 11);
}
.item-1 li{
    margin-top: 2%;
    font-size: 1.1vw;
}
form {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    background-color: rgba(175, 173, 173, 0.895);
    padding: 0.5% 5%;
}

form h1 {
    text-align: center;
    margin-bottom: 2%;
    margin-top: 4%;
}

label {
    margin-top: 3%;
    font-size: 1vw;
}

input {
    border: none;
    border-bottom: 1px solid;
    margin-top: 1%;
    font-size: 1vw;
    outline: none;
    padding: 1% 0;
    background-color: transparent;
}

.animal-type {
    margin-top: 1%;
}

select {
    background-color: transparent;
    width: 30%;
    margin-top: 2%;
    font-size: 1vw;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    padding: 1%;
}

option {
    background-color: rgba(0, 0, 0, 0.854);
    color: whitesmoke;
}

.address {
    display: grid;
    gap: 2%;
    grid-template-areas:
        "state city"
        "area street"
        "landmark landmark";
    margin-top: 1%;
}

#state {
    grid-area: state;
}

#city {
    grid-area: city;
}

#area {
    grid-area: area;
}

#street {
    grid-area: street;
}

#landmark {
    grid-area: landmark;
}

.address input {
    margin-top: 2%;
}

#submit-btn {
    width: 20%;
    margin-top: 10%;
    font-size: 1vw;
    padding: 1% 0;
    background-color: black;
    color: whitesmoke;
    margin-left: 40%;
}

#submit-btn:hover {
    border-radius: 30px;
    box-shadow: 0 2px 5px black;
}

#close-btn {
    position: absolute;
    right: 2%;
    font-size: 1.2vw;
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: none;
    margin-right: 1%;
    margin-top: 1%;
    cursor: pointer;
}</style>
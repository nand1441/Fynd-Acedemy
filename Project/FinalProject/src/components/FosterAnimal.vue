<template>
    <div class="container">
        <div class="items">
            <h1>Available Animals</h1>
            <div class="search">
                <input type="text" placeholder="Search">
                <button>Search</button>
            </div>
            <div class="fill-form">
                <button @click="showForm()">Fill Foster Form</button>
            </div>
            <h2>Select Animal Type</h2>
            <div class="category">
                <a @click="showDog">Dog</a>
                <a @click="showCat">Cat</a>
            </div>
            <div class="section">
                <DogCategory v-if="isShow1"/>
                <CatCategory v-if="isShow2"/>
            </div>
        </div>
    </div>
    <FosterForm v-if="isShow" @setShow2="setShow2()"/>
</template>

<script>
import DogCategory from "./DogCategory.vue"
import FosterForm from "./FosterForm.vue";
import CatCategory from "./CatCategory.vue";
export default {
    name:"AdoptAnimal",
    components:{
        DogCategory,
        FosterForm,
        CatCategory
    },
    data(){
        return{
            isShow:false,
            isShow1:false,
            isShow2:false
        }
    },
    methods:{
        showForm(){
            this.isShow = !this.isShow
        },
        setShow2(){
            this.isShow = false
        },
        showDog(){
            this.isShow1 = !this.isShow1
            this.isShow2 = false
        },
        showCat(){
            this.isShow2 = !this.isShow2
            this.isShow1 = false
        }
    }
}
</script>

<style scoped>
.container{
    width: 90vw;
    margin-left: 5%;
    margin-top: 2%;
    margin-bottom: 10%;
    padding: 3% 5%;
    background-color: rgba(175, 173, 173, 0.895);
    border-radius: 20px;
    height: 150vh;
    overflow: auto;
    position: relative;
}
.items h1{
    text-align: center;
}
.items h2{
    text-align: center;
    margin-top: 3%;
}
.search{
    width: 60%;  
    margin-left: 20%;
    margin-top: 2%;
    padding: 0.5% 1%;
    /* border: 1px solid black;
    border-radius: 20px; */
}
.search input{
    background-color: transparent;
    width: 70%;
    font-size: 1vw;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    padding: 1%;
}
.category{
    text-align: center;
    margin-top: 3%;
}

.category a{
    color: whitesmoke;
    padding: 1% 3%;
    border-radius: 20px 20px 0 0;
    background-color: black;
    font-size: 1vw;
    margin-right:1%;
    cursor: pointer;
}
.search button{
    font-size: 1vw;
    padding: 1% 4%;
    border-radius: 10px;
    background-color: black;
    color: whitesmoke;
    cursor: pointer;
    margin-left: 5%;
}
.section{
    margin-top: 8%;
    margin-left: 6%;
}
.fill-form button{
    padding: 0.5% 1%;
    font-size: 1vw;
    position: absolute;
    background-color: black;
    color: whitesmoke;
    border-radius: 10px;
    right: 8%;
    top: 9.5%;
    cursor: pointer;
}
</style>
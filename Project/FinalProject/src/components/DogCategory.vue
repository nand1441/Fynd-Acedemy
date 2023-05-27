<template>
    <div>
        <div class="items">
            <div class="dog">
                <img src="./img/German.jpg" alt="">
                <p><span>Breed : </span>German Shepherd <span></span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span>Xyz</span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
            <div class="dog">
                <img src="./img/Bulldog.jpg" alt="">
                <p><span>Breed : </span> <span>Bulldog</span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span></span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
            <div class="dog">
                <img src="./img/Labradore.jpg" alt="">
                <p><span>Breed : </span> <span>Labrador Retriever</span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span></span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
            <div class="dog">
                <img src="./img/poodle.jpg" alt="">
                <p><span>Breed : </span> <span>Poodle</span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span></span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
            <div class="dog">
                <img src="./img/Rottweiler.jpg" alt="">
                <p><span>Breed : </span> <span>Rottweiler</span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span></span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
        </div>
    </div>
</template>
 <script>
 export default {
    name:"DogCategory",
 }
 </script>

<style scoped>  
.items{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10%;
}
.dog{
    /* border: 1px solid black; */
    box-shadow: 0 2px 5px 1px black;
    border-radius: 20px;
    width: 18vw;
    padding-bottom: 3%;
}
.dog img{
    width: 100%;
    border-radius: 20px 20px 0 0;
    /* margin-bottom:4%; */
}
p{
    margin-top: 4%;
    margin-left: 4%;
}
</style>
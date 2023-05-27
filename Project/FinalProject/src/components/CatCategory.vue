<template>
    <div>
        <div class="items">
            <div class="cat">
                <img src="./img/American-Shorthair.jpg" alt="">
                <p><span>Breed : </span>American ShortHair <span></span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span>Xyz</span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
            <div class="cat">
                <img src="./img/Ragdoll.jpg" alt="">
                <p><span>Breed : </span> <span>Ragdoll</span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span></span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
            <div class="cat">
                <img src="./img/American-Curl.jpg" alt="">
                <p><span>Breed : </span> <span>American Curl</span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span></span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
            <div class="cat">
                <img src="./img/Siamese.jpg" alt="">
                <p><span>Breed : </span> <span>Siamese</span></p>
                <p><span>Age : </span> <span>1Year</span></p>
                <p><span>Location : </span> <span></span></p>
                <p><span>Temprament : </span> <span></span></p>
                <p><span>Medical History : </span> <span></span></p>
            </div>
            <div class="cat">
                <img src="./img/Balinese.jpg" alt="">
                <p><span>Breed : </span> <span>Balinese</span></p>
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
    name:"CatCategory",
 }
 </script>

<style scoped>  
.items{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10%;
}
.cat{
    /* border: 1px solid black; */
    box-shadow: 0 2px 5px 1px black;
    border-radius: 20px;
    width: 18vw;
    padding-bottom: 3%;
}
.cat img{
    width: 100%;
    border-radius: 20px 20px 0 0;
    /* margin-bottom:4%; */
}
p{
    margin-top: 4%;
    margin-left: 4%;
}
</style>
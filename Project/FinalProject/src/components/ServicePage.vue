<template>
    <div class="main-container">
        <h1 id="title">Services Provided By Us</h1>
        <div class="services">
            <div class="service-1">
                <a href="#" @click="showForm()">
                    <div class="img">
                        <img :src="images.img1" alt="">
                    </div>
                    <h1>Where's Animal</h1>
                </a>
            </div>
            <div class="service-2">
                <a href="/services/adopt_animal">
                    <div class="img">
                        <img :src="images.img2" alt="">
                    </div>
                    <h1>Adopt Animal</h1>
                </a>
            </div>
            <div class="service-3">
                <a href="/services/foster_animal">
                    <div class="img">
                        <img :src="images.img3" alt="">
                    </div>
                    <h1>Foster Animal</h1>
                </a>
            </div>
        </div>
        <div class="join-us">
            <h1>Join Us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sequi eum debitis maiores odio dolore culpa
                a id aut distinctio excepturi maxime magnam molestiae, vero pariatur dolores sunt beatae, omnis harum
                molestias suscipit ea reiciendis! Nesciunt laborum assumenda repellat vero?
            </p>
            <a href="#">Become a Member</a>
        </div>
        <AnimalForm v-if="isShow1" @setShow="setShow()"/>
    </div>
</template>

<script>
import AnimalForm from './AnimalForm.vue';
export default {
    name: "ServicePage",
    components: {
        AnimalForm,
    },
    data() {
        return {
            images: {
                img1: "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg?fit=696,464",
                img2: "https://g.foolcdn.com/editorial/images/144851/cow_and_calf.jpg",
                img3: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
            },
            isShow1:false,
        }
    },
    methods:{
        showForm(){
            this.isShow1 = !this.isShow1;
        },
        setShow(){
            this.isShow1 = false;
        }

       
    }
}
</script>

<style scoped>
#title {
    color: rgb(0, 0, 0);
    font-size: 55px;
    text-align: center;
    margin-top: 3%;
    width: 90vw;
    margin-left: 5%;
    padding: 3%;
    background-color: rgba(175, 173, 173, 0.895);
    border-radius: 20px 20px 0 0;
    /* background-color: whitesmoke; */
}


.services {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin-left: 5%;
    /* margin-top: 2%; */
    padding: 1% 5%;
    padding-bottom: 5%;
    background-color: rgba(175, 173, 173, 0.895);
    border-radius: 0 0 20px 20px;
}


:where(.service-1, .service-2, .service-3) {
    width: 400px;
    height: 350px;
    background-color: rgba(1, 1, 1, 0.109);
    border-radius: 20px;
}

:where(.service-1, .service-2, .service-3):hover {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.615);
}

:where(.service-1, .service-2, .service-3) a {
    width: 400px;
    height: 350px;
    border-radius: 20px;
    text-align: center;
}

:where(.service-1, .service-2, .service-3) h1 {
    margin-top: 20px;
    color: black;
}

.img {
    width: 100%;
    height: 80%;
    border-radius: 15px;
}

.img img {
    width: 95%;
    height: 95%;
    margin-top: 2.5%;
    border-radius: 15px;
}

.join-us {
    padding: 5% 3%;
    margin-top: 10%;
    /* padding-bottom: 20%; */
    width: 90vw;
    margin-left: 5%;
    margin-bottom: 20%;
    text-align: center;
    background-color: rgba(175, 173, 173, 0.895);
    border-radius: 20px;
}

.join-us h1 {
    text-align: center;
    font-size: 55px
}

.join-us p {
    width: 80%;
    font-size: 25px;
    line-height: 2;
    margin-left: 10%;
    margin-top: 10px;
    text-align: left;
    margin-bottom: 70px;
}

.join-us a {
    background-color: rgb(44, 133, 241);
    font-size: 20px;
    color: black;
    padding: 1% 2%;
    transition: 0.5s;
}

.join-us a:hover {
    box-shadow: 0 2px 5px black;
    border-radius: 30px;
    color: whitesmoke;
    transition: 0.5s;
}
</style>
<template>
    <div class="main-container">
        <!-- <NavBar/> -->
        <div class="container">
            <div class="main-img">
                <img v-bind:src="images.img1" alt="">
            </div>
            <!-- <div class="quotes">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ab suscipit totam at saepe incidunt maxime
                    vitae, illo tempore eos neque ex. Exercitationem odio voluptas cupiditate? Aliquam, necessitatibus eum.
                    Cumque!</p>
            </div> -->
        </div>

        <div class="section-1">
            <div class="our-details">
                <div class="years">
                    <span>2</span>
                    <h1>Year's of AF</h1>
                </div>
                <div class="members">
                    <span>50+</span>
                    <h1>Member's of AF</h1>
                </div>
                <div class="units">
                    <span>20+</span>
                    <h1>Units of AF</h1>
                </div>
            </div>
            <div class="about-us">
                <!-- <fieldset class="about-fieldset">
                    <legend>ABOUT US</legend>
                </fieldset> -->
                <div class="content">
                    <img src="./img/animals-15596.png" alt="">
                    <div class="about-details">
                        <h3>About</h3>
                        <h1>Animal's Friend</h1>
                        <p>An "Animal’s Friend " is an online platform designed to connect individuals interested in
                            adopting or fostering animals in need. The website serves as a centralized platform for animal
                            welfare, providing resources and tools to facilitate the adoption and fostering of animals.
                            The "Animal's Friend" typically features listings of animals available for adoption or
                            fostering, with
                            detailed profiles of each animal, including their breed, age, temperament, and medical history.
                            Users can create profiles and search for animals based on their preferences, such as location,
                            breed, and age.
                        </p>
                        <a href="/about_us" id="know-more">Read More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-2">
            <div class="services">
                <fieldset class="services-fieldset">
                    <legend>SERVICES</legend>
                </fieldset>
                <div class="service-1">
                    <span>1. Where's the Animals</span>
                    <p>"We Are Try to Save Street Animals" is that we try to solve the issue of stray animals and ways to
                        help
                        them. It highlights the various challenges that stray animals face, such as lack of food, water, and
                        medical care, and the dangers posed by traffic, abuse, and disease. So that's Why We Start that
                        services in that,You will fill the form and inform us Where is Such Type of Animal So we Can save
                        that Animals From Such issues Disscuss Above.
                    </p>
                </div>
                <div class="service-2">
                    <span>2.Foster Animals</span>
                    <p>
                        Foster animals are animals that are temporarily placed in the care of individuals or families who
                        provide them with a safe and nurturing environment until they are adopted into their forever homes.
                        Animal shelters and rescues often rely on foster families to help care for animals that are too
                        young, too sick, or have behavioral issues that make them unsuitable for adoption.

                        If you want to Foster Animal then you can use our this Service
                    </p>
                </div>
                <div class="service-3">
                    <span>3. Adopt Animals</span>
                    <p>
                        Adopting an animal means providing a permanent home for an animal that has been rescued or
                        surrendered to an animal shelter or rescue organization. Adopting an animal is a significant
                        commitment that requires providing the animal with love, care, and attention for its entire life.

                        If you want to Adopt Animal Then Contact us by using this Service
                    </p>
                </div>
                <!-- <div class="service-4">
                    <span>4. Provide Natural Product</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat veniam non consequuntur ex
                        adipisci optio nisi error soluta maiores omnis? Nihil aut nulla id voluptatibus? Dolor eligendi
                        accusantium itaque. Obcaecati, adipisci esse eius deleniti sed porro eum. Sit magni quod minus,
                        pariatur aliquid qui, soluta nesciunt reprehenderit, voluptatem consectetur nihil minima dolorum?
                        Corrupti, ratione culpa ab aut neque perferendis eaque nisi perspiciatis molestiae, et harum totam
                        tenetur. Provident iusto consequuntur minima impedit alias temporibus quae voluptates debitis
                        distinctio error laudantium nostrum dolores maiores, omnis ipsum nesciunt illum, dolorem iure non
                        repellendus est optio quod. Aperiam laudantium cupiditate repudiandae? Magnam, amet.
                    </p>
                </div> -->
            </div>
        </div>
        <div class="gallery">
            <div class="slider">
                <div class="img-slider">
                    <div class="img-1" v-for="i in [previousImg]" :key="i">
                        <img :src="previousImg" alt="">
                    </div>
                    <div class="img-2" v-for="i in [currentImg]" :key="i">
                        <img :src="currentImg" alt="">
                    </div>
                    <div class="img-1" v-for="i in [nextImg]" :key="i">
                        <img :src="nextImg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import NavBar from './NavBar.vue';
export default {
    name: "LandingPage",
    components: {
        // NavBar
    },
    data() {
        return {
            images: {
                img1: "https://cdn.shopify.com/s/files/1/0267/7119/4049/articles/blog_banner_animalday-01_1200x1200.jpg?v=1664899406",
            },
            sliderImg: [
                'https://wallpaperaccess.com/full/1996136.jpg',
                "https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg?cs=srgb&dl=pexels-andreas-barth-1131774.jpg&fm=jpg",
                "https://c4.wallpaperflare.com/wallpaper/809/561/143/owl-4k-ultra-hd-wallpaper-preview.jpg"
            ],
            currentIndex: 0,
            timer: null
            // aboutImg: "https://peopleforanimalsindia.org/uploads/page/166236331962288087.jpg"
        }
    },
    mounted: function () {
        this.sliderStart();
    },
    methods: {
        sliderStart() {
            this.timer = setInterval(this.next, 3000)
        },
        next() {
            this.currentIndex += 1;
        }
    },
    computed: {
        currentImg: function () {
            return this.sliderImg[Math.abs(this.currentIndex) % this.sliderImg.length];
        },
        previousImg: function () {
            return this.sliderImg[Math.abs(this.currentIndex - 1) % this.sliderImg.length];
        },
        nextImg: function () {
            return this.sliderImg[Math.abs(this.currentIndex + 1) % this.sliderImg.length];
        }
    }

}
</script>

<style scoped>
.container {
    display: flex;
    gap: 200px;
    /* background-color: whitesmoke; */
    /* padding-bottom: 10px; */
}

.main-img {
    width: 90vw;
    height: 50vh;
    margin-left: 5%;
    background-color: whitesmoke;
    margin-top: 3%;
    border-radius: 30px;
    /* padding-top: 2%; */
    /* padding-bottom: 1% */
}

.main-img img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
}

/* .quotes {
    width: 90%;
    margin-left: 5%;
    padding: 5%;
    margin-top: 5%;
    color: whitesmoke;
    font-size: 25px;
    background-color: rgba(0, 0, 0, 0.311);
    text-align: center;
    border-radius: 20px;
} */
.our-details {
    width: 100%;
    /* margin-left: 5%; */
    display: flex;
    padding: 4% 2%;
    justify-content: center;
    gap: 10%;
    background: url(./img/testimonial.png);
    background-size: cover;
    /* background-repeat: no-repeat; */

}

.years {
    /* border: 1px solid; */
    width: 200px;
    text-align: center;
}

.years span {
    font-size: 40px;
}

.members {
    /* border: 1px solid; */
    width: 250px;
    text-align: center;
}

.members span {
    font-size: 40px;
}

.units {
    /* border: 1px solid; */
    width: 250px;
    text-align: center;
}

.units span {
    font-size: 40px;
}

.about-us {
    margin-top: 4%;
}

.about-us .content {
    display: flex;
}

.about-details {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
}

.about-details h3 {
    color: rgb(226, 58, 43);
    font-size: 30px;
    margin-left: 2px;
}

.about-details h1 {
    font-size: 55px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

:where(.section-1, .section-2) {
    width: 90%;
    padding: 4% 2%;
    margin-left: 5%;
    margin-top: 5%;
    border-radius: 20px;
    background-color: rgba(175, 173, 173, 0.895);
}

.section-2 {
    margin-top: 10%;
}

.services-fieldset {
    text-align: center;
    border: none;
    border-top: 1px solid black;
    font-size: 50px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width: 90%;
    margin-left: 5%;
}

:where(.about-us) p {
    margin-top: 25px;
    font-size: 20px;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    /* margin-left: 10%; */
    word-spacing: 10px;
}

#know-more {
    background-color: transparent;
    width: 20%;
    border: 1px solid black;
    color: black;
    font-size: 20px;
    padding: 1% 3%;
    display: block;
    float: right;
    margin-right: 25%;
    text-align: center;
    margin-top: 5%;
    margin-left: 40%;
    /* transition: 0.5s; */
}

#know-more:hover {
    border: none;
    background-color: black;
    color: whitesmoke;
    border-radius: 10px;
    transition: 0.5s;
}

:where(.service-1, .service-2, .service-3, .service-4) p {
    font-size: 20px;
    line-height: 2;
    padding: 0 7.5%;
    margin-top: 10px;
    margin-bottom: 50px;
}

:where(.service-1, .service-2, .service-3, .service-4) span {
    font-size: 35px;
    padding: 0 5%;
    color: rgb(181, 87, 11);
}

.service-1 {
    margin-top: 50px;
}

.gallery {
    height: 850px;
    background-color: whitesmoke;
    margin-top: 10%;
    padding-top: 5%;
}

.slider {
    width: 90%;
    margin-left: 5%;
    /* border: 1px solid black; */
    height: 70%;
}

.img-slider {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 5%;
}

:where(.img-1, .img-2, .img-3) {
    width: 35%;
    height: 95%;
    overflow: hidden;
    /* border: 1px solid red; */
}

:where(.img-1, .img-3) {
    transform: scale(60%);
}

:where(.img-1, .img-2, .img-3) img {
    width: 100%;
    height: 100%;
    animation: slider 4s;
}

@keyframes slider {

    /* from{transform: translate(100%);}
    to{transform: translate(0%);} */
    0% {
        transform: translate(100%);
    }

    50% {
        transform: translate(0%);
    }

    75% {
        transform: translate(-100%);
    }

    100% {
        transform: translate(-100%);
    }
}

.img-2 {
    box-shadow: 20px 20px 10px rgb(114, 114, 114);
}</style>
<template>
    <div>
        <div class="decoration-img">
            <img src="./img/Pet-Transparent.png" alt="">
        </div>
        <div class="footer">
            <div class="item-1">
                <a href="/about_us">About Us</a>
                <a href="/contact-us">Support</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of Use</a>
            </div>
            <div class="item-2">
                <div class="facebook">
                    <a href="#"><img src="./img/fb.svg" alt=""></a>
                </div>
                <div class="insta">
                    <a href="#"><img src="./img/insta.svg" alt=""></a>
                </div>
                <div class="twitter">
                    <a href="#"><img src="./img/twitter.svg" alt=""></a>
                </div>
            </div>
            <div class="item-3">
                <p>© 2023 Nand Dadhania</p>
                <p>nanddadhania@gmail.com</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:"FooterSection",
}
</script>

<style scoped>
.footer {
    font-size: 20px;
    text-align: center;
    background-color: whitesmoke;
    /* margin-top: 10%; */
    /* padding-top: 10%; */
    padding: 2%;
    border-top: 1px solid black;
}

.item-1 a {
    margin-right: 2%;
    color: black;

}

.item-2 {
    margin-top: 3%;
    display: flex;
    justify-content: center;
    gap: 2%;
}

:where(.facebook, .insta, .twitter) {
    width: 2vw;
}

.item-3 {
    margin-top: 2%;
}

.decoration-img {
    position: absolute;
    width: 20%;
    margin-top: -9.4%;
    right: 40%;
}

.decoration-img img {
    width: 100%;
}
.decoration-img:hover{
    animation: vibrate 0.5s;
}
@keyframes vibrate{
    0%{transform: translateX(0);}
    12%{transform: translateX(-2%);}
    24%{transform: translateX(-4%);}
    36%{transform: translateX(-2%);}
    48%{transform: translateX(0);}
    60%{transform: translateX(2%);}
    72%{transform: translateX(4%);}
    84%{transform: translateX(2%);}
    100%{transform: translateX(0);}
}
</style>
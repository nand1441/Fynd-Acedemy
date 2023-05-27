<template>
    <div class="navbar">
        <div class="logo">
            <img src="./img/logo.png" alt="">
        </div>
        <div class="items">
            <li>
                <a href="/" >HOME</a>
            </li>
            <li>
                <a href="/services" >SERVICES</a>
            </li>
            <li>
                <a href="/donate" >DONATE</a>
            </li>
            <!-- <li>
                <a href="/help">BLOG</a>
            </li> -->
            <!-- <li>
                <a href="#">BUY PRODUCTS</a>
            </li> -->
            <li>
                <a href="/help">HELP</a>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style scoped>
li {
    list-style: none;
}

a {
    text-decoration: none;
}

.navbar {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
    /* background-color: whitesmoke; */
    /* padding-bottom: 30px; */
}

.items {
    display: flex;
    gap: 1%;
    align-items: center;
    margin-right: 12%;
    margin-top: 2%;
    
}
.items li{
    /* background-color: aliceblue; */
    position: relative;
    padding: 3% 10%;
    cursor: pointer;
}
.items a{
    font-size: 20px;
    font-weight: 400;
    /* color: rgb(87, 87, 87); */
    color: white;
    white-space: nowrap;
    
}
.items li::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    background-color: rgb(255, 255, 255);
    left: 0;
    bottom: 0;
    z-index: -10;
    border-radius: 10px 10px 0 0;
    transition: 0.5s;
}
.items li:hover{
    color: rgb(0, 0, 0);
    z-index: 2;
}
.items li:hover a{
    color: black;
    z-index: 1;
}
.items li:hover::before{
    height: 100%;
    transition: 0.5s;
}
.logo{
    width: 200px;
    margin-left: 30px;
}

.logo img{
    width: 100%;
}

</style>
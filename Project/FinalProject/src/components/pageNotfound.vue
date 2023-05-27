<template>
    <div>
        <a href="/">Back To Home</a>
    </div>
</template>

<script>
export default {
    name:"pageNotfound",
}
</script>

<style scoped>
    div{
        background:url(./img/pagenotfound.webp);
        background-size: 100% 100%;
        /* background-color: aqua; */
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        z-index: 99999;
    }
    a{
        background-color: grey;
        padding: 1% 2%;
        position: absolute;
        bottom: 3%;
        color: whitesmoke;
        font-size: 1vw;
        left: 45%;
    }
    a:hover{
        box-shadow: 0 2px 5px black;
    }
</style>
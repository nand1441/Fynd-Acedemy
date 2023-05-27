<template>
    <div class="container">
        <h1>Contact</h1>
        <form action="">
            <label for="full-name">Full Name :</label>
            <input type="text" id="full-name" name="full-name" placeholder="Enter Your Full Name">
            <label for="Email">Email :</label>
            <input type="email" id="email" name="email" placeholder="abc@gmail.com">
            <label for="message">Message :</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Message"></textarea>
            <button id="submit-btn">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name:"ContactForm"
}
</script>

<style scoped>
    .container{
       width: 80vw;
       /* height: 100vh; */
       margin-left: 10%;
       border-radius: 20px;
       background-color: rgba(175, 173, 173, 0.895);
       padding-top: 2%;
       margin-top: 3%;
    }
    h1{
        text-align: center;
        font-size: 2vw;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 40%;
        margin-left: 30%;
        /* margin-top: 5%; */
        margin-bottom: 20%;
        padding: 3% 0;
    }
    label{
        font-size: 1.1vw;
        margin-top: 5%;
    }
    input{
        font-size: 1.1vw;
        margin-top: 1%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
        padding: 0.5% 0;
    }
    textarea{
        background-color: transparent;
        outline: none;
        font-size: 1.1vw;
        padding: 0.5%;
        margin-top: 1%;
        resize: none;
        overflow-y: auto;
    }
    #submit-btn{
        margin-top: 10%;
        width: 30%;
        margin-left: 35%;
        font-size: 1.1vw;
        padding: 1% 0;
        background-color: black;
        color: whitesmoke;
        border-radius: 20px;
    }
    #submit-btn:hover{
        box-shadow: 0 2px 5px black;
        cursor: pointer;
    }
</style>
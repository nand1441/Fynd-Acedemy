<template>
    <div class="container">
        <div class="details">
            <h1>We Are Using Donation For :</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium quisquam esse eius tempore officia
                facilis corrupti a, earum aspernatur!</p>
        </div>
        <div class="payment">
            <div class="debit-card">
                <div class="debit-card-name">
                    <span class="name-debit" @click="showDebit()">DEBIT CARD</span>
                    <img src="./img/visa.png" alt="" >
                </div>
                <div class="debit-card-detail" id="debit" v-if="toShow">
                    <label for="">DEBIT CARD NUMBER </label>
                    <input type="number" id="debit-card-number">
                    <label for="">CARD HOLDER NAME</label>
                    <input type="text" id="debit-name-holder">
                    <div class="ex-cvv">
                        <div class="expiry">
                            <label for="">EXPIRY </label>
                            <input type="month" id="debit-expiry">
                        </div>
                        <div class="cvv">
                            <label for="">CVV </label>
                            <input type="tel" id="debit-cvv">
                        </div>
                    </div>
                    <button id="donate-btn">DONATE</button>
                </div>
            </div>
            <div class="credit-card">
                <div class="credit-card-name">
                    <span class="name-credit" @click="showCredit()">CREDIT CARD</span>
                    <img src="./img/atm-card.png" alt="">
                </div>
                <div class="credit-card-detail" id="credit" v-if="toHide">
                    <label for="">CREDIT CARD NUMBER </label>
                    <input type="number" id="credit-card-number">
                    <label for="">CARD HOLDER NAME</label>
                    <input type="text" id="credit-name-holder">
                    <div class="ex-cvv">
                        <div class="expiry">
                            <label for="">EXPIRY </label>
                            <input type="month" id="credit-expiry">
                        </div>
                        <div class="cvv">
                            <label for="">CVV </label>
                            <input type="tel" id="credit-cvv">
                        </div>
                    </div>
                    <button id="donate-btn">DONATE</button>
                </div>
            </div>
            <div class="upi">
                <div class="upi-name">
                    <span id="upi">UPI</span>
                    <img src="./img/upi-icon.png" alt="" width="12%">
                </div>
                <div class="upi-app">
                    <a href="#"><img src="./img/google-pay-icon.png" alt="" width="10%"></a>
                    <a href="#"><img src="./img/phonepe-logo-icon.png" alt="" width="10%"></a>
                    <a href="#"><img src="./img/paytm.png" alt="" width="10%"></a>
                </div>
            </div>
            <div class="paytm-wallet">
                <div class="paytm-name">
                    <span id="wallet">Paytm Wallet</span>
                    <img src="./img/wallet.png" alt="" width="10%">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DonatePage",
    data(){
        return{
            toShow:true,
            toHide:false
        }
    },
    methods:{
        showDebit(){
            this.toShow = true;
            this.toHide = false;            
        },
        showCredit(){
            this.toShow = false;
            this.toHide = true;  
        }
    }
}
</script>

<style scoped>
    .container{
    display: flex;
    /* gap: 20%; */
    width: 90vw;
    margin-left: 5%;
    margin-top: 2%;
    margin-bottom: 10%;
    
}

.details{
    background-color: rgba(0, 0, 0, 0.637);
    padding: 5%;
    color: whitesmoke;
    width: 40vw;
    height: 35vw;
    margin-top: 5%;
    border-radius: 20px 0 0 20px;
    box-shadow: 1px 4px 5px black;
}

.details h1{
    font: 1.5vw;
}

.details p{
    margin-top: 3%;
    text-align: justify;
}
.payment{
    /* border: 1px solid; */
    width: 40vw;
    height: 45vw;
    padding: 2% 5%;
    background-color: rgba(245, 245, 245, 0.851);
    border-radius: 20px;
    box-shadow: 4px 4px 5px black;
}

.debit-card-name{
    display: flex;
    justify-content: space-between;
    padding: 3%;
    padding-bottom: 0;
    /* border: 1px solid; */
}

.debit-card-name img{
    margin-top: -5%;
    width: 15%;
}
.debit-card{
    width: 25vw;
    margin-top: 5%;
    /* border: 1px solid; */
    padding: 3%;
    
}

.debit-card-detail{
    width: 25vw;
    display: flex;
    margin-top: 3%;
    flex-direction: column;
}

label{
    margin-top: 3%;
}
input{
    margin-top: 2%;
    width: 90%;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background-color: transparent;
    padding: 0.5%;
}

.ex-cvv{
    display: flex;
    gap: 20%;
    margin-top: 3%;
}

.expiry{
    display: flex;
    flex-direction: column;
}
.expiry input{
    margin-top: 3.5%;
}
.cvv{
    display: flex;
    flex-direction: column;
}
.cvv input{
    width: 50%;
}

.name-debit:hover{
    cursor: pointer;
}

#donate-btn{
    margin-top: 8%;
    width: 30%;
    padding: 2%;
    margin-left: 30%;
    background-color: black;
    border: none;
    color: whitesmoke;
    transition: 0.3s;
}

#donate-btn:hover{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.808);
    box-shadow: 0 2px 5px black;
    border-radius: 20px;
    transition: 0.3s;
}
.credit-card{
    width: 25vw;
    margin-top: 5%;
    /* border: 1px solid; */
    padding: 3%;
}

.credit-card-detail{
    width: 25vw;
    display: flex;
    flex-direction: column;
    /* border: 1px solid; */
    margin-top: 3%;
}

.credit-card-name{
    display: flex;
    justify-content: space-between;
    padding: 3%;
    padding-bottom: 0;
    /* border: 1px solid; */
}

.credit-card-name img{
    margin-top: -3%;
    width: 10%;
}

.name-credit:hover{
    cursor: pointer;
}

.upi-name{
    display: flex;
    justify-content: space-between;
    /* border: 1px solid; */
    padding: 3%;
    padding-bottom: 0%;

}

.upi-name img{
    margin-top:-3% ;
}
.upi{
    /* border: 1px solid; */
    width: 25vw;
    margin-top: 5%;
    padding: 3%;
}

.upi-app{
    margin-top: 3%;
    margin-left: 2%;
}

.upi-app a{
    margin-right: 5%;
}


.paytm-wallet{
    margin-top: 5%;
    width: 25vw;
    padding: 3% 6%;
    /* border: 1px solid; */
}

.paytm-name{
    display: flex;
    justify-content: space-between;
    /* padding: 3%; */
    padding-bottom: 0;
}

.paytm-name img{
    margin-top: -2%;
}

#wallet:hover{
    cursor: pointer;
}
</style>
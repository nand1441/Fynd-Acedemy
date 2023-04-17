let showDiv = document.querySelector(".item")
let msg = document.querySelector(".msg")
let btn = document.querySelector("#start-btn")

document.body.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        showDiv.style.display = "block"
        msg.style.display = "none"
    }
})


// const showItem = () => {
//     if(showDiv.style.display === "none"){
//         showDiv.style.display = "block";   
//     }else{
//         showDiv.style.display = "none"
//     }
//     if(btn.style.display === "block" ){
//         btn.style.display = "none"
//     }else{
//         btn.style.display = "block"
//     }
// }


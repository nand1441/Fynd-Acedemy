var index = 0;
function slideShow(){
    let slides = document.getElementsByClassName("slider-img");
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    index++;
    if(index > slides.length){
        index = 1;
    }
    slides[index-1].style.display = "block";
    setTimeout(slideShow, 2000);

}
slideShow()


function print(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let mobile = document.getElementById("mobile-no").value;
    let email = document.getElementById("email").value;
    let cow = document.getElementById("no-cows").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    let area = document.getElementById("area").value;
    let street = document.getElementById("street").value;
    let landmark = document.getElementById("landmark").value
// let address= document.getElementById("address").value;
    localStorage.setItem("value1",firstname);
    localStorage.setItem("value2",lastname);
    localStorage.setItem("value3",mobile);
    localStorage.setItem("value4",email);
    localStorage.setItem("value5",cow);
    localStorage.setItem("value6",state);
    localStorage.setItem("value7",city);
    localStorage.setItem("value8",area);
    localStorage.setItem("value9",street);
    localStorage.setItem("value10",landmark);

    

    let msg =document.getElementById("msg")
    if(msg.style.display == 'none'){
        msg.style.display = "block"
    }else{
        msg.style.display = "none"
    }

    setTimeout(function(){
        let msg =document.getElementById("msg")
        if(msg.style.display == 'block'){
            msg.style.display = "none"
        }else{
            msg.style.display = "none"
        }
    }, 2000)

   
}


function adoptionForm(){
    let form = document.getElementById("adoption");
    if(form.style.display == "none"){
        form.style.display = "block";
    }else{
        form.style.display = "block"
    }
}
adoptionForm()

function hideForm(){
    let form = document.getElementById("adoption");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "none"
    }
}
hideForm()

function adoptSubmit(){
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let phone = document.getElementById("contact-no").value
    let email_add = document.getElementById("adoption-email").value
    localStorage.setItem("firstname",fname)
    localStorage.setItem("lastname",lname)
    localStorage.setItem("phone-no",phone)
    localStorage.setItem("email-add",email_add)
    let form = document.getElementById("adoption");
    if(form.style.display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "none"
    }

    let msg =document.getElementById("msg")
    if(msg.style.display == 'none'){
        msg.style.display = "block"
    }else{
        msg.style.display = "none"
    }

    setTimeout(function(){
        let msg =document.getElementById("msg")
        if(msg.style.display == 'block'){
            msg.style.display = "none"
        }else{
            msg.style.display = "none"
        }
    }, 2000)
}
adoptSubmit()



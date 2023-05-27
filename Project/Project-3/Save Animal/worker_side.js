        document.getElementById("first").innerHTML = localStorage.getItem("value1");
        document.getElementById("last").innerHTML = localStorage.getItem("value2");
        document.getElementById("mobile").innerHTML = localStorage.getItem("value3");
        document.getElementById("cows").innerHTML = localStorage.getItem("value5");
        document.getElementById("state").innerHTML = localStorage.getItem("value6");
        document.getElementById("city").innerHTML = localStorage.getItem("value7");
        document.getElementById("area").innerHTML = localStorage.getItem("value8");
        document.getElementById("street").innerHTML = localStorage.getItem("value9");
        // document.getElementById("landmark").innerHTML = localStorage.getItem("value10");
        // document.getElementById("address").innerHTML = localStorage.getItem("value6");
        // document.getElementById("name").innerHTML = localStorage.getItem("value1")
        

        //Adoption Request Form
        document.getElementById("fname").innerHTML = localStorage.getItem("firstname");
        document.getElementById("lname").innerHTML = localStorage.getItem("lastname");
        document.getElementById("phone").innerHTML = localStorage.getItem("phone-no");
        document.getElementById("email-add").innerHTML = localStorage.getItem("email-add");

        function onload() {
            //    alert("hello")
            let a = document.getElementById("first").innerHTML = localStorage.getItem("value1");
            console.log(a)
            let pattern = /\w/g;
            let result = pattern.test(a);
            if (result == true) {
                document.getElementById("alert").style.display = "block";
            } else {
                document.getElementById("alert").style.display = "none";
            }

            let adopt =  document.getElementById("fname").innerHTML = localStorage.getItem("firstname");
            let pattern1 = /\w/g;
            let result2 = pattern1.test(adopt);
            if(result2 == true){
                document.getElementById("adoption-info").style.display = "block";
            }else{
                document.getElementById("adoption-info").style.display = "none";
            }
        }

        function show() {
            let info = document.getElementById("info");
            if (info.style.display === "none") {
                info.style.display = "block";
            } else {
                info.style.display = "block";
            }
            document.getElementById("alert").style.display = "none";
        }

        function done(){
            if(document.getElementById("check").style.display === "none"){
                document.getElementById("check").style.display = "block";
            }else{
                document.getElementById("check").style.display = "none"
            }
            if( document.getElementById("complete-btn").style.display === "block"){
                document.getElementById("complete-btn").style.display = "none"
            }else{
                document.getElementById("complete-btn").style.display = "block"
            }
            
        }
        done()

        function accept(){
            let right = document.getElementById("accept");
            if(right.style.display === "none"){
                right.style.display = "block"
            }else{
                right.style.display = "none"
            }
            if( document.getElementById("adopt-btn").style.display === "flex"){
                document.getElementById("adopt-btn").style.display = "none"
            }else{
                document.getElementById("adopt-btn").style.display = "flex"
            }
            
        }accept()

        function reject(){
            let cross = document.getElementById("reject");
            if(cross.style.display === "none"){
                cross.style.display = "block"
            }else{
                cross.style.display = "none"
            }
            if( document.getElementById("accept-btn").style.display === "block"){
                document.getElementById("accept-btn").style.display = "none"
            }else{
                document.getElementById("accept-btn").style.display = "block"
            }
            if( document.getElementById("reject-btn").style.display === "block"){
                document.getElementById("reject-btn").style.display = "none"
            }else{
                document.getElementById("reject-btn").style.display = "block"
        }
    }reject()


       

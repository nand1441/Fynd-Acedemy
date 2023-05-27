function showCredit(){
    let credit = document.getElementById("credit")
    let debit = document.getElementById("debit")
    if(credit.style.display = "none"){
        credit.style.display = "flex";
    }else{
        credit.style.display ="none";
    }
    if(debit.style.display = "flex"){
        debit.style.display = "none";
    }else{
        debit.style.display ="flex";
    }
}

function showdebit(){
    let credit = document.getElementById("credit")
    let debit = document.getElementById("debit")
    if(debit.style.display = "none"){
        debit.style.display = "flex";
    }else{
        debit.style.display ="none";
    }
    if(credit.style.display = "flex"){
        credit.style.display = "none";
    }else{
        credit.style.display ="flex";
    }
}


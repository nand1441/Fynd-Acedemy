let x = [15,7,3,1,9,4,20,35,2]
let y = ["peater","zaya","tony","Dev","Steave","nata"]
console.log(x.sort((a,b) =>{ console.log("The value of A is",a); console.log(b); return a-b}))
console.log(y.sort((a,b) => {
    let c = a.toLowerCase();
    let d = b.toLowerCase();
    // console.log(a)
    // console.log(b)
    // if(a>b){
    //     return -1;
    // }
    // if(b<a){
    //     return 1;
    // }
    // return 0;
    console.log(c);
    console.log(d);
    if(c>d){
        return 1;
    }
    if(d>c){
        return -1;
    }


}))
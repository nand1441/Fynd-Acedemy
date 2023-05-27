        // const outer=()=>{
        //     let b=10;
        //     console.log(b);
        // }
        // outer()


        // const outer=(()=>{
        //     let b=11;
        //     console.log(b);
        // })();


        // const outer = () => {
        //     let b = 11;
        //     console.log(b);
        //      return 'abc'
        //      return 9
        //      return null
        //      return undefined
        // }
        // console.log(outer);
        // console.log(outer());

    // var a=10;
    // function first(){
    //     var b=11;
      
    //     function second(){
    //         var c=12;
    //         console.log(a,b,c);
    //     }
    //     second()
    // }
    // console.log('lets see');
    // first()
    // second()


    // const a=7;
    
    // function show(){
    //     console.log(a);
    // }

    // show()


    // const outer=(a)=>{
    //     let b=10;
    //     const innerFunction=()=>{
    //         let sum=a+b;
    //         console.log('the sum is ',a+b);

    //     }
    //      innerFunction()
    //      return innerFunction
    // }
    // outer(6)


    // const outer=(a)=>{
    //     let b=10;
    //   function  innerFunction(){
    //         let sum=a+b;
    //         console.log('the sum is ',a+b);
    //         return 9
    //     }
    //     innerFunction()
    //     return innerFunction
    // }
    // outer(6)



//  function outside(){
//     const x=6;
//     function inside(a){
//         console.log('hello',a);
//     }
//     return inside
//  }
//  outside()(7)
// outside(inside)



// const outer=(a)=>{
//     let a=9;
//     console.log('hello from outside function');
//     const inner=()=>{
//         let b=10;
//         console.log('the sum is ',a+b);
//         return 88
//     }
//     inner()
//     return inner()
// }
// const data=outer(8);
// console.log('the data is',data(9));
// outer(9);
// console.log(outer(9));
// const data=outer;
// console.log(data());
// console.log(data(9));


// const outer=(a)=>{
//      let b=9;
//     let name='abc'
//     console.log('hello from outside function');
//     const inner=()=>{
//         let b=10;
//         return console.log('the sum is ',a+b);
        
//     }
//     inner()
//     return inner
// }
// const data=outer(8);
// console.dir(data);
// log


//example 10

// const outer=(a)=>{
//     let b=11;
//     return innerFunction=()=>{
//         let b=111;
//         let sum=a+b;
//         console.log('the sum is ',sum);
//         return console.log('h');
//     }

// }
// let inner=outer(6);
// console.log(inner);
// console.log(inner);
// inner()
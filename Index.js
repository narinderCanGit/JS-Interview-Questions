// Var let and const
    // Scope
    // Variable Shadowing
    // Hoisting

// var a=5;
// var a=10;

// let b=5;
//  b=6;

//  const c=4;
//  c=2;

// let c=3;
// var c=4;

// const a=2;
// a=3;
// {
//   var a=10;
// }

// var a;

// console.log(a);
// var a=10;

// var a=5;
// function test(){
//     let c=10;
//     console.log(c);
//     console.log(a);
// }
// test();
// console.log(a);

// Hoisting
// let a;

// console.log(a);

// function test(){
//     console.log("Hello");
//     return 5;
// }

// console.log(test());

//Function declaration

// function cube(n) {
// return n * n * n;
// }
// console.log(cube(3));


//Function expression

// console.log(a);
// var a = function(){
// console.log("Inside function");
// return 2;
// }
// console.log(a());
// a();

// function a(){
//     // var a=1; 2
//     function b (){
//           // let a=4; 1
//         console.log(a);
//         //  var a=10; 3
//     }
//     // let a=3; 5
//     b();
//     // let a=3; //5
// }

// a();

// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }

// for(var i=0;i<5;i++){
//     function test(a){
//         setTimeout(function(){
//             console.log(a);
//         },1000);
//     }
//    test(i);
// }

// setTimeout(function(){
//     console.log("4");
// },0);
// new Promise((resolve, reject)=>{
//     resolve("Hey");
//   // reject("Error");
// }).then(res=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// });
// console.log("1");
// setTimeout(function(){
//     console.log("2");
// },1000);
// console.log("3");
// setTimeout(function(){
//     console.log("5");
// },0);


// console.log(2=="2");
// console.log(2==="2");

// var a=null;
// console.log(typeof(a));

// console.log(null==undefined);
// console.log(null===undefined);

// var a;
// var b=null;

// if(a){
//     console.log("a is true");
// }else if (b){
//     console.log("b is true");
// }else{
//     console.log("else part");
// }

// var obj={
//     prop1:1,
//     prop2: function() {
//         console.log(this);
//         console.log(arguments);
//     },
//     prop3: ()=>{
//         console.log(this);
//          console.log(arguments);
//     }
// }

// obj.prop2(2,3);
// obj.prop3(2,3);

// const obj= {
//   a:10
// };

// Object.freeze(obj); // No operation
// Object.seal(obj);    Update only
// Object.preventExtensions(obj);   update and delete

// obj={
//   a:20
// }
// obj.a=20;
// obj.b=2;

// console.log(obj);


// Shallow copy

// obj1={
//     a:10
// }
// const obj2 = obj1;
// obj2.a=20;
// console.log(obj1);
// console.log(obj2);
// var obj1;
//  let obj1;

//Deep copy
// obj2.a=20;
// obj2={
//     a:30
// }

// obj1={
//     a:10
// }
// const obj2 = {...obj1};
// const obj2 = JSON.parse(JSON.stringify(obj1));

// var obj2={};
// Object.assign(obj2, obj1)

// obj2.a=20;
// console.log(obj1);
// console.log(obj2);

//Array destructuring
// [a,b,...rest] = [1,2,3,4,5,6,7,8];
// console.log(a,b,rest);

//Object destructuring
// ({a,b,...c}={a:1,b:3,c:6,d:7});
// console.log(a,b,c);

//Spread operator
// let arr=[1,3,4,5,7];
// let arr2=[...arr]
// let arr2=arr;
// console.log(arr2);

// console.log((function(x, f = () => x) {
//   var x;
//   var y = x;  //1
//   x = 2;
//   return [x, y, f()];
// })(1));

// console.log(add(2)(3)(6)); //11

// function add(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }

// var add = (a) => {
//     return (b) => {
//         return (c) => {
//             return a+b+c;
//         }
//     }
// }

// console.log(add(2)(3)(5)); //10

//infinite currying
// console.log(add(2)(3)(4)(1)(2)());

// function add(a){
//     return function (b){
//         if(b) return add(a+b);
//         return a;
//     }
// }


//Map vs For each

// const arr = [1,3,4,5,6];
// const mapResult = obj.map((i) => {
//     return i+2;
// })
// console.log(mapResult);
// console.log(arr);

// const mapResult = arr.map((ar,i) => {
//     return arr[i]+2;
// })
// console.log(mapResult);
// console.log(arr);

// const forEachResult = arr.forEach((ar) =>{
//     return ar+2;
// })
// console.log(forEachResult);
// console.log(arr);

// const forEachResult1 = arr.forEach((ar,i) =>{
//     arr[i]+= 3;
// })
// console.log(forEachResult1);
// console.log(arr);

// if({}){
//     console.log("1");
// }if(""){
//     console.log("2");
// }if([]){
//     console.log("3");
// }if([null]){
//     console.log("4");
// }else{
//     console.log("else");
// }

// var arr = ["40%", "50%", "30%"]; //average - 40

// let sum=0;
// arr.forEach((ar) => {
//     sum += parseInt(ar);
// });

// console.log(sum/arr.length);

//  console.log(parseInt("12Pdw1d"));

// const result = arr.reduce((sum,curr)=>{
//     return sum+=parseInt(curr);
// },0);
// console.log(result/arr.length);

// let sum=0;
// const result = arr.map((ar) =>{
//    return sum+=parseInt(ar);
// });

// console.log(result[2]);

// -------------------------------------------------------
// var obj1 = [4, 1, 6, 5, 3, 2];
// var obj2 = [7, 3, 4, 2, 9, 1];

// Output = [1,2,3,4,5,6,7]

//  obj1=[...obj1, ...obj2];
// console.log(obj1);

// const result = obj1.reduce((acc,ar)=>{
//  if(!acc.includes(ar)){
//       acc.push(ar);
//    // acc=[...acc,ar]
//  }
//  return acc;
// },[]);

// result.sort((a,b)=>{
//   return a-b;
// })

// console.log(result);


// --------------------------------------------------------------------
//Filter
// let num = [2,4,5,7,1,8,9];

// const result = num.filter((ar)=>{
//     return ar>5;
// });

// console.log(result);

//Map
// let num = [2, 4, 5, 7, 1, 8, 9];

// const result = num.map((ar) => {
//   return ar * 3;
// });

// console.log(result);
// console.log(num);

//Reduce
//  let arr1 = ['qwe','asd','qwe','test','dummy','asd','qwe'];
// Output: [ qwe: 3, asd: 2, test: 1, dummy: 1 ]

// const result = arr1.reduce((acc,ar)=>{
//     if(acc[ar]){
//         acc[ar]=++acc[ar]
//     }else{
//         acc[ar]=1;
//     }
//     return acc;
// },[]);

// console.log(result);

// ---------------------------------Sorting of Numbers-------------------
// const array = [ 1, 6, 4, 9, 3 ]

// // sort descending (X to 1)
// array.sort((a, b) => {
//   return b - a
// })
// console.log(array);

// Optional Chaining Operator (?.)
// const car = {type:"Fiat", model:"500", color:"white"};
// let res = car.type.a;
// let res = car.abc?.a;
// console.log(res);
//  1.Print most occured character

// s = "hello world";
// console.log(s.split(''));
// arr = s.split("");
// 1.
// const ma = new Map();
// for (var i = 0; i < arr.length; i++) {
//   if (ma.has(arr[i])) {
//     ma.set(arr[i], ma.get(arr[i]) + 1);
//   } else {
//     ma.set(arr[i], 1);
//   }
// }
// var max = 0;
// var ch = '';
// for (const [key, value] of ma) {
//   if (value > max) {
//     max = value;
//     ch = key;
//   }
// }

// console.log(ch);

// 2.
// const result = arr.reduce((acc,ar)=>{
//     if(acc[ar]){
//       acc[ar]=++acc[ar];
//     }else{
//       acc[ar]=1;
//     }
//     return acc;
//   },[]);

//   for(let key in result){
//     console.log(result[key])
//   }
//    console.log(result);

//---------------------------------------------------------------------------------------------

// remove duplicates in  Array
// arr = [1, 4, 5, 3, 1, 3, 4];

// const res = arr.reduce((acc, ar) => {
//   if (acc.includes(ar)) {
//   } else {
//     acc.push(ar);
//   }
//   return acc;
// }, []);

// console.log(res);

//--------------------------------------------------------------------------------------------

//Prototype

//   const arrr=[2,3,4,5];
    
//   Array.prototype.add= function(i){
//     const result = this.map(ar=>{
//       return ar+i;
//   });
//   return result;
// }

// let finalValue=arrr.add(2);
// console.log(finalValue);

// var answer = 2 
// function test() {
//     console.log(answer)
//     var answer = 4;
// }
// test()

//--------------------------------------------------------------------------------------------

// var fruits = ["apples", "bananas", "cucumbers", "dragonfruit"];

// for (var i = 0; i < fruits.length-1; i++) {
//     setTimeout(function () {
//         console.log(fruits[i]);
//     }, 100*i);
// }


// console.log(typeof(NaN));

//--------------------------------------------------------------------------------------------

/* let arr = [3,9,3,4,-5,6,3,2]; */
// let arr = [0,0];
// let count=0;


// for(let i=0;i<arr.length-1;i++){
// 	for(let j=i+1;j<arr.length;j++){
//   	let res = arr.slice(i,j+1);
//     const output = res.reduce((sum, ar)=>{
//     	sum=sum+ar;
//       return sum;
//     },0);
    
//     if(output==0){
//     	console.log("Subarray 0 present");
//       count=1;
//       break;
//     }
//   }
// }

// if(count==0){
// 	console.log("Subarray 0 not present");
// }

//--------------------------------------------------------------------------------------------

// Array Flattening
// let arr= ['Dog', 'Cat', ['Sheep', ['Wolf', 'Lion']]]
//Output: ['Dog', 'Cat', 'Sheep', 'Wolf', 'Lion']

/* console.log(Array.isArray(arr)); */
//  let res=[];
// function flatten(arr){
//   for(let i=0;i<arr.length;i++){
//     if(!(Array.isArray(arr[i]))){
//     	res.push(arr[i]);
//     }else{
//     	flatten(arr[i]);
//     }
//   }
// }

// flatten(arr); 

// console.log(res);

//--------------------------------------------------------------------------------------------

// Flatten the Object
// const obj = {
//     address:{
//         name:"test",
//         location:[
//             321312,3213
//         ],
//         subaddress:{
//             line1:"sadasdsa",
//             line2:{
//             	pin: 1234
//             }
//         }
//     }
// }

// *SOLUTION
// function transform(obj, prefix = '') {
//     let result = {};
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             Object.assign(result, transform(obj[key], `${prefix}${key}_`));
//         } else {
//             result[`${prefix}${key}`] = obj[key];
//         }
//     }
//     return result;
// }

// const output = transform(obj, '');
// console.log(output);

// //Solution - brute force
// let output = {};
// function flattenObject(obj, str1){
//   let key = Object.keys(obj);
// 	let str = str1;
//   key.forEach(item => {
//     if(typeof(obj[item])==='object' && !Array.isArray(obj[item])){
//     if(str1===''){
//     	str=item
//     } else{
//     	str=str1+'_'+item;
//     }
//     flattenObject(obj[item], str)
//   }else{
//     str=str+'_'+item;
//     output[str] = obj[item];
//     str=str1;
//   }
//   })
//   return output;
// }

// console.log(flattenObject(obj,''));

//--------------------------------------------------------------------------------------------

//*Memoization 

// let map = new Map();

// function addThreeNums(a,b,c){
// 	let key= `${a}_${b}_${c}`;
//   let result = a+b+c;
//   	if(map.has(key)){
//   	console.log('memoized');
//   	return map.get(key);
//   }
//   else{
//       map.set(key, result);
//       return result;
//   } 
// }

// console.log(addThreeNums(1,2,3));
// console.log(addThreeNums(1,2,3));


//--------------------------------------------------------------------------------------------

// *Splice Pollyfill
// !Polyfill for splice - there are some functions that are not supported in old browsers. So
// !Write logic in vanila JS to replicate that function

// Array.prototype.splice = function(index, del, ...insert) {
//     let result=[];
//     let secondHalf = this.slice(index+del,  this.length);
//     for(let i=0; i<this.length; i++){
//         if(i===index){
//            i= i+del-1; 
//            break;
//         }else{
//             result.push(this[i])
//         }
//     }
//     let temp = index
//     if(insert.length){
//         for(let j=0; j<insert.length; j++){
//            result[temp] = insert[j];
//             temp++;
//         }
//     }
//     let insertionIndex = result.length;
//      for(let i=0; i<secondHalf.length; i++){
//         result[insertionIndex] = secondHalf[i];
//         insertionIndex++;
//      }
//     return result;
// }

// const arr = [1,2,3,4,5,6];
// const output = arr.splice(1,1,8,9)
// console.log(output);

//-----------------------------------------------------------------------------------------------------

// *Convert numbers to letters beyond the 26 character alphabet

// function numberToLetters(num) {
//     let letters = ''
//     while (num >= 0) {
//         letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
//         num = Math.floor(num / 26) - 1
//     }
//     return letters
// }

// console.log(numberToLetters(28));

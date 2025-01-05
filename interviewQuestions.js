//* Print most occured character
const str = "helloooo world";

function mostFrequency(arr) {
  const map = new Map();
  arr.forEach((ar) => {
    if (map.has(ar)) {
      map.set(ar, map.get(ar) + 1);
    } else {
      map.set(ar, 1);
    }
  });
  console.log(map);
  let max = 0;
  let result = "";
  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      result = key;
    }
  }
  return result;
}
// console.log(mostFrequency(str.split('')));

// Using reduce HOF
const result = str.split("").reduce((acc, ar) => {
  if (acc[ar]) {
    acc[ar] = ++acc[ar];
  } else {
    acc[ar] = 1;
  }
  return acc;
}, []);

let max = 0;
let ch = "";
for (let key in result) {
  if (result[key] > max) {
    max = result[key];
    ch = key;
  }
}
//   console.log(ch)

//-----------------------------------------------------------------------------------------------------

//* check if Subarray sum is 0
function subArraySum(arr, subSum) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let res = arr.slice(i, j + 1);
      const output = res.reduce((sum, ar) => {
        sum = sum + ar;
        return sum;
      }, 0);

      if (output == subSum) {
        return 1;
      }
    }
  }
  return count;
}

// const count = subArraySum([3, 9, 3, 4, -5, 6, 3, 2], 0);
// const count = subArraySum([0,0], 0);
// if (count == 0) {
//   console.log("Subarray 0 not present");
// } else {
//   console.log("Subarray 0 is present");
// }

//----------------------------------------------------------------------------------------------------

//* Flatten the Object
const obj = {
  address: {
    name: "test",
    location: [321312, 3213],
    subaddress: {
      line1: "sadasdsa",
      line2: {
        pin: 1234,
      },
    },
  },
};

function transform(obj, prefix = "") {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      Object.assign(result, transform(obj[key], `${prefix}${key}_`));
    } else {
      result[`${prefix}${key}`] = obj[key];
    }
  }
  return result;
}
// console.log(transform(obj));

//----------------------------------------------------------------------------------------------------

//*Memoization
function memoize() {
  let map = new Map();
  return function (a, b, c) {
    let key = `${a}_${b}_${c}`;
    let result = a + b + c;
    if (map.has(key)) {
      console.log("memoized");
      return map.get(key);
    } else {
      map.set(key, result);
      return result;
    }
  };
}
const addThreeNums = memoize();
// console.log(addThreeNums(1,2,3));
// console.log(addThreeNums(1,2,3));

// ? const add = (a, b) => a + b;
// ? const memoizedAdd = memoize(add);

// ? console.log(memoizedAdd(2, 3)); // Computes and caches result: 5
// ? console.log(memoizedAdd(2, 3)); // Returns cached result: 5

//  add = (a, b) => a + b;
// const memoizedAdd = memoize(add);

// console.log(memoizedAdd(2, 3)); // Computes and caches result: 5
// console.log(memoizedAdd(2, 3)); // Returns cached result: 5

// function memoize(fn) {
//   let map = new Map();
//   return function memoizedAdd(...input) {
//     let key = input[0];
//     for (let i = 1; i < input.length; i++) {
//       key += "_" + input[i];
//     }
//     if (map.has(key)) {
//       console.log("Cached Data");
//       return map.get(key);
//     } else {
//       const res = fn(...input);
//       map.set(key, res);
//       return res;
//     }
//   };
// }

//---------------------------------------------------------------------------------------------------

//* Pollyfill
//! Polyfill - there are some functions that are not supported in old browsers. So
//! Write logic in vanila JS to replicate that function

//* Pollyfil for add
Array.prototype.add = function (num) {
  const result = this.map((ar) => {
    return ar + num;
  });
  return result;
};
// console.log([1,2,3,4].add(3));

//* Pollyfil for array flatten
let data = [1, 2, [3, 4], [5, [6, 7, [8, 9], 10]], 11];
Array.prototype.flatten = function () {
  let result = [];
  this.forEach((ar) => {
    if (Array.isArray(ar)) {
      result = result.concat(ar.flatten());
    } else {
      result.push(ar);
    }
  });
  return result;
};
// console.log(data.flatten());

//* Pollyfill for array flatent with depth indicator
Array.prototype.flattenWithDepth = function (depth) {
  let result = [];
  if (depth >= 0) {
    this.forEach((ar) => {
      if (Array.isArray(ar)) {
        if (depth == 0) {
          result.push(ar);
        }
        result = result.concat(ar.flattenWithDepth(depth - 1));
      } else {
        result.push(ar);
      }
    });
  }
  return result;
};
/* console.log(data.flattenWithDepth(2));
console.log(data.flat(2)); */

//* Pollyfil for splice
Array.prototype.splice = function(index, del, ...insert) {
    let result=[];
   // Push elements till index to the new array
    for(let i=0; i<this.length; i++){
        if(i===index){
           break;
        }else{
            result.push(this[i])
        }
    }
     // insert elements at the index
    let temp = index
    if(insert.length){
        for(let j=0; j<insert.length; j++){
           result[temp] = insert[j];
            temp++;
        }
    }
     // insert second half of the array()
    let secondHalf = this.slice(index+del,  this.length);
    let insertionIndex = result.length;
     for(let i=0; i<secondHalf.length; i++){
        result[insertionIndex] = secondHalf[i];
        insertionIndex++;
     }
    return result;
}

const spliceArr = [1, 2, 3, 4, 5, 6];
// const output = spliceArr.splice(1,1,8,9)
// console.log(output);

//-----------------------------------------------------------------------------------------------------

// *Convert numbers to letters beyond the 26 character alphabet
function numberToLetters(num) {
  let letters = "";
  while (num >= 0) {
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[num % 26] + letters;
    num = Math.floor(num / 26) - 1;
  }
  return letters;
}
// console.log(numberToLetters(28));

//-----------------------------------------------------------------------------------------------------

//* Remove Duplicates
let arr = [1, 2, 3, 2, 1, 3, 4];

function removeDuplicates(arr) {
  let result = [];
  const map = new Map();
  arr.forEach((ar) => {
    if (!map.has(ar)) {
      map.set(ar, 1);
      console.log(map.has(ar), ar);
      result.push(ar);
    }
  });
  return result;
}
/* console.log(removeDuplicates(arr)); */

//* Using reduce HOF
const res = arr.reduce((acc, ar) => {
  !acc.includes(ar) && acc.push(ar);
  return acc;
}, []);
// console.log(res);

//----------------------------------------------------------------------------------------------------

//* Occurance of each element
function countOccurance(arr) {
  const result = {};
  const map = new Map();
  arr.forEach((ar) => {
    if (map.has(ar)) {
      map.set(ar, map.get(ar) + 1);
    } else {
      map.set(ar, 1);
    }
  });

  for (let [key, value] of map) {
    result[key] = value;
  }
  return result;
}
/* console.log(countOccurance(arr)); */

//-----------------------------------------------------------------------------------------------------

//* Given two strings s and t, return true if they are equal when both are typed into empty text editors.
//* '#' means a backspace character.
//* Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Time Complexity: O(n+m)
// Space Complexity: O(n+m)

function backspaceCompare(s, t) {
    function buildFinalString(str) {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    }

    return buildFinalString(s) === buildFinalString(t);
}
let s1 = "ab#c";
let t1 = "ad#c";
// console.log(backspaceCompare(s1, t1));

//-----------------------------------------------------------------------------------------------------

let computeAmount = {
    sum: 0,
    value(){
        return this.sum;
    },
    thousand(amount){
       this.sum += amount*1000;
       return this;
    },
    lacs(amount){
       this.sum += amount*100000;
       return this;
    },
    crore(amount){
        this.sum += amount*10000000;
        return this;
     }
}

// ? console.log(computeAmount.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());
// output - 143545000

//--------------------------------------------------------------------------------------------------------

// *    1.Using Closures
// ? console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());

function computeAmount() {
    let total = 0;

    const operations = {
        lacs(value) {
            total += value * 100000;
            return operations;
        },
        crore(value) {
            total += value * 10000000;
            return operations;
        },
        thousand(value) {
            total += value * 1000;
            return operations;
        },
        value() {
            return total;
        }
    };

    return operations;
}

// *    2.Using Es6 class
class Amount {
    constructor() {
        this.total = 0;
    }

    lacs(value) {
        this.total += value * 100000;
        return this;
    }

    crore(value) {
        this.total += value * 10000000;
        return this;
    }

    thousand(value) {
        this.total += value * 1000;
        return this;
    }

    value() {
        return this.total;
    }
}

function computeAmount() {
    return new Amount();
}
// console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());

//-------------------------------------------------------------------------------------------------------

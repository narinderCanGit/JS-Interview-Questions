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
Array.prototype.splice = function (index, del, ...insert) {
  let result = [];
  let secondHalf = this.slice(index + del, this.length);
  for (let i = 0; i < this.length; i++) {
    if (i === index) {
      i = i + del - 1;
      break;
    } else {
      result.push(this[i]);
    }
  }
  let temp = index;
  if (insert.length) {
    for (let j = 0; j < insert.length; j++) {
      result[temp] = insert[j];
      temp++;
    }
  }
  let insertionIndex = result.length;
  for (let i = 0; i < secondHalf.length; i++) {
    result[insertionIndex] = secondHalf[i];
    insertionIndex++;
  }
  return result;
};

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

// TODO: "Q1: ""Given an array of Employees with name,marks. Find out the maximum average marks from the list.
// {""Alia"",""-678""},
// {""Bobby"",""100""},
// {""Alex"",""223""},
// {""Alex"",""-23""},
// {""Bobby"",""530""}
// };
// Avg Bobby = 315,Alex= 100,Alia=-678. Result: 315""

const employees = [
  { name: "Alia", marks: -678 },
  { name: "Bobby", marks: 100 },
  { name: "Alex", marks: 223 },
  { name: "Alex", marks: -23 },
  { name: "Bobby", marks: 530 }
];

function calculateAvg(arr){
  const map = new Map();
  for(let i=0; i<arr.length;i++){
    const {name, marks} = arr[i];
    if(map.has(name)){
     const entry = map.get(name);
     entry.sum += marks;
     entry.count += 1;
    } else {
      map.set(name, {sum: marks, count: 1});
    }
  }

  const result={};
  let avg = 0;
  let max = Number.MIN_VALUE;
  for(const [name, {sum, count}] of map){
    avg = sum/count;
    result[name] = avg;
    if(avg>max){
      max=avg;
    }
  }
  return max;
}

// console.log(calculateAvg(employees));

// ----------------------------------------------------------------------------------------------------------------

//TODO: Arrange given numbers to form the biggest number.Input- List of numbers : {1, 34, 3, 98, 9, 76, 45, 4} Output – 998764543431"

function largestNumber(nums){
    return nums.map(String)
    .sort((a,b) => (b+a).localeCompare(a+b))
    .join('')
}

// console.log(largestNumber([1, 34, 3, 98, 9, 76, 45, 4]));


//? Without sort Method

function largestNumber(nums) {
  const arr = nums.map(String);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if ((arr[j] + arr[j + 1]) < (arr[j + 1] + arr[j])) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // edge case: all zeros
  if (arr[0] === "0") return "0";

  return arr.join('');
}

// console.log(largestNumber([1, 34, 3, 98, 9, 76, 45, 4]));


// ----------------------------------------------------------------------------------------------------------------

//TODO: Find the nth Number in fibonacci series using Iterative and Recursive Approach.

function fibIterative(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

// Time: O(n)
// Space: O(1)
// console.log(fibIterative(7)); // 13


//? Recursive

function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Time: O(2^n)
// Space: O(n)
// console.log(fibRecursive(7)); // 13


//? Recursive with Memoization (optimized recursion)

function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Time: O(n)
// Space: O(n)
// console.log(fibMemo(7)); // 13

// ----------------------------------------------------------------------------------------------------------------

//TODO: Find a cycle in array and print the start index const arr = [1, 3, 0, 4, 2], return -1 if there is no cycle.

const arr = [1, 3, 0, 4, 2];

function findCycleStart(arr) {
  let slow = 0;
  let fast = 0;

  // Step 1: Detect cycle
  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow !== fast);

  // Step 2: Find cycle start
  slow = 0;
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  return slow;
}

// console.log(findCycleStart(arr)); // 0


//? Retuens -1 if no cucle detected

function findCycleStart1(arr) {
  let slow = 0;
  let fast = 0;

  // Step 1: Detect cycle
  while (
    fast !== undefined &&
    arr[fast] !== undefined &&
    arr[arr[fast]] !== undefined
  ) {
    slow = arr[slow];
    fast = arr[arr[fast]];

    if (slow === fast) {
      // Cycle detected
      break;
    }
  }

  // If no cycle detected
  if (
    fast === undefined ||
    arr[fast] === undefined ||
    arr[arr[fast]] === undefined
  ) {
    return -1;
  }

  // Step 2: Find cycle start
  slow = 0;
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  return slow;
}

// console.log(findCycleStart1(arr));


// ----------------------------------------------------------------------------------------------------------------


//TODO: const input = "SSSSSTTQQSS";  output = "5S2T2Q2S"

function countChars(str){
  let output = "";
  let count = 1;

  for(let i=1; i<=str.length; i++){
    if(str[i] === str[i-1]){
      count++;
    } else {
      output += count+str[i-1]
      count=1;
    }
  }
  return output;
}

// console.log(countChars(input));


// ----------------------------------------------------------------------------------------------------------------


//TODO: Largest substring with unique characters e.g. aaabcbdeaf Output : cbdeaf

function longestUniqueSubstring(str) {
  let left = 0;
  let maxLen = 0;
  let start = 0;
  const map = new Map();

  for (let right = 0; right < str.length; right++) {
    if (map.has(str[right]) && map.get(str[right]) >= left) {
      left = map.get(str[right]) + 1;
    }

    map.set(str[right], right);

    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      start = left;
    }
  }

  return str.substring(start, start + maxLen);
}

// Time Complexity: O(n)
// Space Complexity: O(n)
// console.log(longestUniqueSubstring("aaabcbdeaf"));


//TODO: 2nd smallest element of a sorted rotated array. E.g. 5,6,1,2,3,4

function secondSmallest(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // left is index of smallest
  let minIndex = left;
  return arr[(minIndex + 1) % arr.length]; //if smallest element is at last index
}

// console.log(secondSmallest([5,6,1,2,3,4])); // 2


// ----------------------------------------------------------------------------------------------------------------


//TODO: 2nd largest element of an unsorted array.

const arr = [2,1,5,3,8,6,0];

function secondLargest(arr){
  let largest = -Infinity;
  let sl = -Infinity;

  for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
      sl = largest; 
      largest=arr[i];
    } else if(arr[i]>sl && arr[i]!=largest){
      sl = arr[i]
    }
  }
  return sl;
}

console.log(secondLargest(arr));
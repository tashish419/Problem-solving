//Q1------> Count of odd numbers in Array
function countOdd(arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

//Q2 --------> sorted array or not
function arraySortedOrNot(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

//Q3 ----- reverse an array
function reverse(arr, n) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

//Q4 -------find second largest element
function secondLargestElement(nums) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            second = largest;
            largest = nums[i];
        }

        if (nums[i] !== largest && nums[i] > second) {
            second = nums[i];
        }
    }

    if (second === -Infinity) return -1;
    return second;
}

//Q5 --------- Find the Maximum Consecutive Ones
function findMaxConsecutiveOnes(nums) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    return max;
}

//Q6 ---------- Rotate Array by One
function rotateArrayByOne(arr) {
    let temp = arr[0];
    let k = 0;
    for (let i = 1; i < arr.length; i++) {
        arr[k] = arr[i];
        arr[i] = temp;
        k++;
    }
    return arr;
}

//or
function rotateArrayByOne(arr) {
    let temp = arr[0];
    let k = 0;
    for (let i = 1; i < arr.length; i++) {
        arr[k] = arr[i];
        k++;
    }
    arr[arr.length - 1] = temp;
    return arr;
}

//Q7 remove duplicates from the sorted array
function removeDuplicates(arr) {
    let x = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[x]) {
            x++;
            arr[x] = arr[i];
        }
    }

    return x + 1;
}

//Q7 ----------- left rotate array by K places
function rotateArrayByK(nums, k) {
    let n = nums.length;    

    if(k === 0) return nums

    k = k % n;

    let left = 0;
    let right = n - 1
    while(left < right){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp;
        left++
        right--
    }

    left = 0;
    right = k-1
    while(left < right){
        let temp = nums[left];
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }
    left = k
    right = n -1
    while(left < right){
        let temp = nums[left];
        nums[left] = nums[right]
        nums[right] = temp;
        left++
        right--
    }
   
    return nums;
};

//Q8 ------- Move zeroes to the end
var moveZeroes = function(nums) {
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[x] = nums[i];
            x++
        }
    }
    for(let i = x; i < nums.length; i++){
        nums[i] = 0
    }
};
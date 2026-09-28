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
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                count++
                max = Math.max(max, count);
            }else{
                count = 0
            }
        }
        return max
    }
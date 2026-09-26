//Q1 ---- Count digit
function countDigit(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

//Q2 -----count odd digits
function countOddDigit(n) {
    let count = 0;
    let lastDigit = n;
    while (n > 0) {
        lastDigit = n % 10;

        n = Math.floor(n / 10);
        if (lastDigit % 2 !== 0) {
            count++;
        }
    }
    return count;
}

//Q3 ------- reverse an integer
function reverse(n) {
    let rev = 0;

    while (n > 0) {
        let lastDigit = n % 10;

        rev = rev * 10 + lastDigit;
    }
    return rev;
}

//Q4 ------- palindrome number
function isPalindrome(x) {
    let rev = 0;
    let original = x;

    while (x > 0) {
        let lastdigit = x % 10;
        x = Math.floor(x / 10);

        rev = rev * 10 + lastdigit;
    }

    if (original === rev) {
        return true;
    } else return false;
}

// Q5 ---------largest digiit
function largestDigit(n) {
    let largest = 0;
    while (n > 0) {
        let lastDigit = n % 10;
        n = Math.floor(n / 10);
        if (lastDigit > largest) {
            largest = lastDigit;
        }
    }
    return largest;
}

//Q6 --------factoria
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

//Q7 -------- Check Armstrong number
function isArmstrong(n) {
    let original = n;
    let count = 0;
    let sum = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    n = original;
    while (n > 0) {
        let lastDigit = n % 10;
        n = Math.floor(n / 10);

        sum = sum + lastDigit ** count;
    }

    return sum === original;
}

//Q8 ------ check perfect number
var checkPerfectNumber = function(num) {
    let sum = 0
    for(let i = 1; i < num; i++){
        if(num%i === 0){
            sum = sum + i
        }
    }
    return sum === num;
};
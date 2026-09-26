// Q1 - Count Character Frequency
function charFrequncy(str) {
    const hashMap = {};

    for (let i = 0; i < str.length; i++) {
        if (hashMap[str[i]]) {
            hashMap[str[i]]++;
        } else {
            hashMap[str[i]] = 1;
        }
    }

    return hashMap;
}

//Q2 - Valid Anagram: Return true if str2 is an anagram of str1.
function isAnangram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let hashMap = {};

    for (let i = 0; i < str1.length; i++) {
        if (hashMap[str1[i]]) {
            hashMap[str1[i]]++;
        } else {
            hashMap[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (hashMap[str2[i]]) {
            hashMap[str2[i]]--;
        } else {
            return false;
        }
    }

    return true;
}

//Q3 -------> First Non-Repeating Character
function firstUniqueChar(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return i;
        }
    }

    return -1;
}

//Q4 ----> Simple Plaindrome check
function palindromeCheck(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}

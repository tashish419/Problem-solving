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

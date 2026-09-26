//Q1 ---- Count digit
function countDigit(n) {
    let count = 0;
    let lastDigit = 0
    while (n > 0) {
        lastDigit = n % 10;

        n = Math.floor(n/10)
        count++
    }
    return count
    
}
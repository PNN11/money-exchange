// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    let h = 0;
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;
    if (currency <= 0) {
        return result;
    }
    if (currency > 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    else {
        while (currency >= 50) {
            currency -= 50;
            h++;
            result.H = h;
        };
        while (currency >= 25) {
            currency -= 25;
            q++;
            result.Q = q;
        };
        while (currency >= 10) {
            currency -= 10;
            d++;
            result.D = d;
        };
        while (currency >= 5) {
            currency -= 5;
            n++;
            result.N = n;
        };
        while (currency >= 1) {
            currency -= 1;
            p++;
            result.P = p;
        };
        return result;
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let prev = s[0];
    let largest = '';
    const x = [];

    if (s.length === 1) {
        return s[0] === '1';
    }

    for (let i = 0; i <= s.length - 1; ++i) {
        if (s[i] === s[i + 1]) {
            prev += s[i + 1];
        } else {
            x.push(prev);
            prev = s[i + 1];
        }
    }

    for (let i = 0; i < x.length; ++i) {
        if (x[i].length > largest.length) {
            largest = x[i];
        } else if (x[i].length === largest.length) {
            if (x[i][0] === '0') largest = x[i];
        }
    }

    return largest[0] === '1';
    // return false;
};
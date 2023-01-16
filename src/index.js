module.exports = function reverse(n) {
    return Number(String(n)
        .split('')
        .filter((item, index, arr) => {
            if (item === '-' || item === '0' && index === arr.length - 1) {
                return false;
            }
            return true;
        }).reverse().join(''))

}

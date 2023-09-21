const palindromes = function (stri) {
    let lowerString = stri.toLowerCase().replace(/[^a-z0-9]/g, "");
    return lowerString.split('').reverse().join('') == lowerString;
};

// Do not edit below this line
module.exports = palindromes;

const removeFromArray = function (arr, ... args) {
    return arr.filter(val => !arguments.include(val));
};

// Do not edit below this line
module.exports = removeFromArray;

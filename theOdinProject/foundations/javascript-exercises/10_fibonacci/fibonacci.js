const fibonacci = function(n) {
    if(n === 0) return 0;
    if(n < 0) return null;


    let finalEle = 0;

    let first = 1;
    let second = 0;

    for(let i = 2; i < n; i++){
        finalEle = first + second;
        second = first
        first = finalEle;
    }
    return finalEle;
};

// Do not edit below this line
module.exports = fibonacci;

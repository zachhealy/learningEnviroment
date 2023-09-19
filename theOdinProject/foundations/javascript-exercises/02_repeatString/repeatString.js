const repeatString = function(word, times) {
    if(times < 0) return "ERROR";

    let stri = "";

    for(let i = 0; i < times; i++){
        stri = stri + word;
    }
    return stri;
};

// Do not edit below this line
module.exports = repeatString;

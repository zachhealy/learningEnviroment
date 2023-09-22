const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = checkAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = checkAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        
        if(Math.max(oldestAge, currentAge) === oldest){
            return oldest.name;
        } else {
            return currentPerson.age;
        }
        
    })

};

const checkAge = function(yearOfBirth, yearOfDeath) {
    if(!yearOfDeath){
        yearOfDeath = new Date.getFullYear();
    }
    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;

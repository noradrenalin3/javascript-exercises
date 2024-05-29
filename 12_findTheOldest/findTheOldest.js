const findTheOldest = function(array) {
    const currentYear = (new Date()).getFullYear();
    const age = array.map((person) => {
        return {...person, age: calcAge(person.yearOfDeath, person.yearOfBirth)};
    }); 
    function calcAge(d, b) {
        if (!d) {
            return currentYear - b;
        } else {
            return d - b;
        }   
    };   
    const ordered = age.sort(function(a, b) {
        const ageA = a.age;
        const ageB = b.age;
        if (ageA > ageB) {
            return 1;
        } else {
            return -1;    
        }
    }); 
    const oldest = ordered.pop();
    return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;

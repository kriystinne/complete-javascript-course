// FUNCTIONS

function funName(birthYear) {
    return 2020-birthYear;
}

age1 = funName(1989);
console.log(age1);

// function expressions

var doYoudo = function(job, firstName) {
    switch (job) {
        case "teacher":
            return `${firstName} is a ${job}.`;
        case "driver":
            return `${firstName} is a ${job}.`;
        default:
            return `${firstName} is a ${job}.`;
    }
}

console.log(doYoudo("teacher", "Angela"))
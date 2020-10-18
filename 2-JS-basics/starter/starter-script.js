let num1 = 21;
let num2 = "21";

// inequality
console.log(num1 != num2);

// strict inequality: takes into consideration the data type as well
// this is because JavaScript type coerces the variables
console.log(num1 !== num2)

//bitwise left shift
// shifts the first operand the specified number of bits to the left
// excess bits shifted off to the left are discarded
// bitwise shifting any number x to the left by y bits, yields x * (2 ** y)

let x = 9;
let y = 3;
console.log(x.toString(2));
console.log(y.toString(2));
console.log((x << 2).toString(2));
console.log(x << 2);

// Assignment operators
// asign a value to its left operand based on the value on the right

// addition, usbtraction, multiplication, division
console.log(x+=2, x-=2, x*=2, x/=2)

// remainder, exponentiation
console.log(x%=2, x**=2)

// increment and decrement (++) and (--)
// unary operators; adds/subtracts one to its operand
// IF used as PREFIX -> (++x) returns the value of its operator after adding one
// IF used as POSTFIX -> (x++) returns the value of its operand before adding one
console.log(++y, y++)

// CODING CHALLENGE 1
/*
Mark and John are trying to compare their BMI, which is calculated using the formula:
BMI = mass/ height^2 = mass / height*height (mass in kg and height in meters)
1. Store MArk|s and John|s mass and height variables
2. Calculate both their BMIs
3. Create a boolean containing info about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3
*/

let markHeight, markMass, johnHeight, johnMass;
markHeight = 1.83;
markMass = 89;
johnHeight = 1.90;
johnMass = 100;

let johnBmi = johnMass / (johnHeight**2)
let markBmi = markMass/markHeight**2

let bmiGreater = markBmi>johnBmi
console.log(johnBmi, markBmi, bmiGreater)

// IF ELSE STATEMENTS (control structures)
const firstName = "John";
const age = 16;

if (age < 13) {
    
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager.`)
} else {
    console.log(`${firstName} is a man.`)
}

// TERNARY OPERATOR AND SWITCH STATEMENTS
//Ternary operator (write an if else in one line) 
//takes the form CONDITION ? result if true; result if false
age >= 18 ? console.log(`${firstName} drinks beer.`): console.log(`${firstName} drinks juce.`)

// assign values to variables using a ternary operator
let drink = age >= 18 ? "beer": "juice"
console.log(drink)

// SWITCH STATEMENT = huge if else statement
let job = "teacher";

switch(job) {
    case "teacher":
    case "instructor":
        console.log(`${firstName} is a teacher.`);
        break;
    case "driver":
        console.log(`${firstName} is a driver.`);
        break;
    case "designer":
        console.log(`${firstName} is a designer.`);
        break;
    default:
        console.log(`${firstName} is unemployed.`)
}

switch(true) {
    case age < 13:
        console.log(`${firstName} is a boy.`);
        break;
    case age >= 13 && age < 20:
        console.log(`${firstName} is a teenager.`);
        break;
    default:
        console.log(`${firstName} is a man.`);
}

// TRUTHY AND FALSY VALUES
// truthy: all values that are not falsy
// falsy: undefined, null, 0, "", NaN
// all will be converted to FALSE evaluated in a true/false condition
let height = 23;

if (height || height === 0) {
    console.log("Variable is defined.");
} else {
    console.log("variable has not been defined.")
}

/* CODING CHALLENGE 2
John and Mike both play basketball in different teams.
In the last 3 games, John's team scored 89, 120 and 103 points, while Mike's team scores 116, 94 and 123

1. calculate the average score for each team
2. decide which team wins on average
3. then change the scores to show different winnders

*/
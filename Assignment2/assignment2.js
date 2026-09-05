

// Challenge 1
const user_name = "Lucas";
const age = 32;
const student = true;

console.log(`
    user_name = ${user_name} (${typeof(user_name)})
    age = ${age} (${typeof(age)})
    student = ${student} (${typeof(student)})
    `);


const num1 = 16;
const num2 = 8;
console.log(`
    ${num1} + ${num2} = ${num1 + num2}
    ${num1} - ${num2} = ${num1 - num2}
    ${num2} * ${num1} = ${num2 * num1}
    ${num2} / ${num1} = ${num2 / num1}
    `)

// Challenge 3
const myString = "This is a sentence in my JS code";
console.log(`The string '${myString}' is ${myString.length} characters long. The first character in the string is '${myString.at(0)}' and the last character is '${myString.at(-1)}'.`);

// Challenge 4
const negativeNum = -12;
console.log(`
    The square root of ${negativeNum} is ${Math.sqrt(negativeNum)}.
    ${negativeNum} squared is ${Math.pow(negativeNum,2)}.
    The absolute value of ${negativeNum} is ${Math.abs(negativeNum)}.
    `);

// Challenge 5
const numCompare1 = 115;
const numCompare2 = 238;
if (numCompare1 > numCompare2) {
    text = `${numCompare1} is greater than ${numCompare2}.`
} else if (numCompare1 < numCompare2) {
    text = `${numCompare1} is less than ${numCompare2}.`
} else {
    text = `${numCompare1} is equal to ${numCompare2}.`
}
console.log(text);

// Challenge 6
const bool1 = true;
const bool2 = false;
console.log(`
    ${bool1} AND ${bool2} = ${bool1 && bool2}
    ${bool1} OR ${bool2} = ${bool1 || bool2}
    NOT ${bool1} = ${!bool1}
    NOT ${bool2} = ${!bool2}
    `)

// Challenge 7
const firstName = "Keith";
const lastName = "Ledger";
const greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting);
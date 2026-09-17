// Lucas Smith Gallardo
// Assignment 3
// September 16, 2026

// Challenge 9 - Strict Mode
"use strict";
// What I understood:
// strict mode causes an error to be thrown instead of allowing the code to run  with a potential bug. This makes it easier to identify and resolve issues
// that may have gone unnoticed.

// Challenge 1 - Type Conversion
    const strNum = '12';
    const intNum = Number(strNum);
    console.log(typeof strNum);
    console.log(typeof intNum);
    console.log (intNum + 10);
    // What I understood:
    // The Number() function converts the number represented as a string to an integer. This allows us to perform addition on the two numbers instead of 
    // concatenating them into one string.

// Challenge 2 - Type Coercion
    const strNum2 = '74';
    const intNum2 = '9';
    const addNums = strNum2 + intNum2;
    const subtracNums = strNum2 - intNum2;
    const multiplyNums = strNum2 * intNum2;
    console.log(`${addNums} (${typeof addNums})`)
    console.log(`${subtracNums} (${typeof subtracNums})`)
    console.log(`${multiplyNums} (${typeof multiplyNums})`)
    // What I understood:
    // Adding the two values keeps both as strings and concatenates them, giving a different result than you would expect from a math equation. Subtracting or
    // multiplying them causes both numbers to be treated as integers and allows the equations to behave as expected.

// Challenge 3 - True and False Values
    const strNonEmpty = 'With great power comes great responsibility';
    const strEmpty = '';
    const zeroNum = 0;
    const posNum = 42;
    const nullVar = null;
    const undefinedVar = undefined;
    console.log(Boolean(strNonEmpty));
    console.log(Boolean(strEmpty));
    console.log(Boolean(zeroNum));
    console.log(Boolean(posNum));
    console.log(Boolean(nullVar));
    console.log(Boolean(undefinedVar));
    // What I understood:
    // A non-empty string and a positive number resolve to true. An empty string, zero, null, and undefined all resolve to false.

// Challenge 4 - if/else
    const age = '84';
    if (age >= 18) {
        console.log('You are eligible.');
    } else {
        console.log('You are not eligible');
    }
    // What I understood:
    // if/else allows us to control the flow of the code, running only the statements that are relevant. If the condition following if resolves to true,
    // the corresponding code runs. Otherwise, it does not run and the code following else runs instead.

// Challenge 5 - else if
    const score = '68';
    let grade = "";
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log(`${score}% ${grade}`);
    // What I understood:
    // else if allows us to factor in a number of different possibilities without nesting if statements. The conditions will be checked only until one resolves
    // to true. Only the code block corresponding to that condition will run.

// Challenge 6 - switch
    const service = 'parking';
    switch (service) {
        case 'library':
            console.log('The library provides a variety of services.');
            break;
        case 'tutoring':
            console.log('Tutoring is available in all subjects at no cost to the student.');
            break;
        case 'parking':
            console.log('Parking is avilable in the parking garage and in paid lots.');
            break;
        case 'technology':
            console.log('Computers and software are available for use by all students and faculty.');
            break;
    }
    // What I understood:
    // switch allows us to control the flow of the program when our variable is expected to match one of a list of values. If there were no break statement,
    // it would keep checking values along the list. Including break makes it so that no other conditions will be checked once one resolves to true.

// Challenge 7 - Ternary Operator
    let isLoggedIn = false;
    console.log(isLoggedIn ? 'Welcome back!' : 'Please log in');
    // What I understood:
    // the ternary operator works like an if statement, but is more concise and works well for simple output. If the condition is true, the value after the ?
    // is returned. If it is false, the value after the : is returned.

// Challenge 8 - Student Status Program
    const studentName = 'Johannathan Jones';
    const studentAge = 23;
    const studentScore = 92;
    const studentMajor = 'Environmental Science';;
    const enrolled = true;
    const adult = studentAge >= 18;
    let studentGrade = '';
    
    if (studentScore >= 90) {
        studentGrade = 'A';
    } else if (studentScore >= 80) {
        studentGrade = 'B';
    } else if (studentScore >= 70) {
        studentGrade = 'C';
    } else if (studentScore >= 60) {
        studentGrade = 'D';
    } else {
        studentGrade = 'F';
    }
    console.log(`
        Student: ${studentName}
        Age: ${studentAge}
        Major: ${studentMajor}
        Adult: ${adult ? 'Yes' : 'No'}
        Score: ${studentScore}
        Grade: ${studentGrade}
        Status: ${enrolled ? 'Enrolled' : 'Not enrolled'}        
        `)
    
    // What I understood:
    // This code combines else if and the ternary operator, which are two methods that suit different types of decisions and levels of complexity.

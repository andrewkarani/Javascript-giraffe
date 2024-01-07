// Nesting 
<p>paragraph of <button>Hello</button></p>
// MATH AND NUMBERS

// you cud use math methods
// everytime you r using a math method you must write out Math

// 1. absolute method - removes negative numbers

var number = -2;

document.write( Math.abs(number) );

//2. MAXIMUM method
// prints out whichever number is bigger btwn 2 parameters
document.write( Math.max(number, 4));
//3. Minimum
// similar to maximum

//4. ROUND
// rounds numbers according to standard rounding rules
number = 2.4;
document.write( Math.round(number));

// 5. power
// takes 2 parameters. the 1st parameter is the number then the 2nd parameter is the power you want to raise to

document.write( Math.pow(number, 4));

// 6. square root

document.write( Math.sqrt(36));

//7. random
// gives you a random number
document.write( Math.random() );


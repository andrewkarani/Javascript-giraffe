// Basic calculator
//we will needtwo separate input frm the user

var num1 = window.prompt( 'Enter a number: ');
var num2 = window.prompt( "Enter another number: ");

// wen you do it like this the numbers that the user enters are turned into strings
// you have to convert the strings to intergers to be able to perform the math operations
// you can convert using the function parseInt(). in the parentheses you input the string

num1 = parseInt(num1);
num2 = parseInt(num2);
document.write ( num1 + num2)

// parseint doesnt work with decimals you cud use parsefloat
num1 = parseFloat(num1);
num2 = parseFloat(num2);
document.write( num1 + num2);


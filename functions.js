//    FUNCTIONS
// IS A block of code that isdesigned  to perform a certain task

// to create a function u have to typeout the function keyword and give this function a name
// then open and close parentheses followed by open and close curly brackets

function sayHi(){
  var name = "drew";
  document.write("<h1>Hello"+ name + "</h1>");
}

// wen you want to access a function you print out the name of the function and parentheses

sayHi();

// you cud supercharge the variable by passing the function a parameter
function sayHi(name){
  document.write("<h1>Hello"+ name + "</h1>");
}

sayHi("Andrew");
// you cud call the funtion as many times as you want

sayHi("susan");
sayHi("claire");

// you cud use multiple parameters
function sayHi(name, age){
  document.write("<h1>Hello"+ name + "</h1>");
  document.write("<p>Hello"+ age + "</p>");
}

sayHi("Andrew", 23);

// having a function return sth

function addition(num1, num2){
  return num1 + num2;
}
document.write( addition(4, 5));

// another way to do this is setting a variable

function addition(num1, num2){
  return num1 + num2;
}
var addedNumbers = addition(5, 100);
document.write( addedNumbers);

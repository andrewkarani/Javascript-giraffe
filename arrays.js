//   ARRAYS
// is a special type of JS structure that allows you to store multiple values

// creating an array
var fruits = new Array("Apples", "Oranges", "Bananas");
document.write( fruits);

// another way of creating arrays is by using square brackets[]
// wen using [ ] it is not a must to use new Array
// you cud also store differnt data types
var shoes = ["Nike", "Adidas", 24, false];

//to access a specific element inside of this array i could use its index.
// index are accordingto its position starting frm 0 position
document.write(shoes[0] );

// we cud check the length of the array using
document.write( fruits.length );

// we cud modify the value of an array maybe by changing the 0 index

shoes[0] = "alexandermacqueen";

// SPLIT UP an existing string into an array
var shoes = "Nike, Adidas, jordan";
shoes = shoes.split(",");
document.write(shoes[1]);
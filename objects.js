//    OBJECTS
// is a collection in JS where we can store a bunch of named values
//is quite similar to an array but with key differences
// in an object we r storing name value pairs/key value pairs

// lets makean object that defines info abt me
// wen making an object we use curly brackets {}
var person = {
  // a lot of time wen you make an object people will make a new line
  // then define diff values and give names to those diff values 
  name: "Andrew", 
  age: 23,
  isMale: true,
  occupation: "programmer",
// as you can see the container has a bunchof names and values
// the keys or names cannot be repeated
// r separated using commas

// you cud also create a function inside of the object and call it from outside of the object
// you cud also acess the keyfrom inside of the object

  printName: function(){
    document.write("<h1>" + this.name +"</h1>"); // using the prefix 'this' allows u to access the key youve created
  }
};

// to modify a key in the object
person.name = "Joe";
// how to access this info on the screen
// you can access individual parts of this object
// you can access the value using its key
document.write(person.name);  // this gives you andrew

// Now to call out the function  we created inside the object
person.printName();

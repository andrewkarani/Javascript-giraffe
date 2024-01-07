
// FOR EACH LOOPS 
// is a special forloop that can be used with arrays to loop through the elements inside of those arrays
// it makes looping thruelements in an array really easier than even using for each loops

var friends = ["Oscar", "Angela", "Sunny"];
//forEach is a function that we can call and I want to call it just like i would call any function
// inside of the parentheses we want to call another function
// the function will be called for each single element inside the friends arrray
// to get access to the individul element that we r looping thru you need to pass a parameter inside the function"s parentheses
friends.forEach(function(element){// the parameter doesnt have to be called element you can use whever u choose
  // the code here will get executed for every single element inside of the array
  document.write("element" + "<br>")
});
// YOU CUD HAVE NAMED IT 
friends.forEach(function(friend){
  document.write("friend" + "<br>")
});
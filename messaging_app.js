

// first thing we want to do is create variables for each of the items in the html file ie one for this textbox, one for the button, one for the unordered list(ul)

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

// i want to add event listeners
// we will pass on two parameters to the event listener
// the first is actual event that we want to watch out for 
//and the next thing is the function that we want to execute wen the button gets clicked
button.addEventListener("click", function(){
  // how can we make it so that wen the button gets clicked the message shows upin that unorderd list
  // the first thing we can do is create a new element
  // so i will create a new variable and we will store that element inside the variable
  // in our case wer creating a list item
  var newMessage =document.createElement("li");
  // i want the text that is inside of the list item to be the text that was inside the textbox
  newMessage.innerHTML = textbox.value  // in order to get the text inside the textbox we use textbox.value
  // i want to add this list item inside of the unordered list
  messages.appendChild(newMessage);  // we r appending that newmessage to the message unordered list 
  // to make the text inside the textbox to disappear wen you hit send you add the following
  textbox.value ="";
});


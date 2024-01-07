// LOCAL STORAGE
// IS basically a mini database whwre we can store info frm our JS files
// and then wen the user refreshes the page or exits the page and comes back to our website we will actually be able to store information
// so we can give them the same info as last time

// we will create an app where the user enters their name clicks save then their name gets saved into local storage

// herewe r grabbing the elements frm the html file
var textbox = document.getElementById("textbox");
var button = document.getElementById("btn");

// I want toadd an event listener onto the button to monitor wen the button gets clicked

button.addEventListener("click", function(){
  // to store on local storage
  localStorage.name = textbox.value;
  // the above is intepretated as
  // i want to store the textbox value in a variable called name inside of the local storage
});
// accessing it 
document.write(localStorage.name);
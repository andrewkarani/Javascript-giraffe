//   ACCESSING HTML ELEMENTS using JS

var header = document.getElementById("header")
// the above gets the element stored using the header id and stores it inside of the variable header

header.innerHTML = "Mikes new H1";
// the above line then changes the header 

//you could also access the style
header.style.color = "red";
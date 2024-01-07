// the events can be used on any html element even images
function handleClick(){
  alert("Clicked");
}

// to change the specific button :

function handleClick(element){
  element.innerHTML = "Clicked"; // here youare modifying the element
}

//   there is a way to use the event listeners entirely on the JS file without going to the html file;

var image = document.getElementById("image");  // here we r grabbing an element frm the html file
image.addEventListener("mouseover", function(){ // then setting an event listener called mouseover and defining a function
  this.style ="box-shadow: 2px 2px 2px grey";      // then changing the styling wen the image is hovered(mouseover)
  this.width = "110"                                 // the term 'this' here is used to represent the specific html element
});

// now to make sure that after the mouseover event the image goes backto how it was we caan set another event listener
// and set the styles to how they were initially
image.addEventListener("mouseout",function(){
  this.style="";
  this.width="100";
});

// TO FIND MORE EVENTS GO TO W3SCHOOLS and searchfor HTML DOM EVENTS
// wen using addEventlistener youjust use mouseover not onmouseover. drop the on. 
//but wen in your html file you always want to include the on eg onclick

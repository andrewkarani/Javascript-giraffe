  //      Building a multiple choice quiz game

// and record scores

// in the questions array we have 3 objects

var questions = [
  {
        prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
        answer: "a"
  },
  {
       prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
       answer: "c"
  },
  {
       prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
       answer: "b"
  }
];
var score = 0;  // prompt is going to be how many questions the user got right
// i want to loop through all the questions inside of that array
// and individually I want to ask each question and get the users response and figure out if thatresponse is correct or not
// and tell them whether or not they got the question right
// in order to do this our best bet is to use a for loop

for(var i = 0; i < questions.length; i++){  // we want to loop for as many questions as there are in that questions array
  var response = window.prompt(questions[i].prompt); // what is in the parentheses will be what you want to prompt the user
  // what the user sees. 
  // questions[i].prompt I want to access that specific question that we r looping through.this will access that question prompt that we defined up there
  //in the questions array
  if(response == questions[i].answer){// checking the users response to see if it is equal to the answer to the question
       score++; // incrementing the question
       alert("Correct!"); // alerting them that they got the question
  } else {
       alert("WRONG!"); // alert them they got it wrong
  }
}
alert("you got " + score + "/" + questions.length);

//you can add as many question as you want in that questions array 
// and our loop will automatically be able to handle it


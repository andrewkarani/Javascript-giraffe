//   FOR LOOPS
// special type of loop that allows us to store an index counter as we go through our loop
// is a specialized version of a while loop
// wen witing a loop you want to have a varible similar to i that tells you what iteration of the loop you are on
// the i is called an indexing variable
var i = 0;
while (i < 10){
  document.write(i + "<br/>");
  i++;
}

// a for loop would do the above code easily
// for loop is really

// inside a for loop you put 3 diff things inside of the parenthesis
// 1st thing is the variable i ( you ridexing variable not a must i)
// the 2nd thing is the condition i < 10
//the 3rd  thing is the code that gets executed after the loop has finished
for(var i = 0; i < 10; i++){s
  document.write(i + "<br/>");
}

// USING THE FOR LOOP INORDER TO LOOP THROUGH THE ELEMENTS OF AN ARRAY

var friends = ["Kevin","Jim","Bob"];
// i can print out all the friends inside of this friends grp using for loop
for(var i = 0; i < friends.length; i++){ // i want to continue looping as long as their are other elements in that array
  document.write(friends[i] + "<br/>");// i want to print out friends at the index of i
}

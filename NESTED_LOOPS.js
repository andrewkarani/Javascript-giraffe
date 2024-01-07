//   CREATING A NESTED LOOP and a 2 DIMENSIONAL ARRAY IN JS
// nested loop is a situation where we have a loop inside of a loop
// a 2 Dimensional array is when each element inside of our array is itself an array
// 2 Dimensional array and nested loops go really well together
// creating a nested loop inside of JS

for(var i =0; i < 4; i++){
  // inside of this loop I actually want to create another loop
  for(var j = 0; i < 3; j++) // since we have already named a variable i we have to name this one differeently
    document.write("i= " + i + ", j=" + j + "<br>"); // this will print out the values of i and j on every iteration of the loop
    // in evry iteration of i the loop of j will fully run
}
// creating a 2D ARRAY
var numberGrid =[
  // evry element inside of this array is going to be an array itself
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [0]
];
// if i wanted to access the individual elements inside of this array
// i cud do so by specifying the row that they r in and specifying the column that they r in 
// ROW X COLUMN
// remeber with arrays you always start at position 0 wen counting
// accessing the 1
document.write(numberGrid[0] [0]); // the first one is the row then the column


//COPIED FROM THE WEBSITE
numberGrid = [ [1, 2], [3, 4] ];

numberGrid[0][1] = 99;
document.write(numberGrid[0][0] + "<br>");
document.write(numberGrid[0][1] + "<br>");
for(var i = 0; i < numberGrid.length; i++){ // we want the 2nd condition to be i < the number of rows inside the 2D array. numberGrid,length is equal to the number ofentries inside the array
     for(var j = 0; j < numberGrid[i].length; j++){// in the 2nd condition numberGrid[i].length we r referring to a specific row inside the number grid and we r getting the length of that row
          document.write(numberGrid[i][j] + ", ");
     }
     document.write("<br>");
}

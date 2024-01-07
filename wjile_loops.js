    // WHILE LOOPS
    // Programming structure that youcan use that will loop through a sprcified block of code until a certain condition is false
    // creating a while loop is similar to a function
    var i = 1;
    // in the parenthesis we will specify a condition
    while(i <= 10){
      // here you write the code that will be looped until the condition specified its false
      document.write(i + "<br/>");
      // then i am going to incrment i
      i++;
    }   // the above condition becomes false wen i is greater than 10 hence stops
    // wen creating a loop you want to make sure that the condition eventually becomes false 
    //to prevent creating an infinite loop that loops through the code forever

    // there is another type of while loop called a do while loop
    // in a do while loop you are executing the code first then checking if you should loop again
    // but in a while loop you first check the condition

    var i = 11;

    do{
      document.write(i + "<br/>");
      i++;
    }while(i <= 10); // this will print out 11 which would not bepossible if using a while loop
    // 11 first goes through the code inthe do while loop
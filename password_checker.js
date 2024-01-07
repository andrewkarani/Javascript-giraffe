    // PASSWORD CHECKING 
    // Password guessing Game
    // app gives yo a success message if you enter the right password 

    var password = "Drew123";

    var response; // this response variable will store whatever the user entered
    // THEN LETS CREATE a while loop .
    // a while loop will allow the userto enter the password as many times untill they have gotten it right

    while(response !=password){ // i want to keep looping when the response is not equal to the password
      response = window.prompt("Enter Password");  // everytime we go thru this loop i want to prompt the user for new input
    }
    // then if user gets right password i wantto give them an alert
    alert("Password correct");

    // LETS NOW GO A STEP FURTHER   *******    better program
    var password = "Drew123";
    var response;
    var entryCount = 0;  // this new variable will count the number of times a user enters the password
    var entryLimit = 3; // this new variable will count the number of times user tries b4 we throw an error
    var error = false;   // will tell us whether or not the program has thrown an error or if user tried too many times to enter the password
    while (response != password && !error) { // keep looping when there is no error but if ther is an error we r going to break out of the loop
      if (entryCount < entryLimit){ // if entryCount is less than entrylimit we will run thru the following code 
        response = window.prompt("Enter Password");
        entryCount++;  // incrementing every time user tries to enter the password
      } else{ // if entryCount is greater than entrylimit we will throw an error
        error = true;
      }
      
    }
    // we need to check to see which condition we r dealing with ie either too many errors or a correct password
    // we need to check whether we broke out of the loop because of an error or because they got it right
    if(error){
      alert("Too many entries");
    }else{
      alert("Password correct");
    }
    


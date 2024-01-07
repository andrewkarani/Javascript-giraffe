        /// SWITCH STATEMENTS
        //is basically a special type of if statement that we can use to compare one value to a lot of different values
        // it makes your life easier

        // i want to create a function that takes in a number btwn 0and 6 and spits out the day of the week
        
        /* 0 = sunday
        1=monday
        ....
        5 = friday
        6 = saturday
        */

        function getDayName(dayNum){
          var day;
          // doing this using if statement would be tiring
        // if you have a situation where you r checking to see if the same variable is equal to a value then the situation is perfect for a switch statement
          switch(dayNum){
            case 0: // what this is saying is : in the case that dayNum is equal to zero do sth
              day = "Sunday";
              break; // this breaks out of the switch statement  
            case 1:
              day = "Monday";
              break;
            case 2:
              day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;  
            case 4:
              day = "Thursday";
              break;  
            case 5:
              day = "Friday";
              break; 
            case 6:
              day = "Saturday";
              break;     
            // lets create a defaul case that will appear if none of the numbers(0-6) is entered
            default:
              day = "Day doesn't exist," + dayNum + "isnt a valid number";
          }
          return day;
        }
        document.write(getDayName(40));
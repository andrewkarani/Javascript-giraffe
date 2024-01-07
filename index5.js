            // IF statements

      //we can use if statements to help our programs make decisions
     // if statements are followed by ------ () and {}

var isMale = true;
var isTall = true;
// and in Js is rep as &&
// or is rep as ||
if(isMale && isTall){
  document.write("You are tall male");
} // if you wanted to check sth else you cud elseif
else if (isMale && !isTall){ // the exclamaion (!) negates sth
  document.write("Youarea short male");
}else if(!isMale && isTall){
  document.write("You are not male but you are tall");
} else{
  document.write("you are either not male or tall");
}

//    IF STATEMENTS W/ COMPARISONS

// we can actually compare different values using if statements

// i want to write a function which accepts 3 different numbers then spits out whichever number is the highest
//here we r using comparison operators
// other comparison operators r: == rep equals, != rep not equal to

function max (num1,num2,num3){
  if(num1>=num2 && num1>=num3){
    return num1;
  } else if (num2>=num1 && num2>=num3){
    return num2
  }else {
    return num3;
  } 
}

document.write(max(3, 4, 5));
// you cud also compare strings

if("phrase" == "phrase"){
  document.write("True");
}

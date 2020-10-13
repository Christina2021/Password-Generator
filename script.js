// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create variables for prompts
var passLength;   //for length of password
var passLower;    //for containing lowercase letters
var passUpper;    //for containing uppercase letters
var passNum;      //for containing numbers
var passSpecial;  //for containing special characters
var p;            //for finding specific character to add to the password
var genPass = "";      //for adding charaters to create a password

//Create arrays for character types
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSpecial = [' ', '!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var charType = [];  //for generatePassword function


// Write password to the #password input
function writePassword() {
  //Possibly create if/else statement for if password was already generated,  to make confirm for a new password to be made.
  // if(password !== true){
  //   generatePassword();
  // };

  var password = generatePassword();
  //#password linked to textarea in html file
  var passwordText = document.querySelector("#password");

  //Alerts users that they will be selecting criteria for their new password
  alert("Please continue to select your specific criteria for your new password!")
  
  //Prompts user to select length; within a while loop to have correct value entered
  while ((Number.isInteger(passLength) !== true) || (passLength < 8 || passLength > 128)){
    passLength = prompt("Please choose a length for your password.  Must be at least 8 characters, and no more than 128 characters.  (Please only enter a whole number.");
    //Converts value of string to number
    passLength = parseFloat(passLength, 10);
    //alert if user does not enter a number
    if((Number.isInteger(passLength) !== true) || (passLength < 8 || passLength > 128)){
      alert("Please enter a whole number between 8 and 128.");
    }
  };

  //Character Types
  //Loop if user did not confirm any character types
  let i;
  while(i !== true){

    //Confirm if user wants lowercase letters
    passLower = confirm("Would you like to include lowercase letters in your password?");
    //Confirm if user wants uppercase letters
    passUpper = confirm("Would you like to include uppercase letters in your password?");
    //Confirm if user wants numeric values
    passNum = confirm("Would you like to include numbers in your password?");
    //Confirm if user wants special characters included
    passSpecial = confirm("Would you like to include special characters in your password?");

    //Validate input with at least one character type selected
    i = true; //Sets i to true

    //But if none were actually confirmed, i will be set  to false
    if(passLower !== true){
      if(passUpper !== true){
        if(passNum !== true){
          if(passSpecial !== true) {
            i = false;
            alert("You must confirm at least one character type.  Your choices will be to include lowercase letters, uppercase letters, numbers, and/or special characters.")
          };
        };
      };
    };
  };

  generatePassword();

  //Combines all criteria to generate a password
  function generatePassword() {
      //Need to add character types that the user selected
      //If the user selected to include lowercase
      if(passLower){
        for (let j = 0; j < charLower.length; j++){
          charType.push(charLower[j]); 
        };
      };
      //If the user selected to include uppercase
      if(passUpper){
        for (let k = 0; k < charUpper.length; k++){
          charType.push(charUpper[k]); 
        };
      };
      //If the user selected to include numbers
      if(passNum){
        for (let l = 0; l < charNum.length; l++){
          charType.push(charNum[l]); 
        };
      };
      //If the user selected to include special characters
      if(passSpecial){
        for (let m = 0; m < charSpecial.length; m++){
          charType.push(charSpecial[m]); 
        };
      };


      //Need to add characters randomly until reaches same value as passLength selected by user
      for (let n = 0; n < passLength; n++){
        //Generate random number to use for array index
        p = Math.floor(Math.random() * charType.length);
        //Using p, add array index to password
        genPass = genPass + charType[p];
      };


      //Need to add characters to the password
      // genPass = genPass + 

      //Return the generated password
      //return genPass; 

  };
  passwordText.value = password;

}

// Add event listener to generate button (when clicked, calls writePassword function)
generateBtn.addEventListener("click", writePassword);

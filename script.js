// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create variables
var passLength;
var passLower;
var passUpper;
var passNum;
var passSpecial;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //#password linked to textarea in html file
  var passwordText = document.querySelector("#password");

  //Possibly create if/else statement for if password was already generated,  to make confirm for a new password to be made.

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

  //Combines all criteria to generate a password
  function generatePassword() {
    
  }

  passwordText.value = password;

}

// Add event listener to generate button (when clicked, calls writePassword function)
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create variables
var passLength;

// Write password to the #password input
function writePassword() {
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
    if ((Number.isInteger(passLength) !== true) || (passLength < 8 || passLength > 128)){
      alert("Please enter a whole number between 8 and 128.");
    } else {
      return passLength
    };
  };

  //Combines all criteria to generate a password
  function generatePassword() {
    
  }

  passwordText.value = password;

}

// Add event listener to generate button (when clicked, calls writePassword function)
generateBtn.addEventListener("click", writePassword);

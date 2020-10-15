// Assignment Code
var generateBtn = document.querySelector("#generate");

//Created variables for prompts
var passLength;   //for length of password
var passLower;    //for containing lowercase letters
var passUpper;    //for containing uppercase letters
var passNum;      //for containing numbers
var passSpecial;  //for containing special characters

//Variables to use for generating password
var newPass;      //used for function to confirm if user wants a new password after already creating one
var pIndex;       //for finding specific character in the charType array to add to the password (which index will be added)
var genPass;      //for adding charaters for generate password function; returns genPass for password value
var pCheck;       //for checking criteria
var password = '';  //initially sets password as an empty string

//Created arrays for the specific character types
//Lowercase letters
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Upperchase letters
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//Numbers
var charNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Special Characters
var charSpecial = [' ', '!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

//Array used to add the specific character type-arrays based on user's choosing
var charType = [];  //for generatePassword function


// First function called upon user clicking button; Will first determine if password is already made, and ask the user if they want to generate a new one
function confirmPassword(){
  //If password is already made, will ask if wants a new one (if confirmed, will call writePassword function)
  if(password){
    newPass = confirm("It looks like there is already a password that was generated.  Would you like to generate a new password?")
      if (newPass) {
        writePassword();
      }; //else - does nothing
  //If password was not already made yet (first time using it), will automatically call writePassword function
  } else {
    writePassword();
  };
};

//Large function to receive user's criteria, have a password generated, and then add the password to the textarea in html file
function writePassword() {

  //Resets previous password information if generating a new password
  password = '';
  passLength = 0;
  charType = [];

  //#password linked to textarea in html file
  var passwordText = document.querySelector("#password");

  //Alerts users that they will be selecting criteria for their new password
  alert("Please continue to select your specific criteria for your new password!  Password will generate in the box below!")
  
  //Prompts user to select length; wiill loop if user does not enter a whole number between 8-128
  while ((Number.isInteger(passLength) !== true) || (passLength < 8 || passLength > 128)){
    passLength = prompt("Please choose a length for your password.  Must be at least 8 characters, and no more than 128 characters.  (Please only enter a whole number.");
    //Converts value of string to number
    passLength = parseFloat(passLength, 10);
    //alert if user does not enter a whole number between 8-128
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

    //But if none were actually confirmed, i will be set  to false, user will be alerted, and user will need to go through the prompts again to select one
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

  //Need to add character types that the user selected; will add to the empty array charType
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

  //Combines all user's criteria to generate a password
  function generatePassword() {

    pCheck = false; //resets pCheck for criterial validator
    genPass= "";    //resets genPass to nothing

    //Need to add characters randomly until reaches same value as passLength selected by user; charType will contain the array that will be randomly picked from
    for (let n = 0; n < passLength; n++){
      //Generate random number to use for array index (number will be based on how many character types the user chose)
      pIndex = Math.floor(Math.random() * charType.length);
      //Using pIndex value calculated above, add specific array index to password
      genPass = genPass + charType[pIndex];
    };
    

    //Criteria checker!
    if(passLower){ //checks if password generated has at least one lowercase letter if user selected for it 
      pCheck = false;
      for(let w = 0; w <= genPass.length; w++){
        //if password does contains lowercase, break out of statement
        if(charLower.indexOf(genPass.charAt(w)) > -1){
          pCheck = true;
          break;
        };
      };
      //If criteria above was not met, create a new password
      if(pCheck === false) {
      generatePassword();
      };
    };
    if(passUpper){ //checks if password generated has at least one uppercase letter if user selected for it 
      for(let x = 0; x <= genPass.length; x++){
        pCheck = false
        //if password does contains uppercase, break out of statement   
        if(charUpper.indexOf(genPass.charAt(x)) > -1){
          pCheck = true;
          break;
        };
      };
      //If criteria above was not met, create a new password
      if(pCheck === false) {
        generatePassword();
      };      
    };
    if(passNum){ //checks if password generated has at least one number if user selected for it 
      for(let y = 0; y <= genPass.length; y++){
        pCheck = false
        //if password does contains number, break out of statement   
        if(charNum.indexOf(genPass.charAt(y)) > -1){
          pCheck = true;
          break;
        };
      };
      //If criteria above was not met, create a new password
      if(pCheck === false) {
        generatePassword();
      };           
    };
    if(passSpecial){ //checks if password generated has at least one special character if user selected for it 
      for(let z = 0; z <= genPass.length; z++){
        pCheck = false
        //if password does contains special character, break out of statement 
        if(charSpecial.indexOf(genPass.charAt(z)) > -1){
          pCheck = true;
          break;
        };
      };
      //If criteria above was not met, create a new password
      if(pCheck === false) {
        generatePassword();
      };         
    };

    //Return the generated password
    return genPass; 

  };

  //calls to generate password, and then add it to textbox
  password = generatePassword();
  passwordText.value = password;

};

// When "Generate Password" button is clicked, first calls confirmPassword function
generateBtn.addEventListener("click", confirmPassword);

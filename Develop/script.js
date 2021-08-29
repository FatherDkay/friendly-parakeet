// Assignment code here

//start character pool arrays
var charLower = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
var charNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var charPool = [];
//end character pool arrays

var passwordLength = 0;

//finishProcess function
function finishProcess() {
  //gather character variables and insure at least one has been sellected
  window.alert("Please select one or more of the following variables.  You will not be able to procede until at lease one has been selected");
  var lowerCase = window.confirm("If you wish to include lower case letters press OK, otherwise press Cancel");
  window.alert("Include lower case letters: " + lowerCase);
  
  var upperCase = window.confirm("If you wish to include upper case letters press OK, otherwise press Cancel");
  window.alert("Include upper case letters: " + upperCase);
  
  var numeric = window.confirm("If you wish to include numbers press OK, otherwise press Cancel");
  window.alert("Include numbers: " + numeric);
  
  var special = window.confirm("If you wish to include special characters press OK, otherwise press Cancel");
  window.alert ("Include special characters: " + special);
  
  if(lowerCase === false && upperCase === false && numeric === false && special === false){
    window.alert("You must select at lest one of the varriables.  Please try again");
    finishProcess();
    //end gather choices
  }

   //display final choices
   window.alert("You have selected length: " + passwordLength + ", lowercase: " + lowerCase + ", uppercase: " + upperCase + ", numbers: " + numeric + ", special characters: " + special);
  //confirm choices
   var ready = window.confirm("If you are ready to generate your amazing new password pres 'OK'.  Press 'Cancel' to start over  Note: to copy the password  to your computer's clipboard pres Ctrl + C");
  if(ready) {
   //start create pool of possible characters
   if(lowerCase) {
     charPool = charPool.concat(charLower);
   }

   if(upperCase) {
    charPool = charPool.concat(charUpper);
  }

  if(numeric) {
    charPool = charPool.concat(charNumber);
  }

  if(special) {
    charPool = charPool.concat(charSpecial);
  }

  pool = charPool.length;

  //end create pool

  //start magical password process

  var pw = "";

  for (var i = 0; i < passwordLength; i++) {
    var charChoice = Math.floor(Math.random() * pool);
    var char = charPool[charChoice];
    pw = pw + char;
  }

  return pw;
  }
  else {
     return generatePassword();
  }
  //end magical password process
} 

// start function
function generatePassword() {
  passwordLength = 0;
  //step 1 - get character length (must be between 8 and 128 characters and a number to procede)
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Please enter the number of characters for the new password.  The entry must be a number between 8 and 128")
  }
  
  //step 2 - get character pool options (must select at least 1 to procede)
  return finishProcess();

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.select();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


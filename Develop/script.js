// Assignment code here
//varriables

// start password length 8-128 characthers
while (length < 8 || length > 128 || isNaN(length)) {
  length = prompt("Please enter the number of characters for the new password.  The entry must be a number between 1 and 128")
}
window.alert("Password length has been set to " + length);
// end password length


//start boolean variables
//at least one of the 4 choices must be selected

var yesCount = 0;
var bool = function() {
window.alert("Please select one or more of the following variables.  You will not be able to procede until at lease one has been selected");
var lowerCase = window.confirm("If you wish to include lower case letters press OK, otherwise press Cancel");
if(lowerCase) {
  yesCount = yesCount + 1;
}
window.alert("Include lower case letters: " + lowerCase);

var upperCase = window.confirm("If you wish to include upper case letters press OK, otherwise press Cancel");
if(upperCase) {
  yesCount = yesCount + 1;
}
window.alert("Include upper case letters: " + upperCase);

var numeric = window.confirm("If you wish to include numbers press OK, otherwise press Cancel");
if(numeric) {
  yesCount = yesCount + 1;
}
window.alert("Include numbers: " + numeric);

var special = window.confirm("If you wish to include special characters press OK, otherwise press Cancel");
if(special) {
  yesCount = yesCount + 1;
}
window.alert("Include special characters: " + special);
if(lowerCase === false && upperCase === false && numeric === false && special === false){
  window.alert("You must select at lest one of the varriables.  Please try again");
  bool();
}
}


bool();


// at least one of the above must be sellected
//make sure to validate selection

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


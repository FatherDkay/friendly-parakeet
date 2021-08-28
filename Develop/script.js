// Assignment code here

// length must be between 8 and 128 characters

while (length < 8 || length > 128 || isNaN(length)) {
  length = prompt("Please enter the number of characters for the new password.  The entry must be a number between 1 and 128")
}
window.alert("Password length has been set to " + length);
window.alert("Please select one or more of the following variables.  You will not be able to procede until at lease one has been selected");
//boolean variables
  var lowerCase = window.confirm("If you wish to include lower case letters press OK, otherwise press Cancel");
  if(lowercase) {
    window.alert("Lowercase letters will be included")
  } else {
    window.alert("Lowercase letters will NOT be included")
  }

  var upperCase = window.confirm("If you wish to include upper case letters press OK, otherwise press Cancel");
  var numeric = window.confirm("If you wish to include numbers press OK, otherwise press Cancel");
  var special = window.confirm("If you wish to include special characters press OK, otherwise press Cancel");


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


getLength();
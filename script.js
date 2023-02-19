// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!","@","#"]
var lowerCaseCharacters = ["a","b","c"]
var upperCaseCharacters = ["A","B","C"]
var numericCharacters= ["0","1","2"]
function generatePassword() {
 var promptLength = prompt("What is the length of the password?")
if (promptLength < 128 && promptLength > 8) {
  console.log("correct passwordLength");
}
else {
alert("Password needs to be between 8-128 characters");
return;
}
var possibleCharacters = []
var hasSpecialCharacters = confirm ("Would you like to add special characters")
if (hasSpecialCharacters == true ){
possibleCharacters = possibleCharacters .concat(specialCharacters);
}
var haslowerCaseCharacters = confirm ("Would you like to add lower case letters")
if (haslowerCaseCharacters == true) {
possibleCharacters = possibleCharacters .concat(lowerCaseCharacters); 
}
var hasupperCaseCharacters = confirm ("Would you like to add capital letters")
if (hasupperCaseCharacters == true) {
possibleCharacters = possibleCharacters .concat(upperCaseCharacters); 
}
var hasnumericCharacters = confirm ("Would you like to add numeric characters")
if (hasnumericCharacters == true) {
possibleCharacters = possibleCharacters .concat(numericCharacters); 
}

//Get a random character from possible characters multiple times(loop)
var passWord = ""
for (var i = 0 ; i < promptLength ; i ++) {
var randomNumber = Math.floor(Math.random () * possibleCharacters.length)
  var randomCharacter = possibleCharacters[randomNumber]
 passWord = randomCharacter + passWord 
}

return passWord;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

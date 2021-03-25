// - Prompt user for what length they would like their password to be betweem 8 - 128
// - apply their input to give them that length
//- prompt for numeric character
//- apply their input
//- prompt for caps
// - apply 
// - prompt for lowercase
// - apply
// - generate password from character set to apply what settings they chose


// Assignment Code -stored button inside of var to create button click event
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '<', ':', '>', '}'];

var capCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var charaset = [];






function generatePassword() {
charaset.concat(specialCharacters)
console.log("here is it",charaset);
  var passwordLength = prompt("Enter the length of your password");
  // If statement to determine if length is brtween 8 and 128
  if (passwordLength < 8) {
    alert("Must be more then 8 characters");
    return
  } 
  if (passwordLength > 128) {
    alert("Must be less than 128 characters");
    return
  }
  var hasNumbers = confirm("Include Numbers?");
  if (hasNumbers === true) {
    charaset = charaset.concat(numericCharacters);

  }
  var hasSpecial = confirm("Include special characters?");
  if (hasSpecial === true) {
   charaset = charaset.concat(specialCharacters);
  }
  var hasCaps = confirm("Include Caps?");
  if (hasCaps === true) {
    charaset = charaset.concat(capCharacters);
  }
  var hasLower = confirm("Include lowercase?");
  if (hasLower === true) {
    charaset = charaset.concat(lowercaseCharacters);
  }
console.log(charaset);
  // console.log(passwordLength)

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// console.log(capCharacters);
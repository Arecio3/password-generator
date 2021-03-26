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

var charaset = []; // empty array of that holds the added arrays that get concat because the user chose them 






// Assignment Code
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



function generatePassword() {
// charaset.concat(specialCharacters)

  // array that holds the pushed from charaset
var password = "";
  var passwordLength = prompt("Enter the length of your password"); // asks user how long they want their password 
  // If statement to determine if length is less than 8
  if (passwordLength < 8) { // if what user typed has less than 8 characters 
    alert("Must be more then 8 characters"); // alerts user must have at least 8 characters
    return // sends user back to main screen
  } // if statement to determine if length is more than 128
  if (passwordLength > 128) { // if what they typed is more then 128
    alert("Must be less than 128 characters"); // alerts them that they must have less than 128 characters 
    return // sends user back to main screen
  }
  var hasNumbers = confirm("Include Numbers?"); // question to user if they want numbers 
  if (hasNumbers) { // if they say they want numbers
    charaset = charaset.concat(numericCharacters);// adds numeric array into charaset array

  }
  var hasSpecial = confirm("Include special characters?"); // question user if they want special
  if (hasSpecial) { // if they  do
   charaset = charaset.concat(specialCharacters); // adds specials array to charaset
  }
  var hasCaps = confirm("Include Caps?"); // question include caps 
  if (hasCaps) { // if they  want
    charaset = charaset.concat(capCharacters); // caps get added
  }
  var hasLower = confirm("Include lowercase?"); // question include lowercase
  if (hasLower) { // if they want 
    charaset = charaset.concat(lowercaseCharacters); // lower case added 
  }
    for (var i = 0; i < passwordLength; i++) { // make a loop says every character thats typed gets incremented
      password += charaset[Math.floor(Math.random() * charaset.length)]; // create random numbers and multiplies it by index length of charaset
      
       // connecting the randomization function to the array that will filter the options that were chosen
      

     

    }
    

  console.log(password);

  return password;

}


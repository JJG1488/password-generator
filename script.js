// Assignment Code
// this line grabs the id "generate" from card footer button in html document
var generateBtn = document.querySelector("#generate");

// ----------------------------------------------------------------------------

var passwordLength = prompt("passwordLength?");
var password = ""
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercasedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "/", "#", "$", "%", "*", "'", "(", ")", "*", "+", ",", "-", ".", "/", "[", ";"];

// Write password to the #password input
// this function accepts "password" and outputs the value of password to the 
// read-only id "password" that is in the html document
function writePassword(password) {

  // this line sets password value equal to generatePassword()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// this function confirms if the user would like to use special characters
function confirm_special_charcters() {

  // this line is the special charcter confirm prompt
  var passSpecialCharactersConfirm = confirm('Would you like special characters?');

}


// this function returns a special character at random
function special_characters() {

  // this line store a random special character into the blank variable
  var blank = Math.floor(Math.random() * specialCharacters.length);

  // this line returns the value of blank once it is run through the random method
  return specialCharacters[blank];

}

// confirm prompt function for numericNumbers variable
function confirm_numeric_numbers() {

  // confirm prompt for numeric numbers
  var passNumericNumbersConfirm = confirm('Would you like numeric numbers?');

 

}

// function for numeric_numbers to display a random numeric value between 0 and 9
function numeric_numbers() {

  // this line stores a random number in between 0 and 9 to the variable blank
  var blank = Math.floor(Math.random() * numericNumbers.length);

  // this line takes the value of numericNumbers(which is an array)
  // and returns the value of blank once the random equation is run
  return numericNumbers[blank];

}

// this function confirms uppercased letters
function confirm_upper_cased_letters() {

  // confirm prompt for lowercased letters
  var passCaseUppercasedLettersConfirm = confirm('Would you like uppercased letters?');

}

// this function return a random
function upper_cased_letters() {

  var blank = Math.floor(Math.random() * uppercasedLetters.length);

  return uppercasedLetters[blank];

}

// this function confirms lowercased letters
function confirm_lower_cased_letters() {

  // confirm prompt for lowercased letters
  var passCaseLowercasedLettersConfirm = confirm('Would you like lowercased letters?');

}

// this function randomly displays a lowercased letter
function lower_cased_letters() {

  // declares blank as the variable for the random function for one lowercased letter
  var blank = Math.floor(Math.random() * lowercaseLetters.length);

  // ????????returns the blank variable ?????????????
  return lowercaseLetters[blank];

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//                                    <!-- TASKS AT HAND -->

// <!-- 1 On button click, a series of prompts are presented for password criteria-->
// <!-- 2 then user chooses the length of characters between 8 and 128 -->
// <!-- 3 user can have the option to choose lowercase, uppercased, numeric, and/or special characters-->
// <!-- 4 when each prompt is answered, validate input and at least one character type should be selected -->
// <!-- 5 when all prompts are answered, then a password is generated -->
// <!-- 6 when the password is generated, display in alert or to the written page -->



//                    PASSWORD LENGTH LOGIC
// ------------------------------------------------------------

// checks if value of user input is between 8 and 128
if (passwordLength >= 8 && passwordLength <= 128) {

// logs password length to the console
  console.log(passwordLength);

  // alerts the user that the length is accepted
  alert("length checks out");


} else {

  // gives user to enter a value one more time
 passwordLength = prompt("passwordLength? One More attempt.");
// logs user input to the console
 console.log(passwordLength);

}



//                  CONFIRM CRITERIA FOR PASSWORD
// ------------------------------------------------------------



confirm_numeric_numbers();
console.log(numeric_numbers());

confirm_lower_cased_letters();
console.log(lower_cased_letters());

confirm_special_charcters();
console.log(special_characters());

confirm_upper_cased_letters();
console.log(upper_cased_letters());



//                  VALIDATE USER INPUT
// ------------------------------------------------------------
// Next Validate the users input









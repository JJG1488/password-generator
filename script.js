// HTML Element Selector Code
var generateBtn = document.querySelector("#generate");

// Wrote password to the #password input
function writePassword(password) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    alert("Your password is " + passwordText.value);

}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);

// -------------------------------------------------------------------------------------------
// GLOBAL VARIABLES
// -------------------------------------------------------------------------------------------

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercasedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["\\", "\"", "_", "!", "@", "/", "#", "$", "%", "*", "'", "(", ")", "*", "+", ",", "-", ".", "/", "[", ";", ":", "=", "<", ">", "?", "{", "}", "`", "~", "|"];

// console.log(specialCharacters[1]);
// -------------------------------------------------------------------------------------------
// GENRATE PASSWORD FUNCTION
// -------------------------------------------------------------------------------------------

function generatePassword() {

    // -------------------------------------------------------------------------------------------
    // LOCAL VARIABLES
    // -------------------------------------------------------------------------------------------
    var userInput = [prompt("How long would you like your password to be? \n (Enter number(s) only)")];

    // console.log(userInput);
    var passwordChoices = [];

    var password = "";

    password.length = userInput;

    // TYPE CHECKPOINT

    // console.log(password.length, "password length");
    // console.log(typeof password);
    // console.log(typeof userInput);
    // console.log(password);
    // console.log(userInput);

    if (userInput >= 8 && userInput <= 128) {

        // -------------------------------------------------------------------------------------------
        // CONFIRM LOWERCASED LETTERS
        // -------------------------------------------------------------------------------------------

        var lowerCase = confirm("Would like lowercased letters?") ? true : false;

        if (lowerCase == true) {

            passwordChoices = passwordChoices.concat(lowercaseLetters);

            console.log(passwordChoices);

            alert("Lowercased letters will be included.");

        } else {

            alert("Lowercased letters will NOT be included.");
        }

        // -------------------------------------------------------------------------------------------
        // CONFIRM UPPERCASED LETTERS
        // -------------------------------------------------------------------------------------------

        var upperCase = confirm("Would you like uppercased letters?") ? true : false;

        if (upperCase == true) {

            passwordChoices = passwordChoices.concat(uppercasedLetters);

            console.log(passwordChoices);

            alert("Uppercased letters will be included.");

        } else {

            alert("Uppercased will NOT be included.");
        }

        // -------------------------------------------------------------------------------------------
        // CONFIRM NUMBERS
        // -------------------------------------------------------------------------------------------

        var numericNum = confirm("Would you like numbers?") ? true : false;

        if (numericNum == true) {

            passwordChoices = passwordChoices.concat(numericNumbers);

            console.log(passwordChoices);

            alert("Numbers will be included.");

        }

        else {

            alert("Numbers will NOT be included.");

        }

        // -------------------------------------------------------------------------------------------
        // CONFIRM SPECIAL CHARACTERS
        // -------------------------------------------------------------------------------------------

        var specialChar = confirm("Would you like special characters?") ? true : false;

        if (specialChar == true) {

            passwordChoices = passwordChoices.concat(specialCharacters);

            console.log(passwordChoices);

            alert("Special charcters will be included.");

        } else {

            alert("Special charcters will NOT be included.");

        }

        if (numericNum == false && upperCase == false && lowerCase == false && specialChar == false) {

            alert("At least one selection has to be made for password to generate.");

            userInput = [];


        }

    } else {

        alert("Password must be at least 8 characters and less than 128 charcters.");

        userInput = [];

    }

    // -------------------------------------------------------------------------------------------
    // FOR LOOP, ITERATING OVER PASSWORDCHOICES
    // -------------------------------------------------------------------------------------------

    var blank;

    for (var i = 0; i < userInput; i++) {

        var blank = Math.floor(Math.random() * passwordChoices.length);

        // console.log(passwordChoices[blank]);

        password += passwordChoices[blank];

    }

    return password;
}



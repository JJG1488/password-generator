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

// -------------------------------------------------------------------------------------------
// GLOBAL VARIABLES
// -------------------------------------------------------------------------------------------

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercasedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "/", "#", "$", "%", "*", "'", "(", ")", "*", "+", ",", "-", ".", "/", "[", ";"];

// -------------------------------------------------------------------------------------------
// GENRATE PASSWORD FUNCTION
// -------------------------------------------------------------------------------------------

function generatePassword() {

    // -------------------------------------------------------------------------------------------
    // LOCAL VARIABLES
    // -------------------------------------------------------------------------------------------
    var userInput = [prompt("pass length?")];

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

        var lowerCase = confirm("lowercased letter?") ? true : false;

        if (lowerCase == true) {

            passwordChoices = passwordChoices.concat(lowercaseLetters);

            console.log(passwordChoices);

            alert("lowercased letters worked");

        } else {

            alert("lowercased did not work");
        }

        // -------------------------------------------------------------------------------------------
        // CONFIRM UPPERCASED LETTERS
        // -------------------------------------------------------------------------------------------

        var upperCase = confirm("uppercased letter?") ? true : false;

        if (upperCase == true) {

            passwordChoices = passwordChoices.concat(uppercasedLetters);

            console.log(passwordChoices);

            alert("uppercased letters worked");

        } else {

            alert("uppercased did not work");
        }

        // -------------------------------------------------------------------------------------------
        // CONFIRM NUMBERS
        // -------------------------------------------------------------------------------------------

        var numericNum = confirm("numbers?") ? true : false;

        if (numericNum == true) {

            passwordChoices = passwordChoices.concat(numericNumbers);

            console.log(passwordChoices);

            alert("numbers worked");

        } else {

            alert("numbers did not work");

        }

        // -------------------------------------------------------------------------------------------
        // CONFIRM SPECIAL CHARACTERS
        // -------------------------------------------------------------------------------------------

        var specialChar = confirm("special characters?") ? true : false;

        if (specialChar == true) {

            passwordChoices = passwordChoices.concat(specialCharacters);

            console.log(passwordChoices);

            alert("special charcters worked");

        } else {

            alert("special charcters did not work");
        }

    }

    // -------------------------------------------------------------------------------------------
    // FOR LOOP, ITERATING OVER PASSWORDCHOICES
    // -------------------------------------------------------------------------------------------

    var blank;

    for (var i = 0; i < userInput; i++) {

        var blank = Math.floor(Math.random() * passwordChoices.length);

        console.log(passwordChoices[blank]);

        password += passwordChoices[blank];

    }

    console.log(passwordChoices);
    console.log(password);

    return password;
}



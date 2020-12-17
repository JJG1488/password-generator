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

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercasedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "/", "#", "$", "%", "*", "'", "(", ")", "*", "+", ",", "-", ".", "/", "[", ";"];
console.log(typeof lowercaseLetters);

function generatePassword() {
    var userInput = [prompt("pass length?")];
    console.log(userInput);
    var passwordChoices = [];
    var password = "";
    password.length = userInput;

    console.log(password.length, "password length");

    console.log(typeof password);
    console.log(typeof userInput);
    console.log(password);
    console.log(userInput);

    if (userInput >= 8 && userInput <= 128) {

        var lowerCase = confirm("lowercased letter?") ? true : false;

        if (lowerCase == true) {

            passwordChoices = passwordChoices.concat(lowercaseLetters);

            console.log(passwordChoices);

            // // this function randomly displays a lowercased letter
            // var randomLower = function lower_cased_letters() {

            //     // declares blank as the variable for the random function for one lowercased letter
            //     var blank = Math.floor(Math.random() * lowercaseLetters.length);

            //     // ????????returns the blank variable ?????????????
            //     return lowercaseLetters[blank];

            // }

            // randomLower();
            // console.log(randomLower());
            // console.log(password);

            alert("lowercased letters worked");

        } else {

            alert("lowercased did not work");
        }

        var upperCase = confirm("uppercased letter?") ? true : false;

        if (upperCase == true) {

            passwordChoices = passwordChoices.concat(uppercasedLetters);

            console.log(passwordChoices);

            // // this function return a random Uppercased letter
            // var randomUpper = function upper_cased_letters() {

            //     var blank = Math.floor(Math.random() * uppercasedLetters);

            //     return numericNumbers[blank];

            // }
            // randomUpper();

            // write for loop for userInput
            // 




            alert("uppercased letters worked");

        } else {

            alert("uppercased did not work");
        }

        var numericNum = confirm("numbers?") ? true : false;

        if (numericNum == true) {

            passwordChoices = passwordChoices.concat(numericNumbers);
            console.log(passwordChoices);

            // var randomNum = function numeric_numbers() {

            //     // this line stores a random number in between 0 and 9 to the variable blank
            //     var blank = Math.floor(Math.random() * numericNumbers.length);

            //     // this line takes the value of numericNumbers(which is an array)
            //     // and returns the value of blank once the random equation is run
            //     return numericNumbers[blank];

            // }

            // randomNum();
            // console.log(randomNum());
            // console.log(password);

            alert("numbers worked");

        } else {

            alert("numbers did not work");

        }

        var specialChar = confirm("special characters?") ? true : false;

        if (specialChar == true) {

            passwordChoices = passwordChoices.concat(specialCharacters);
            console.log(passwordChoices);

            // // this function returns a special character at random
            // var randomChar = function special_characters() {

            //     // this line store a random special character into the blank variable
            //     var blank = Math.floor(Math.random() * specialCharacters.length);

            //     // this line returns the value of blank once it is run through the random method
            //     return specialCharacters[blank];

            // }

            // randomChar();
            // console.log(randomChar());

            // console.log(password);

            alert("special charcters worked");

        } else {

            alert("special charcters did not work");
        }

    }
    // console.log(passLengthPrompt.values);
   

    // pass newPass a value from password, while newPass.length 
    // is less than passLengthPrompt input
    // for (; newPass != passLengthPrompt; newPass++) {





    //     console.log(password);
    //     console.log(newPass);

    // }

//     console.log(typeof password);
//     console.log(password.length);
//     console.log(password);

var blank;

    for (var i = 0; i < userInput; i++) {

        var blank = Math.floor(Math.random() * passwordChoices.length);

        console.log(passwordChoices[blank]);
        password += passwordChoices[blank];

}



console.log(passwordChoices);

    // for (password = password; password.length < userInput; password++) {



    //     console.log(password);


    // }

    console.log(password);
    return password;
}
// console.log(passLengthPrompt.value);
// console.log(generatePassword());


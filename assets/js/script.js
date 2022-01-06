// Assignment Code
let generateBtn = document.querySelector("#generate");

// 1b. create an array of letters and special characters
let lcLetters = "abcdefghijklmnopkrstuvwxyz";
let ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pwNumbers = "1234567890";
let specialCharacters = "!@#$%^&*()?";
let password = [];

// generate password
// return a final password as a string
function generatePassword() {
  // 1. assign a variable to length of the password
  let wordBank = "";
  let passwordLength = prompt("Please chooose a password length.");
  // let minLength = 4;
  // let maxLength = 128;

  // pw length validation
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 and 128 charachters.");
    generatePassword();
  }
  let trueLc = confirm("Would you like to use lower case letters?");
  let trueUp = confirm("Would you like to use upper case letters?");
  let trueNumbers = confirm("Would you like to use numbers?");
  let trueSpecChar = confirm("Would you like to use special characters?");

  // 1c. loop through array of letters
  if (trueLc) {
    wordBank += lcLetters;
    // password.push(getGenerateRandom(lcLetters));
    // pwLength--;
  }
  if (trueUp) {
    wordBank += ucLetters;
    // password.push(getGenerateRandom(ucLetters));
  }
  if (trueNumbers) {
    wordBank += pwNumbers;
    // password = password.concat(pwNumbers);
  }
  if (trueSpecChar) {
    wordBank += specialCharacters;
    // password = password.concat(specialCharacters);
  }
  var randomLetter = generateRandom(wordBank.split(""));
  for (let i = 0; i < passwordLength; i++) {
    password.push(randomLetter);

    return password.join("");
  }
}
function generateRandom(characters) {
  let index = Math.floor(Math.random() * characters.length);
  return characters[index];
}
// 1d. push each letter arry into pw array

// 1e. create a random 10 letter pw

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

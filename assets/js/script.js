// Assignment Code
let generateBtn = document.querySelector("#generate");

// Arrays of letters and special characters
let lcLetters = "abcdefghijklmnopkrstuvwxyz";
let ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pwNumbers = "1234567890";
let specialCharacters = "!@#$%^&*()?";
let password = [];

// Generate password funcation
function generatePassword() {
  // Assign a variable to length of the password
  let wordBank = "";
  let passwordLength = prompt("Please chooose a password length.");

  // Password length validation
  if (passwordLength < 2 || passwordLength > 128) {
    alert("Please choose a password length between 2 and 128 charachters.");
    generatePassword();
  }
  let trueLc = confirm("Would you like to use lower case letters?");
  let trueUp = confirm("Would you like to use upper case letters?");
  let trueNumbers = confirm("Would you like to use numbers?");
  let trueSpecChar = confirm("Would you like to use special characters?");

  // Loop through array of letters
  if (trueLc) {
    wordBank += lcLetters;
  }
  if (trueUp) {
    wordBank += ucLetters;
  }
  if (trueNumbers) {
    wordBank += pwNumbers;
  }
  if (trueSpecChar) {
    wordBank += specialCharacters;
  }

  for (let i = 0; i < passwordLength; i++) {
    var randomLetter = generateRandom(wordBank.split(""));
    password.push(randomLetter);
  }
  // Return a final password as a string
  return password.join("");
}
function generateRandom(characters) {
  let index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

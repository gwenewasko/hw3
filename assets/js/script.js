// Assignment Code
let generateBtn = document.querySelector("#generate");

// 1b. create an array of letters and special characters
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
let ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
let pwNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialCharacters = ["!", "@", "#", "%", "&", "*", "?"];

// generate password
// return a final password as a string
function generatePassword() {
  // 1. assign a variable to length of the password
  let password = [];
  let passwordLength = prompt("Please chooose a password length.");
  let minLength = 4;
  let maxLength = 128;

  // 1a. create a pw with that length
  if (passwordLength < 4 || passwordLength > 128) {
    alert("Please choose a password length between 8 and 128 charachters.");
    generatePassword();
  } else {
    let trueLc = confirm("Would you like to use lower case letters?");
    let trueUp = confirm("Would you like to use upper case letters?");
    let trueNumbers = confirm("Would you like to use numbers?");
    let trueSpecChar = confirm("Would you like to use special characters?");

    // 1c. loop through array of letters
    if (trueLc === true) {
      password = password.concat(lcLetters);
      // password.push(getGenerateRandom(lcLetters));
      // pwLength--;
    }
    if (trueUp === true) {
      password = password.concat(ucLetters);
      // password.push(getGenerateRandom(ucLetters));
    }
    if (trueNumbers === true) {
      password = password.concat(pwNumbers);
    }
    if (trueSpecChar === true) {
      password = password.concat(specialCharacters);
    }

    // for (let i = 0; i < passwordLength; i++) {
    // password.push(lcLetters[i]);

    return password.join("");
  }
}
function generateRandom(characters) {
  let index = Math.floor(math.random() * characters.length);
  return characters[index];
}
// 1d. push each letter arry into pw array

// 1e. create a random 10 letter pw
// 2. ask user for length

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

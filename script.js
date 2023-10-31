// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Please type a number between 8 - 128 to specificy password length"))
  if (passwordLength < 8) {
    return alert("password length too short")
  } else if (passwordLength > 128) {
    return alert("password length is too long")
  }
  else {
  var lowercase =confirm("If you want any lower case letters in your password")
  var uppercase = confirm("If you want any upper case letters in your password")
  var numeric = confirm("If you want any numeric numbers in your password")
  var specialCharacters = confirm("If you want any special characters in your password")
  return [passwordLength, lowercase, uppercase, numeric, specialCharacters]
  }}



// Function for getting a random element from an array
function getRandom(arr) {
//to get a random number
var randomElement = Math.floor(Math.random()*arr.length);
return arr[randomElement];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var getPasswordLength = options[0];
  var getLowercase = options[1];
  var getUppercase = options[2];
  var getNumeric = options[3];
  var getSpecialCharacters = options[4];
// for a user input passwordlength, check if each statement is true or false, then take in random characters from each array and put them together.
//for a password length of 8
//take in random characters from lowercase but no more than passwordLength/4 make it whole number
//take in random characters from uppercase but no more than passwordLength/4 make it whole number
//same but for special character
//all reamining values are made up from the numeric numbers

//create an empty blank password combination to store all the arrays. 
//ensure the passwordCombination is put together in an array
var passwordCombination = [];

if (getLowercase) {
  passwordCombination = passwordCombination.concat(lowerCasedCharacters);
} 
if (getUppercase) {
  passwordCombination = passwordCombination.concat(upperCasedCharacters);
}
if (getNumeric) {
  passwordCombination = passwordCombination.concat(numericCharacters);
}
if (getSpecialCharacters) {
  passwordCombination = passwordCombination.concat(specialCharacters);
}

passwordCombination = passwordCombination.join('');
//create a blank password to store 

  var password = "" 

//write a for statement to iterate the password

for(i = 0; i < getPasswordLength; i++){
  password += getRandom(passwordCombination)
}
  
return password 
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



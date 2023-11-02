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

///validate process

function validatelengh () {

};

function validasChar () {

};

function validatecLetter () {

};

function validatelLetter () {

};

function validatenumber () {

};


///User Interaction

const usersChar = prompt("Please enter at least one special character. Special characters include !@#$%^&*()-_=+{}[]|;:");

alert(usersChar);
const usersnumber = prompt("Please enter a number");
alert(usersnumber);
const userscLetter = prompt("Please enter a Capital Leter");
alert(userscLetter);
const userslLetter = prompt("Please enter a Lower Case Letter");
alert(userslLetter);

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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

/// arch///
/// input the lengh of your password from array + store variable 
/// input  from Alphabet a Capital Letter from array + store variable
/// input from Alphabet a lowcase letter from array + store variable ( possible together ??? mmm)
/// Number from array store in a variable 
/// generate an string including the inputs ( openssl base64 is that possible with JavaScrip??) what about encrytion and decryption???
/// is a hash acceptable? should I ask?

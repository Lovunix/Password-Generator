// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '&',
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


///validate process for the special characters
function validateChar () {
   var usersChar = prompt("Please enter at least one special character. Special characters include !@#$%^&*()-_=+{}[]|;:");
  if (specialCharacters.includes(usersChar)){
  alert('your character is valid ' + usersChar)
  return usersChar;
  } else if 
    (usersChar > 1) {
  return validateChar();
  } else {
    return validateChar();
  }
}
////validate process for the capital letters 
function validateCletter () {
  usersCletter = prompt("Please enter a Capital Leter");
  if(upperCasedCharacters.includes(usersCletter)) {
  alert('your character is valid ' + usersCletter)
  return usersCletter;
   } else if 
    (usersCletter > 1) {
  return validateCletter();
  } else {
    return validateCletter();
  }
};

////validate process for the LowerCase letters 
function validateLletter () {
  usersLletter = prompt("Please enter a LowCase Leter");
  if(lowerCasedCharacters.includes(usersLletter)) {
  alert('your character is valid ' + usersLletter)
  return usersLletter;
   } else if 
    (usersLletter > 1) {
  return validateLletter();
  } else {
    return validateLletter();
  }
};

////validate process for the numbers
function validateNumber () {
  usersNumber = prompt("Please enter a number 0 to 9");
  if(numericCharacters.includes(usersNumber)) {
  alert('your character is valid ' + usersNumber)
  return usersNumber;
   } else if 
    (usersNumber > 1) {
  return validateNumber();
  } else {
    return validateNumber();
  }
};

////Give the option to choose the lenght of the password
function validatelengh () {
  userslengh = prompt("Please select the lenght of your password between a minum of 8 to a maximun of 128 characters");
  if (userslengh < 8 || userslengh > 128 || userslengh === " " ) {
  alert("The minimun lenght is 8 and max 128 character");
  return validatelengh();
  } else {
    alert(" you password lenght will be " +  userslengh )
  return userslengh;
  }
};


////function to generate password randomly including the users choose.

randomString = " ";
totalpasswd = " ";

function generatePassword() {
  ///calling functions
    var usersChar = validateChar();
    var usersNumber = validateNumber();
    var usersCletter = validateCletter();
    var usersLletter = validateLletter();
    var userslengh = validatelengh();
    var usersPool = (usersChar + usersCletter + usersLletter + usersNumber);
    var characters =  ( numericCharacters + lowerCasedCharacters + upperCasedCharacters + specialCharacters);
      for (let i = 5; i < userslengh; i++) {
      randomString += characters[Math.floor(Math.random() * characters.length)];
       };
    var totalpasswd = (randomString + usersPool );
    return totalpasswd;
      };



// // Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

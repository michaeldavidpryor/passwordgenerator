// Assignment Code
var generateBtn = document.querySelector("#generate");
// Prompts the user for flexible password
var pLength = prompt("Length of Desired Password.(Longer=More Secure)")
var lowercase = prompt("Include lowercase?")
var uppercase = prompt("Include UPPERCASE?")
var numbers = prompt("Include numbers 1-10?")
var special = prompt("Include $pecial?")

// I wanted to simplify this as much as possible. I feel there is still a way to make it shorter
function generate() {
  
  let passwordCharacters = "abcdefghijklmnopqrstuvwxyz,ABCDEFGHIJKLMNOPQRSTUVWXYZ,!@#$%^&*()+?,0123456789";
  
  let include = ""
  
    if (lowercase === "yes" || "y")
      include += (passwordCharacters.substr(0)) 
      else {""}
      
    if (uppercase === "yes" || "y"){
     include += (passwordCharacters.substr(1))
    } else {""}
   
    if (special === "yes" || "y") {
     include += (passwordCharacters.substr(2))
    } else {""}
     
    if (numbers === "yes" || "y") {
     include += (passwordCharacters.substr(3))
    } else {""}
   
    let keyword = ""
    // This error underline is very bothersome but the code still works
    for (var i = 0; i < pLength; i++){
      keyword = keyword + include.charAt((Math.floor(Math.random() * include.length)));
    }

    return keyword
}
  
  function generatePassword(){
    return generate();
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // Alerts user that password will not be saved anywhere. 
  alert ("This password will not be saved! Please print or copy it and place it somewhere you will not forget")

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



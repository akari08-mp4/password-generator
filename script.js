const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const symbols = [",", ".", ";", ":", "/", "|", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "'", "?", "<", ">" ]

let passwordLength = document.getElementById("rangeValue")
let passwordBox = document.getElementById("passBox")
/*
edit function to include letter, number and symbol checks
*/

function generatePassword() {
  let password = ""

  for (i = 0; i < passwordLength.textContent; i++) {
    let option = Math.floor(Math.random() * 2)
    if (option === 0 && document.getElementById("numbers").checked) {
      let option2 = Math.floor(Math.random() * 10)
      password += numbers[option2]
    } else if (option === 1 && document.getElementById("symbols").checked) {
      let option3 = Math.floor(Math.random() * 26)
      password += symbols[option3]
    } else {
      let option4 = Math.floor(Math.random() * 52)
      password += letters[option4]
    }
  }
  passwordBox.textContent = password;
}
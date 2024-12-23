const button = document.querySelector("button");
const password_input = document.getElementById("password");
const lengthP = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=?";
const allChars = upperCase + lowerCase + symbol + numbers;


function generate() {    
    let Password = "";
    while (lengthP > Password.length) {
        Password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    password_input.value = Password;
}

button.addEventListener("click", generate, false);
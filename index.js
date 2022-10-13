let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*_-?.<>[,~|]{\}`+=;:'"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';

    for (let index = 0; index < len; index++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
}

function copyPassword(){
    const copyText = document.getElementById("password")
    copyText.select();
    navigator.clipboard.writeText(copyText.value)

    alert("Password the copied")
}
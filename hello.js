
function generatePassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase){


    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!.?~-_&*$#@";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars +=includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols: "";

    

    if(length <= 0){
        return "Password length must be at least 1";
    }
    if (allowedChars === 0){
        return '(At least one set of characters needs to be selected)';
    }

    for (let i = 0; i <length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("newp").addEventListener("click", function () {
        const passwordLength = 16;
        const includeLowercase = true;
        const includeUppercase = true;
        const includeNumbers = true;
        const includeSymbols = true;

        const password = generatePassword(passwordLength, includeLowercase, includeNumbers, includeSymbols, includeUppercase);

        document.getElementById("password").value = password;
    });
});
// User input variables: 
var enter;
var confirmCharacter1;
var confirmLowercase1;
var confirmUppercase1;
var confirmNumber1;

// Alphabetical/ characters/numbers
alpha = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1,2,3,4,5,6,7,8,9,0];
character = ["!","@","#","$","%","^","&","*","(",")","+","="];
//is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

//variable for uppercase conversion
alpha2 = alpha.map(toUpper);
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        //  User input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber1 = confirm("Did you want it to contain numbers?");
        confirmCharacter1 = confirm("Did you want it to contain special characters?");
        confirmUppercase1 = confirm("Did you want it to  contain Uppercase letters?");
        confirmLowercase1 = confirm("Did you want it to  contain Lowercase letters?");
    };
    if (!confirmCharacter1 && !confirmNumber1 && !confirmUppercase1 && !confirmLowercase1) {
        choices = alert("You must choose a criteria!");
    }
    else if (confirmCharacter1 && confirmNumber1 && confirmUppercase1 && confirmLowercase1) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter1 && confirmNumber1 && confirmUppercase1) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter1 && confirmNumber1 && confirmLowercase1) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter1 && confirmLowercase1 && confirmUppercase1) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber1 && confirmLowercase1 && confirmUppercase1) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter1 && confirmNumber1) {
        choices = character.concat(number);

    } else if (confirmCharacter1 && confirmLowercase1) {
        choices = character.concat(alpha);

    } else if (confirmCharacter1 && confirmUppercase1) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase1 && confirmNumber1) {
        choices = alpha.concat(number);

    } else if (confirmLowercase1 && confirmUppercase1) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber1 && confirmUppercase1) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter1) {
        choices = character;
    }
    else if (confirmNumber1) {
        choices = number;
    }
    else if (confirmLowercase1) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase1) {
        choices = space.concat(alpha2);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Starts random selection variables
     for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
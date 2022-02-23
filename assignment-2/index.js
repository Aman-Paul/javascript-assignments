const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const pass = document.getElementById("password");
const conPass = document.querySelector("#conPassword");
const passError = document.querySelector(".passError");
const button = document.querySelector(".submit");

///////////////////////////////////////////////////////
// Email Validation //////////////////////////////////

email.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", function (event) {
  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

////////////////////////////////////////////////////
// Password Validation/////////////////////////////

conPass.addEventListener("input", function (e) {
  const passContent = pass.value;
  let confPassContent = conPass.value;

  if (passContent !== confPassContent) {
    passError.textContent = "Password did not match!!";
    button.disabled = true;
  } else if (passContent === confPassContent) {
    button.disabled = false;
    passError.textContent = "";
  }
});

/////////////////////////////////////////////////////////////
// Question --2 ////////////////////////////////////////////

const csv = "1,2,3,4,5,6;7,8,9,1,2,3;4,5,6,7,8,9";

const array = csv.split(";");

const convertedArray = [];

for (let x of array) {
  x = x.replaceAll(",", "");
  convertedArray.push(Object.assign({}, x));
}

console.log(convertedArray);

////////////////////////////////////////////////////////////////
// Question --3 ////////////////////////////////////////////////

let str = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i >= j) {
      str += "*";
    }
  }
  str += "\n";
}

console.log(str);

////////////////////////////////////////////////////////////////
// Question --4 ////////////////////////////////////////////////

let sum = 0;

for (let i = 0; i <= 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}

console.log(sum);

///////////////////////////////////////////////////////////////
// Question -- 5 /////////////////////////////////////////////

let string = prompt("Enter any string with more than 3 letters");
let newStr = " ";

const moveLastThreeElements = function (string) {
  const sub1 = string.substr(-3);

  const sub2 = string.substr(0, string.length - 4);

  newStr = sub1 + sub2;

  return newStr;
};

if (string.length < 3) {
  alert("You entered wrong text!!!!");
} else if (string.length === 3) {
  alert(`Original String: ${string}\nConverted Str: ${string}`);
} else if (string.length === 4) {
  alert(
    `Original String: ${string} \n Converted String: ${
      moveLastThreeElements(string) + string[0]
    }`
  );
} else {
  alert(
    `Original String:${string}\nConverted String: ${moveLastThreeElements(
      string
    )}`
  );
}

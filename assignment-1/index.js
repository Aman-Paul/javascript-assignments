
//////////////////////////////////////////////////////
// ASSIGNMENT --1......

let random = Math.floor(Math.random() * (10 - 1) + 1);
console.log(random);



let ans = prompt("Guess the number between 1 to 10");
while (Number(ans) !== Number(random)){
    ans = prompt("Wrong answer Try again");
}

if (Number(ans) === Number(random)){
    alert("great JOB, Your answer is correct")
}

///////////////////////////////////////////////////////
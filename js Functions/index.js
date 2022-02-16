//////////////////JavaScript FUNCTIONS ASSIGNMENT /////////////////

/////////////////////////////////////////////////////////////////////
// Question : 1 ////////////////////////////////////////////////////
/* 
The Fortune Teller
1. Write a function named tellFortune that:
o takes 4 arguments: number of children, partner's name, geographic
location, job title.
o outputs your fortune to the screen like so: "You will be a X in Y, and
married to Z with N kids."
2. Call that function 3 times with 3 different values for the arguments.  
*/

// SOLUTION:
/* 
const tellFortune = (children, partnerName, location, jobTitle) =>
  `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids. `;

console.log(tellFortune(2, "Sumit Rai", "Gurgao", "Software Developer"));
console.log(tellFortune(1, "Shusmita Mandal", "Noida", "Manager"));
console.log(tellFortune(2, "Ankit Malotra", "Pune", "Sales Manager"));
console.log(tellFortune(1, "Aman Gupta", "Mumbai", "Sportsman"));
 */

////////////////////////////////////////////////////////////////////
// Question : 2 ////////////////////////////////////////////////////
/* 
The Puppy Age Calculator
1. Write a function named calculateDogAge that:
    o takes 1 argument: your puppy's age.
    o calculates your dog's age based on the conversion rate of 1 human
        year to 7 dog years.
    o outputs the result to the screen like so: "Your doggie is NN years old in
        dog years!"
2 .Call the function three times with different sets of values.
3. Bonus: Add an additional argument to the function that takes the conversion
rate of human to dog years. 
 */

// SOLUTION:

/* const calculateDogAge = (puppyAge, conversionRate) =>
  `Your doggie is ${puppyAge * conversionRate} years old in dog years!`;

console.log(calculateDogAge(6, 7));
console.log(calculateDogAge(7, 3));
console.log(calculateDogAge(2, 4));
console.log(calculateDogAge(4, 4.3));
 */

////////////////////////////////////////////////////////////////////////////
// Question : 3
/* 
The Lifetime Supply Calculator
1. Write a function named calculateSupply that:
    o takes 2 arguments: age, amount per day.
    o calculates the amount consumed for rest of the life (based on a
        constant max age).
    o outputs the result to the screen like so: "You will need NN to last you
        until the ripe old age of X"
2. Call that function three times, passing in different values each time.
3. Bonus: Accept floating point values for amount per day, and round the result
    to a round number. 
*/

// SOLUTION
/* 
const calculateSupply = (age, amountPerDay) => {
  const maxAge = 80;
  const remAge = maxAge - age;
  const amountRequired = remAge * 365 * Math.floor(amountPerDay);

  console.log(
    `You wil need ${amountRequired} to last you until the ripe old age of ${maxAge}`
  );
};

calculateSupply(62, 1003);
calculateSupply(70, 450.57);
calculateSupply(55, 2300);
 */

//////////////////////////////////////////////////////////////////////////////
// Question : 4 /////////////////////////////////////////////////////////////
/* 
The Geometrizer
    Create a function called calcCircumfrence:
1. Pass the radius to the function.
2. Calculate the circumference based on the radius, and output "The
    circumference is NN".
    Create a function called calcArea:
3. Pass the radius to the function.
4. Calculate the area based on the radius, and output "The area is NN".
 */

/* const calcCircumfrence = (radius) =>
  console.log(`The circumferene is ${(2 * Math.PI * radius).toFixed(2)}`);

calcCircumfrence(4);
calcCircumfrence(7);
calcCircumfrence(12);
 */

//////////////////////////////////////////////////////////////////////////////
// Question : 5 /////////////////////////////////////////////////////////////
/* 
The Temperature Converter
Create a function called celsiusToFahrenheit:
1. Store a celsius temperature into a variable.
2. Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
3. Now store a fahrenheit temperature into a variable.
4. Convert it to celsius and output "NN°F is NN°C."  
*/
/* 
const celsiusToFahrenheit = (tempInCel) => {
  console.log(`${tempInCel}\u00B0C is ${tempInCel * 1.8 + 32}\u00B0F`);
};

celsiusToFahrenheit(23);

const FahrenheitTocelsius = (tempInFar) => {
  console.log(
    `${tempInFar}\u00B0F is ${(((tempInFar - 32) * 5) / 9).toFixed(2)}\u00B0C`
  );
};

FahrenheitTocelsius(98); */

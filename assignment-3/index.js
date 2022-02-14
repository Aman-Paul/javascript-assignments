////////////////////////////////////////////////////////////////////////
// Question -1 ////////////////////////////////////////////////////////
/*
Q-1: Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
 */

// const reverse = function (string) {
//   let splitString = string.split("");

//   let reverseArray = splitString.reverse();

//   let reversedString = reverseArray.join("");

//   return reversedString;
// };

// let string = prompt("Enter a number or string to be reversed: ");

// alert(
//   `The Original String: ${string}\nThe reversed string is : ${reverse(string)}`
// );

///////////////////////////////////////////////////////////////////////////
// Question -2 ///////////////////////////////////////////////////////////
/**
 *Q:2 Write a function to check weather a passed string is a palindrome or not.
 */

// const palindrome = function (string) {
//   let lowerString = string.toLowerCase();

//   let stringArray = lowerString.split("");
//   let sub1 = "";
//   let sub2 = "";

//   for (let i = 0; i <= stringArray.length / 2; i++) {
//     sub1 += stringArray[i];
//   }

//   for (let i = stringArray.length - 1; i >= stringArray.length / 2 - 1; i--) {
//     sub2 += stringArray[i];
//   }

//   sub1 === sub2
//     ? alert(`The number ${string} is a palindrome.`)
//     : alert(`The number ${string} is not palindrome.`);
// };

// let string = prompt("Enter the number: ");

// palindrome(string);

////////////////////////////////////////////////////////////////////////////////////
// Question - 3 ///////////////////////////////////////////////////////////////////
/**
 *3. Write a JavaScript function that generates all combinations of a string.
    Example string : 'dog'
    Expected Output : d,do,dog,o,og,g
 */

// const allCombinations = function (string) {
//   let sub = "";
//   let stringArray = [];

//   for (let i = 0; i < string.length; i++) {
//     for (let j = i; j < string.length; j++) {
//       for (let k = i; k <= j; k++) {
//         sub += string[k];
//       }
//       stringArray.push(sub);
//       sub = "";
//     }
//   }

//   return [...stringArray];
// };

// let string = prompt("Enter any string for All combinations search: ");

// alert(
//   `All combinations of given string ${string} are \n ${allCombinations(string)}`
// );

////////////////////////////////////////////////////////////////////////////////////
// Question: 4/////////////////////////////////////////////////////////////////////
/**
 *4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
    Example string : 'webmaster'
    Expected Output : 'abeemrstw'
 */

// const sortString = (string) => {
//   let stringArray = string.split("");
//   let sortStr = stringArray.sort();
//   let newStr = sortStr.join("");
//   return newStr;
// };

// let string = prompt("Enter the string to be sort: ");

// alert(`Original String: ${string}\n Rearranged String: ${sortString(string)}`);

////////////////////////////////////////////////////////////////////////////////////
// Question: 5 /////////////////////////////////////////////////////////////////////
/**
 *5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
    Example string : 'the quick brown fox'
    Expected Output : 'The Quick Brown Fox '
 */

// const capitalize = (sentence) => {
//   let sentenceArray = sentence.split(" ");
//   let newArray = [];
//   console.log(sentenceArray);

//   for (x in sentenceArray) {
//     newArray.push(
//       sentenceArray[x][0].toUpperCase() + sentenceArray[x].slice(1)
//     );
//   }

//   return [newArray.join(" ")];
// };

// let sentence = prompt("Enter the sentence to be capitalize: ");

// alert(
//   `Original String: ${sentence}\n Rearranged String: ${capitalize(sentence)}`
// );

///////////////////////////////////////////////////////////////////////////////////
// Question : 6 //////////////////////////////////////////////////////////////////
/**
 * 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
    Example string : 'Web Development Tutorial'
    Expected Output : 'Development'
 */

/*
const longestWord = (sentence) => {
  let splitString = sentence.split(" ");
  let longest = 0;
  let longWord = "";

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > longest) {
      longest = splitString[i].length;
      longWord = splitString[i];
    }
  }
  return longWord;
};

let sentence = prompt("Enter the sentence to find the longest word: ");

alert(`Original String: ${sentence}\n Longest Word: ${longestWord(sentence)}`);
*/

// 1. String Reverse

// let string1 = "Akash Gautam";
// let string2 = "Ashwin";

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverse(string1));
// console.log(reverse(string2));

// 2. Find the largest word

// const string = "the quick brown fox jumped over the lazy dog";

// function longest(srt) {
//   srt = srt.split(" ");
//   console.log(srt);
//   return srt.sort((a, b) => b.length - a.length)[0];
// }
// console.log(longest(string));

// 3. Check if the string is palandrome or not

// function palandromw(str) {
//   const reverstStr = str.split("").reverse().join("");
//   return reverstStr === str;
// }

// console.log(palandromw("racecar"));

// 4. Remove Duplicate Elements from JavaScript Array

// let arr = ["1", "2", "3", "3", "5"];
// function removeDuplicate(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicate(arr));

// 5. Check whether two strings are anagrams or not
// sort=Ascending Order

// function areAnagrams(srt1, srt2) {
//   const sortedSrt1 = srt1.split("").sort().join("");
//   const sortedSrt2 = srt2.split("").sort().join("");

//   return sortedSrt1 === sortedSrt2;
// }
// console.log(areAnagrams("listen", "silent"));

// 6. Extract the vowels out of a string

// string = "javascript";
// var reg = /[aeiou]/gi;
// var chars = string.match(reg);

// console.log(chars.join());

// 7. Find the lasgext number in an array

// function findLargestNumber(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(findLargestNumber([1, 2, 3, 5, 9, 4, 7, 5, 1, 5, 4]));

// 8. Check if the number is prime or not

// function isPrime(n) {
//   if (n < 2) return `${n} is not a prime number`;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return `${n} is not a prime number`;
//     }
//   }
//   return `${n} is a prime number`;
// }
// console.log(isPrime(122));

// 9. Calculate the factorial of a Number

// function factorial(num) {
//   if (num === 0) return 1;

//   let fa = 1;
//   for (let i = 1; i <= num; i++) {
//     fa *= i;
//   }
//   return fa;
// }
// console.log(factorial(5));

// 10. Remove all the whitespaces from a String.

// const string = "  akash,    Gautam  ";
// function removeSpace(str) {
//   const result = str.replace(/\s/g, "");
//   return result;
// }
// console.log(removeSpace(string));

// 11. Reverse each word in a String.

// var str = "saare jahan se accha hindustan humara";

// var savedStr = str.split(" ").map((word) => {
//   return word.split("").reverse().join("");
// });
// console.log(savedStr.join(" "));

// 12. Check if an object is an array or Not

// function chaeckArray(elem) {
//   console.log(Array.isArray(elem));
// }
// chaeckArray([1, 2]);
// chaeckArray([]);
// chaeckArray({});

// 13. Empty an Array in js without loop and reset

// var arr = [1, 2, 3, 4, 5];
// arr.length = 0;
// console.log(arr);

// 14. Check if a number is an Integer or not (without isIntiger)

// var a = 12;
// if (a % 1 === 0) {
//   console.log("integer");
// } else {
//   console.log("not an integer");
// }

// 15. Make array duplicate

// function duplicate(arr) {
//   return arr.concat(arr);
// }
// console.log(duplicate([1, 2, 3, 4, 5]));

// 16. Reverse the number

// function reversekaro(str) {
//   return Number(str.toString().split("").reverse().join(""));
// }
// console.log(reversekaro(123));

// Alternate Method

// function reverseKaro(num) {
//   var rev = 0;
//   while (num > 0) {
//     var rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return rev;
// }
// console.log(reverseKaro(123456));

// 17. Write a js function that returns a passed string with letters in Alphabatical order

// function alphaString(str) {
//   return str.split("").sort().join("");
// }
// console.log(alphaString("apple"));

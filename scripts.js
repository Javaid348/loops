// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.
// let fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.

// let colors = ["red", "green", "blue"];
// let output = document.querySelector("#output");
// for (let i = 0; i < colors.length; i++) {
// output.textContent += colors[i] + " ";
// }

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 4. Use a while loop to print numbers from 5 to 1 in the console.
// let i = 5;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.
// let names = ["Ali", "Sara", "Ahmed"];
// let output = document.querySelector("#names");
// let text = "";

// for (let i = 0; i < names.length; i++) {
//     text += names[i];
//     if (i < names.length - 1) {
//         text += ", "; 
//     }
// }
// output.textContent = text;

// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.
// let statusPara = document.querySelector("#status");
// statusPara.textContent = "Loading...";

// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.
// let numbers = [5, 10, 15];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];   
// }

// document.querySelector("#sum").textContent = "Total: " + total;

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.
// let cities = ["Karachi", "Lahore", "Quetta"];
// let text = "";

// for (let i = 0; i < cities.length; i++) {
//     text += cities[i];
//     if (i < cities.length - 1) {
//         text += ", "; 
//     }
// }
// document.querySelector("#cities").textContent = text;

// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max.
// let numbers = [45, 22, 89, 100];
// let max = numbers[0]; // assume first number is largest

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i]; // update max if bigger number found
//     }
// }
// document.querySelector("#max").textContent = "Largest number: " + max;

// 11. Use document.querySelector to select a div with ID result and change its text to "Task
// Complete".
// document.querySelector("#result").textContent = "Task Complete";

// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.
// let temps = [30, 35, 32, 40];
// let total = 0;
// // loop through array
// for (let i = 0; i < temps.length; i++) {
//     total += temps[i];
// }
// // calculate average
// let average = total / temps.length;
// // display result
// document.querySelector("#averageTemp").textContent = "Average Temperature: " + average;

// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.
// let total = 0;

// for (let i = 1; i <= 100; i++) {
//     total += i;
// }

// document.querySelector("#totalSum").textContent = "Total Sum: " + total;

// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.
// let animals = ["dog", "cat", "bird"];
// let text = "";

// for (let i = 0; i < animals.length; i++) {
//     text += animals[i];
//     if (i < animals.length - 1) {
//         text += ", "; // add comma except after last one
//     }
// }
// document.querySelector("#animals").textContent = text;

// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".
// document.querySelector("#title").textContent = "Welcome to JavaScript!";

// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.
// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.
// let scores = [80, 60, 90, 70];
// let count = 0;

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > 75) {
//         count++;
//     }
// }
// document.querySelector("#highScores").textContent = "Scores above 75: " + count;

// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector.
// document.querySelector("#message").textContent = "Updated successfully";

// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// them in a paragraph with ID subjectsList.
// let subjects = ["Math", "Science", "English"];
// let text = "";

// for (let i = 0; i < subjects.length; i++) {
//     text += subjects[i];
//     if (i < subjects.length - 1) {
//         text += ", "; 
//     }
// }
// document.querySelector("#subjectsList").textContent = text;
// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.
// let text = "";
// for (let i = 10; i >= 1; i--) {
//     text += i + " ";
// }
// document.querySelector("#countdown").textContent = "Countdown: " + text;
// // 2. Calculate sum of array elements
// let numbers = [5, 10, 15, 20];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }
// document.querySelector("#sumResult").textContent = "Sum of array: " + total;

// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].
// let numbers = [45, 67, 12, 89, 34];
// let max = numbers[0]; 

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }
// console.log("Largest number is: " + max);

// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.
// let numbers = [3, 8, 6, 1, 9, 2];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {  // check if even
//         count++;
//     }
// }

// console.log("Total even numbers: " + count);

// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].
// let numbers = [20, 30, 40, 50];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }
// let average = total / numbers.length;

// console.log("Average is: " + average);

// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// multiplied by 3.
// let numbers = [2, 4, 6, 8, 10];
// let multiplied = [];
// for (let i = 0; i < numbers.length; i++) {
//     multiplied.push(numbers[i] * 3);
// }
// console.log("New array: ", multiplied);

// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.
// let numbers = [1, 3, 5, 7, 9];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 4) {
//         count++;
//     }
// }
// console.log("Numbers greater than 4: " + count);

// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.
// let numbers = [10, 15, 20, 25, 30];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 5 === 0) {
//         total += numbers[i];
//     }
// }
// console.log("Sum of numbers divisible by 5: " + total);

// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].
// let numbers = [10, 20, 30, 40, 25];
// let found = false;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 25) {
//         found = true;
//         break; 
//     }
// }

// if (found) {
//     console.log("25 exists in the array");
// } else {
//     console.log("25 does not exist in the array");
// }

// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// sum of corresponding elements.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let sumArray = [];

// for (let i = 0; i < arr1.length; i++) {
//     sumArray.push(arr1[i] + arr2[i]);
// }
// console.log("Resulting array:", sumArray);

// 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].
// let numbers = [10, 99, 23, 87, 56];
// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         secondLargest = largest;   
//         largest = numbers[i];     
//     } else if (numbers[i] > secondLargest && numbers[i] < largest) {
//         secondLargest = numbers[i]; 
//     }
// }
// console.log("Second largest number is: " + secondLargest);

// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
// .reverse()).
// let numbers = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     reversed.push(numbers[i]);
// }

// console.log("Reversed array:", reversed);

// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.
// for (let num = 2; num <= 50; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }

// 32. Create a loop that finds the difference between the largest and smallest numbers in an
// array [11, 4, 99, 2, 47].
// let numbers = [11, 4, 99, 2, 47];
// let largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }
// let difference = largest - smallest;
// console.log("Difference:", difference);

// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.
// let numbers = [0, -1, -5, 6, 8, -3];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         count++;
//     }
// }
// console.log("Total negative numbers: " + count);

// 34. Loop through an array of numbers and create a new array that only contains odd
// numbers.
// let numbers = [2, 5, 8, 11, 14, 17];
// let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {   
//         oddNumbers.push(numbers[i]);
//     }
// }
// console.log("Odd numbers:", oddNumbers);

// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// elements in a new array.
// let numbers = [0, 1, 0, 3, 0, 5];
// let nonZero = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== 0) {
//         nonZero.push(numbers[i]);
//     }
// }
// console.log("Array without zeroes:", nonZero);

// 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.
// let numbers = [1, 2, 3, 4, 5, 6];

// let temp = numbers[0];                
// numbers[0] = numbers[numbers.length-1]; 
// numbers[numbers.length-1] = temp;       
// console.log("Array after swap:", numbers);

// 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.
// let numbers = [2, 4, 6, 8];
// let allEven = true;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) { 
//         allEven = false;
//         break;  
//     }
// }
// if (allEven) {
//     console.log("All numbers are even");
// } else {
//     console.log("Not all numbers are even");
// }

// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or
// equal to the average of the array.
// let numbers = [5, 10, 15, 20, 25];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }

// let average = total / numbers.length;  
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= average) {
//         count++;
//     }
// }
// console.log("Average:", average);
// console.log("Count of numbers >= average:", count);

// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.
// let numbers = [2, 2, 2, 2, 2];
// let allEqual = true;

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] !== numbers[0]) {
//         allEqual = false;
//         break; 
//     }
// }
// if (allEqual) {
//     console.log("All elements are equal");
// } else {
//     console.log("Not all elements are equal");
// }
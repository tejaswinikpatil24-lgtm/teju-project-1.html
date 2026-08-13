// Task1 Reverse a Word
 
//  function reverseword(word){
//  return word.split("").reverse().join("")
// }
// console.log(reverseword("Javascript"));

// Task2 Count Vowels

// function countVowels(str){
//      vowels= str.split("").filter(ch=>"aeiouAEIOU".includes(ch));
//     console.log("Number of vowels=",vowels.length);
// }
// countVowels("Programming");

// Task3 Check if a Fruit Exists

// function checkFruit(arr,fruit){
//    if (arr.includes(fruit)){
//     console.log("Fruit Found");
//    }else{
//     console.log("Fruit Not Found");
//    }
// }
//  let  fruits  = ["Apple","Banana","Orange"];
// (checkFruit(fruits,"Orange"));

// Task4 Roll Two Dice

// function rollDice(){
//     let dice1 = Math.floor(Math.random()*6)+1;
//     let dice2 = Math.floor(Math.random()*6)+1;
//     console.log("Dice 1:",dice1);
//     console.log("Dice 2:",dice2);
//     console.log("Total:",dice1+dice2);
// }
// rollDice();

// Task5 Current Time

// function currentTime(){
//     let time = new Date();
//     let hours =time.getHours();
//     let minutes =time.getMinutes();
//     let seconds =time.getSeconds();
//     console.log(hours + ":" + minutes + ":" + seconds);
// }
// currentTime();

// Task6 Remove the first and Last Item

// function removeItem(arr){
//     arr.shift();
//     arr.pop()
//     console.log(arr);
// }
// removeItem(["HTML","CSS","JavaScript","React"]);

// Task7 Add a Country

// function addCountry(arr,country){
//     arr.push();
//     console.log(arr);
// }
// addCountry(["India","Japan","Canada","Australia"]);

// Task8 Find the Largest Number

// function largestNumber(num){
//     console.log("Largest Number:",Math.max(...num)); 
// }
// largestNumber([12,45,78,23,56]);

// Task9 Count Total Items

// function totalItems(arr){
//     console.log("Total Items:",arr.length);
// }
// totalItems(["Pen","Book","Scale","Eraser"]);

// Task10 Welcome Message

// function userName(name){
//     console.log(name.toUpperCase);
//     console.log("Characters:",name.length);
//     console.log("Welcome" + " " + name);
// }
// userName("Sneha");
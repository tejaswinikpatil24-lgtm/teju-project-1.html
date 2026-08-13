// task 1

// let  str  = "Tejaswini Patil";
//  console.log("Original:",str);
//  console.log("toUppercase:",str.toUpperCase());
//  console.log("tolowercase:",str.toLowerCase());
//   console.log("lenght:", str.length);

// task 2

// let str  = "john123@gmail.com";
// let indexAt = str.indexOf("@");
// console.log(str.slice(0,indexAt));

// // task 3
// let str = "I love Java";

// console.log(str.replace("Java","JavaScript"));

// task 4

// let password = "Teju@123";

// if( password.length >= 8 && password.includes("@")){
//     console.log("Valid Password");
// }else{
//     console.log("Invalid Password");
// }

// task 5
// let str = "Programming";

// console.log(str.indexOf("g"));
// console.log(str.lastIndexOf("m"));

// // task 6
// let num = 12.78;
// console.log("Round:",Math.round(num));
// console.log("Floor:",Math.floor(num));
// console.log("Ceil:",Math.ceil(num));

// task 7
// let dice = Math.floor(Math.random() *  6)+1;
// console.log ("Dice Number:",dice);

// task 8
// let a = 25;
// let b = 40;
// let c = 18;

// console.log("Max",Math.max(a,b,c));
// console.log("Min",Math.min(a, b, c));

// task 9
// let num = 81;
// console.log("square root:",Math.sqrt(num));
// console.log("Power:",Math.pow(num,3));

// // task 10
// const  date =  new  Date();
// console.log("Current Date:",date.getDate());
// console.log("Current Month:", date.getMonth());
// console.log("Current Year:", date.getFullYear());
// console.log("Current Day:", date.getDay());

// // task 11

// let date =  new  Date();
// let hours = date.getHours();
// if(hours < 12){
//     console.log("Good Morning");
// }else if( hours < 17){
//     console.log("Good Afternoon");
// }else if( hours < 21){
//     console.log("Good Evening");
// }else {
//     console.log("Good Night");
// }

// task 12

//  let BirthYear =  2008;
//  let CurrentYear = new Date().getFullYear();

//  let age = CurrentYear - BirthYear;

//  console.log("Age:",age);

// task 13

// let arr = ["Apple","Banana","Orange"];
// arr.push("Manago");
// arr.pop();

// console.log("Total Fruits =",arr.length);
// console.log(arr);

// task 14

// let student = ["Rahul","Aman","Riya"];
// student.unshift("Shiv");
// student.shift();

// console.log(student);

// task 15
//cut  karne sathi  splice use hot ani add karne sathi.
// let cart = ["Milk","Bread","Butter","Eggs"];
// cart.splice(2,1, "cheese");

// console.log(cart);

//Bonus challenge

// let name = "Aman Sharma";
// let marks = [80, 90, 75];

// console.log("Name:",name.toUpperCase());
// console.log("Highest Marks:", Math.max(80, 90, 75));
// console.log("Lowest Marks:", Math.min(80, 90, 75));

// let total = marks.reduce((a, b, c) => a + b + c);
// console.log("Total=", total);
// let average = total / marks.length;
// console.log("Average=", average);

// let today = new Date();
// let date = today.getDate();
// let Month = today.getMonth();
// let year = today.getFullYear();

// console.log("current:", date + "/" + Month + "/" + year);

// marks.push(95);

// console.log(marks);
// console.log("Total Marks =", marks.length);

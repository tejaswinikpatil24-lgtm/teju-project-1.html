
//  task 1hide Mobile number 
// function num(str){
//  let strArr = "xxxxxx" + str.slice(6);
//  console.log(strArr);
 
// }

// num("9876543210")

// task 2 Extract file Extension

// function numberArr(arr){
//    let str  = arr.split(".").pop(".");
//    console.log(str);
// }
// numberArr("resume.pdf")

// task 3
// find today's Month

// function age(currentmonth){
//  let month = ["January","February","March","April","May","June","July","August","september","October","November","December"];

//  let today = new Date();
//  let arr = today.getMonth();

//  console.log(month[arr]);
// }
// age();

// task 4 remove a student name

// let name = ["Rahul", "Aman", "Sneha", "Riya"];
// function student(str){
//  let remove  = str.filter(item => item  !=="Sneha");
//  console.log(remove);

// }
// student(name)

// task 5 : Add 5 Bonus Marks
// function marks(str){
//  let Bonusmarks = str.map(item => item +5);
//     console.log(Bonusmarks);

 
// }
// let num =[45, 60, 80];
// marks(num)

// task 5 
//  function Bonus(marks){
//  let Bonusmarks = marks.map(marks => marks +5);
//    console.log(Bonusmarks);

 
// }

// Bonus(45,60,80);

// task 6 check leap year
// function checkLeapYear(year){
//   if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log("Leap Year");
//   }else{
//     console.log("Not a Leap Year");
//   }
// }
// checkLeapYear(2024);
 

// task 7 find shortest Word
// function shortest(cat){
//   let value = cat.reduce((a , b) =>{
//     return a.length  <= b.length ? a : b;
//   });
//   console.log(value);
// }

// let Animal = ["Elephant","Cat","Tiger","Dog"];
// shortest(Animal);

// task 8 Convert prices to Rupees
function addSymbol(arr){
let newArr = arr.map((item,index)=>{
let str = "₹" + item;
return str;
});
console.log(newArr);
}
addSymbol([100,250,500]);

// task 9 find Weekend or  Weekday
// function  check(){
// let today = new Date();
// let strArr = today.getDay();
// if(day ===0 || day ===6){
//     console.log("Weekend");
// }else{
//     console.log("weekday");
// }
// }
// check();

// task 10 Remove  Empty 
// let product = ["HTML", "","CSS","","JavaScript",];
// function removeArr(age){
//  let sub = age.filter(item => item  !=="");
//  console.log(sub);
// }
// removeArr(product);
    

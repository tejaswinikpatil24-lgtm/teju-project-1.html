// function initail(value){
// const splitArr = value.split(" ");
// // console.log(splitArr[0] [0]);
// // console.log(splitArr[1] [0]);
// return splitArr[0][0] + splitArr[1][0]

 
// }
// const name ="Virat Kohli "
//  console.log(initail(name))


//  map use 3 Element
// function initail(value) {
//   const splitArr = value.split(" ");
//    let str =" "
//   splitArr.map((item,index)=>{
//    str = str + " " +item[0]
//   })
//   return str
// }
// const name = "Virat Kohli Akay";
// console.log(initail(name));
// task 2
// function num(Number){
//  let square = Math.pow(Number,2);
//  let cube = Math.pow(Number, 3);
//  let squareRoot = Math.sqrt(Number);

//  console.log("square:", square);
//  console.log("cube:", cube);
//  console.log("square Root:", squareRoot);
 
// if(Number%2===0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }
// }
// num(8)



// task 3
// function day(sun){

// let date = new Date();
// console.log(7-date.getDay(),"Day left until Sunday");
// }
// day();


// task4
//  let arr =["Laptop","Mouse","Keybord"];
//  function products(Productsearch){
    
//     if( arr.includes("Mouse")){
//         console.log("Product Found");
//     }else{
//         console.log("product Not Found");
//     }
    
//  }
// products(arr)


//   // cut kel aahe  //console.log(arr.includes("Mouse"));

//  task 5


// let name = "the dark Knight"
// function title(name){
//   let splitArr = name.split(" ");
//   let str = " "
//   splitArr.map((item,index)=>{
//     str = str + " "  + item.replace(item[0],item[0].toUpperCase())
//   })
// console.log(str);
// }
// title(name)

// // task 6
// let arr = [45, 78, 89, 60, 91];
// function marks(name){
//   console.log(" Highest Marks:", Math.max(45, 78, 89, 60, 91));
//   console.log("Lowest Marks:", Math.min(45, 78, 89, 60, 91));


//    let total = arr.reduce((a,b) => a + b);
//    console.log("Total=", total);
//    let average = total / arr.length;
//    console.log("Average=", average);
// }
// marks(arr)


// task 7
// let arr = ["Rahul","Aman","Rahul","Sneha","Aman"];
// const remove = (name)=>{
// console.log([...new Set(arr)])

// }
// remove(arr)

// task 8

// let name = "Rahul Sharma"
// let birthYear = 2008

// const username =(age)=>{
//     let splitArr =age.split(" ");
//    console.log( splitArr[0].toLowerCase() + birthYear);
// }
//  (username(name))

// 9 task 

// function shoppingBill(prices) {
//     let total = prices.reduce((sum, price) => sum + price, 0);
//      let discount = total > 5000 ? total * 0.10 : 0;
//           let finalAmount = total - discount;
//   console.log("Total:", total);
//     console.log("Discount:", discount);
//     console.log("Final Amount:", finalAmount);
// }
// shoppingBill([1200, 900, 2500, 1500]);



// task 10

// let total = 100
// let attended = 76

// const checker = (name)=>{
//     let percentage = attended / total * 100
//     if(percentage >= 75){
//         console.log("Eligible for Exam");
//     }else{
//         console.log("Not Eligible for Exam");
//     }
// }
// checker(total,attended


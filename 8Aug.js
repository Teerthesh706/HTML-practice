console.log("welcome in javascript");
//abv property is use to print in js console

document.write("hello SAGE");
// abv property is use to write in the webpage

// var z = 10; var y=25 ;
// console.log(z)
// console.log(z+y)

// var can be redeclare and reassign
// let can not be redeclare but can be reassign
// const can neither be redeclare nor reassign

// alert("thisMYcomputer") to show the alert when the site

// {5=='5'} only check the digit
// {5==='5'} it will check the digit as well as the datatype
// prompt("Enter your message") this is use to take input from user

// program to validate the eligibility of user for vote:

// let age = prompt("Enter your age:")
// if(age>=18){
//     console.log("You are eligible to vote")
// }
// else if(age>=10){
//     console.log("You are eligible for baby vote")
// }
// else{
//     console.log("You are not eligible to vote")
// }

// program to check which number is greater among two number:

// let a =10
// let b = 20
// if(a<b){
//     console.log("b is greater")
// }
// else{
//     console.log('a is greater')
// }

// the prompt keyword automatically take input in string datatype so for integer we need to typecast the input in number:

// program to check which no. is greatest among three numbers:

// let g= Number(prompt("Enter the first value:"))
// let h= Number(prompt("Enter the second value:"))
// let i= Number(prompt("Enter the third value:"))
// if(g>h && g>i){
//     console.log("First value is greater")
// }
// else if (h>g && h>i){
//     console.log("Second value is greater")
// }
// else{
//     console.log ("Third value is greater")
// }

// program to print week days by pressing no. keys:
// let n= Number(prompt("Enter the Number"))
// switch (n) {
//         case 1:
//         console.log("monday")
//         break;
//         case 2:
//             console.log("tuesday")
//         break;
//         case 3:
//             console.log("wednesday")
//             break;

//             case 4:
//                 console.log("thursday")
//                 break;
//                 case 5:
//                     console.log("friday")
//                     break;
//                     case 6:
//                         console.log("saturday")
//                         break;
//                         case 7:
//                             console.log("sunday")
//                             break;

//     default:
//         console.log("out of range")
//         break;
// }

// program to check weather the no. is even or odd:
// let n= Number(prompt("Enter the number"))
// if (n%2==0){
//     console.log("Number is Even")
// }
// else{
//     console.log("Number is Odd")
// }

// program to check whether the given input is alphabet, number or special character:
// let n = prompt("Enter you Input")
// if('A'>=n>='Z' || 'a'>=n>='z'){
//     console.log("This is alphabet")
// }
// else if(0>=n>=0){
//     console.log("this is number")
// }
// else{
//     console.log("this is special character")
// }

// Program to check weather the given number is divisible by 5 and 11 or not:

// let n = Number(prompt("Enter your number:"))
// if(n%5==0){
//     if(n%11==0){
//         console.log("The number is divisible by both 5 and 11")
//     }
//     else{
//     console.log("The number is divisible only by 5")}
// }
// else if(n%11==0){
//     console.log("The number is divisible only by 11")
// }
// else{
//     console.log("The given number is not divisible by 5 and 11")
// }

// Program-to-check-whether-triangle-is-valid-or-not.html

// let m = Number(prompt("Enter the first angle"))
// let n = Number(prompt("Enter the second angle"))
// let o = Number(prompt("Enter the third angle"))

// if(m+n+o==180){
//     console.log("Triangle is valid")
// }
// else{
//     console.log("Triangle is not valid")
// }

// while(true){
//     console.log("Hello Sage")
// }

// let i=1
// while(i<=100){
//     console.log(i)
//     i=i+1
// }

// let n= Number(prompt("Enter your number:"))
// let i =0
// while(i<=n){

//     if(i==(n/2)){
//         i++
//     }
//     else{
//         console.log(i)
//         i++
//     }
//     }

// let n = Number(prompt("Enter the number:"));
// let i = 0;
// while (i <= n) {
//   if (i % 2 == 0) {
//     console.log(i, "even");
//   } else {
//     console.log(i, "odd");
//   }
//   i = i + 1;
// }

// let n = Number(prompt("Enter Your Number:"))
// let i = n 
// while(i>=0){
//     console.log(i)
//     i = i - 1
// }

// for(let char = 'a'; char <= 'z'; char = String.fromCharCode(char.charCodeAt(0) + 1)) {
//     console.log(char);
//   }

//   let charCode = 97
//   while(charCode <= 122){
    
//     const character = String.fromCharCode(charCode);
//   console.log(character);
//   charCode++;
// }
  
// let n = Number(prompt("Enter your number:"))
// let count = 0
// let i = 0
// while(i<=n){
//    count = count + i
//    i = i +1
// }
// console.log(count)

// let n = Number(prompt("Enter your number:"))
// let i = 0
// let count = 0 
// if(n%2==0){
// while(i<=n){
//     count = count + i 
//     i = i + 2
// }
// }
// console.log(count)

// let n = Number(prompt("Enter your number:"))
// let i = 0
// let count = 0 
// while(i<=n){
//     if(i%2!=0){
//         count = count + i
//     }
//     i = i + 1
// }
// console.log(count)

// let n = Number(prompt("Enter the number which have more than 2 digit:"))
// let y = 0
// let first = 0
// let i = n
// while (n>0){
//     y = n % 10
//     n = parseInt(n/10)
// }
//     console.log("First digit",y)
//     let x = i % 10
//     console.log('last Digit',x)


// let n = Number(prompt("Enter the number which have more than 2 digit:"))
// let y = 0
// let first = 0
// let i = n
// while (n>0){
//     y = n % 10
//     n = parseInt(n/10)
// }
//     console.log("First digit",y)
//     let x = i % 10
//     console.log('last Digit',x)

//      a = y + x
//      console.log("The sum of first and last digit is =", a)


               


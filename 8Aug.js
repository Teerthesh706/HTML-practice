console.log("welcome in javascript");
// above property is use to print in js console

document.write("hello SAGE");
// above property is use to write in the webpage

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
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     case 4:
//         console.log("thursday")
//         break;
//     case 5:
//         console.log("friday")
//         break;
//     case 6:
//         console.log("saturday")
//         break;
//     case 7:
//         console.log("sunday")
//         break;
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
//         console.log("The number is divisible only by 5")}
// }
// else if(n%11==0){
//         console.log("The number is divisible only by 11")
// }
// else{
//         console.log("The given number is not divisible by 5 and 11")
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


// Program of even odd using arrow function

// const checkEvenOdd = (number) => {
//     if(number % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   };
  
//   console.log(checkEvenOdd(5)); // Output: Odd
//   console.log(checkEvenOdd(10)); // Output: Even
  

// arrays in JavaScript::::
//in js we have no need to define the size of array
// let a = [10,20,30,40,50]
// console.log(a) //this will print the whole array
// console.log(a[0]) //this is called indexing
//  let sum = 0;
//  consol,e.log(a.length)
//  for(j,=0; j<a.length; j++){
//     sum= sum+a[j];
//  }
//  console.log(sum)
 
//  m = [1,2,3,4,5]
// //  following of,in,etc are the iteration function
// //  this is for printing the elements of array
//  for(i of m){ 
//     console.log(`Value ${i}`)
//  }
// //  this is for printing the index of array's element
//  for(i in m){
//     console.log(`Value ${i}`)
//  }
// // this is a simplified version of for loop
//  let n = [3,4,5,6,7]
//  n.forEach(function(item){
//     console.log(item)
//  })


// push pop unshift shift
let z = [100,200,300,400,500]
z.push(600) //this will print 600 at last position
console.log(z)
z.pop() //this will delete the last element of array
console.log(z)
z.unshift(800) //this will print 800 at first position 
console.log(z)
z.shift() //this will delete the first element of array 
console.log(z)

let v = [9,8,7,6,5]
x = v.pop()
y = v.shift()
v.push(y)
v.unshift(x)
console.log(v)

let f = [9,8,7,6,5]
f.slice(0,2) //this is used to delete the portion of array
console.log(f) 
let g = [80,90,100,110,120,130]
g.splice(1,0,"hello") // this is used to delete the portion of array and write no. of elements at that position
console.log(g)

let p =[1,2,3,4,5,6,7,8,9]
let b = p.map(function(item){ //map is used to traverse the whole array 1 by 1
    return item*2
})
console.log(b)

let q = [10,20,30,40,50,60,70,80,90]
let s = q.map(function(op){
    if(op<50){
        return 'fail'
    }
    else{
        return 'pass'
    }   
})
console.log(s)
let u = q.filter(function(op){ //this is used to filter the array by the constraints we give
    return op>50
})
console.log(u)

let t = q.reduce(function(k,c){  
    return k+c
})
console.log(t)



               


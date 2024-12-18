// p--1

// let n=3, sum=0;
// for(let i=1;i<=n;i++){
//     sum+=(i**2)
// }
// console.log(sum)

// p--2

// let sum=1;
// for(let i=1;i<=50;i++,sum+=3){
//     console.log(sum)
// }

// p--3

// let sum=0,n=7;
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         sum-=i;
//     }
//     else if(i%2!=0){
//         sum+=i;
//     }
// }
// console.log(sum);

// p--4

// let n=5,fact=1;
// for(let i=2;i<=n;i++){
//     fact*=i;
// }
// console.log(fact);

// p--5

// let n=12;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }

// p--6

// let n=496,sum=0;
// for(let i=1;i<n;i++){
//     if(n%i==0){
//         sum+=i;
//     }
// }
// if(sum==n){
//     console.log("Number is Perfect");
// }
// else{
//     console.log("Number is not Perfect");
// }

// p--7

// let flag=true, n=27;
// for(let i=2;i<n;i++){
//     if(n%i==0){
//         flag=false;
//     }
// }
// if(flag){
//     console.log("Number is Prime");
// }
// else{
//     console.log("Number is not Prime");
// }

// p--8

// let n=123321,rem=0,sum=0;
// let temp=n;
// while(n!=0){
//     rem = n%10;
//     sum = (sum*10)+rem;
//     n=Math.floor(n/10);
// }
// if(sum==temp){
//     console.log("Number is Palindrome");
// }
// else{
//     console.log("Number is not palindrpme");
// }

// p--9

// ---------------------------------------

// FILE MODULES
// const fs=require("fs");
// fs.readFile("Hello.txt",(err,data)=>{
//     console.log(data.toString());
// })
// console.log("This is after hello!");

// fs.writeFile("Hello.txt","Hi",(err)=>{
//     console.log("Data Written");
// })

// fs.appendFile("Hello.txt","Hello After Hi",(err)=>{
//     console.log("After Append")
// })

// fs.copyFile("Hello.txt","Hi.txt",(err)=>{
//     console.log("New Copy is Hereeee!")
// })

// let data=fs.readFileSync("Hello.txt","utf-8");
// console.log(data)
// console.log("This is after Hi!");

// fs.writeFileSync("Hello.txt","New Hii");
// console.log("New Written");

// fs.appendFileSync("Hello.txt","New Appended HIIIII");
// console.log("New Append!")

// fs.copyFileSync("Hello.txt","Hi.txt");

// -----------------------------------------------

// CHILD PROCESS

// const cp = require("child_process");
// cp.exec("echo Hello World",(err,stdout,stderr)=>{
//     if(err){
//         console.log(stderr);
//     }
//     else{
//         console.log(stdout);
//     }
// })

// --------------------------------------------------

// EVENT EMITTER

// const EventEmitter = require('events');
// class Mine extends EventEmitter {}

// const server = new Mine();
// server.on("newUpdates",()=>{
//     console.log("New Updates Are Here!");
// })

// let count=0;
// const t = setInterval(()=>{
//     if(count==5){
//         clearInterval(t);
//         console.log("Terminated");
//     }
//     else{
//         server.emit("newUpdates");
//         count++
//     }
// },1000);

// ------------LAB 5 P1-------------

// const fs=require("fs");
// stu = {
//     Rollno: 559,
//     Name: "Khushboo",
//     City: "Morbi",
//     SPI: 9.13,
//     University: "Darshan"
// }
// fs.writeFile('abc.txt',JSON.stringify(stu),(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File written successfully!");
//     }
// })

// ------------LAB 5 P2-------------

// const fs=require("fs");
// fs.copyFile("abc.txt","xyz.txt",(err)=>{
//     console.log("File has been copied!")
// })

// ------------LAB 5 P3-------------

// const fs=require("fs");
// fs.readFile('abc.txt', 'utf8', (err, data) => {
//     word = data.match(/\b\w+\b/g) || [].length;
//     console.log(word.length)
// });

// ------------LAB 5 P4-------------

// const fs=require("fs");
// fs.readFile('abc.txt', 'utf8', (err, data) => {
//     word = data.match(/[aeiou]/gi);
//     console.log(word.length)
// });

// ------------LAB 5 P5-------------

// const fs=require("fs");
// fs.readFile('abc.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// ------------LAB 5 P6-------------

// const fs = require("fs");
// fs.readFile("abc.txt", "utf8", (err, data) => {
//   const newData = JSON.parse(data);
//   const ans = newData.filter( item => item.StudentSPI > 5 )
//   console.log(ans)
// });

// ------------LAB 6 P1-------------

// const http = require("http");
// const server = http.createServer((req,res)=>{
//   console.log(req.url);
//   res.write("Hello");
//   res.end();
// });
// server.listen(3000,()=>{
//   console.log("Server started at 3000")
// })

// ------------LAB 6 P2-------------

// const http = require("http");
// const server = http.createServer((req,res)=>{
//   console.log(req.url);
//   if(req.url=='/'){
//     res.write("This is Home Page");
//   }
//   else if(req.url=='/login'){
//     res.write("This is Login Page");
//   }
//   else if(req.url=='/about'){
//     res.write("This is About Page");
//   }
//   else if(req.url=='/contact'){
//     res.write("This is Contact Page");
//   }
//   else if(req.url=='/signUp'){
//     res.write("This is Sign Up Page");
//   }
//   res.end();
// });
// server.listen(3000,()=>{
//   console.log("Server started at 3000")
// })

// ------------LAB 6 P3-------------

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.write("This is Home Page");
  } 
  else if (req.url == "/about") {
    const data = fs.readFileSync("about.txt", "utf8");
    res.write(data);
  }
  else if (req.url == "/contact") {
    const data = fs.readFileSync("contact.txt", "utf8");
    res.write(data);
  }
  res.end();
});
server.listen(3000, () => {
  console.log("Server started at 3000");
});

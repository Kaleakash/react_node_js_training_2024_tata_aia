// // normal function 
// function add(a,b){          // number of parameter must be match of any type. 
//     console.log(a+" "+b)
// }
// add(10,20)
// add("A","B")
// //add(100)
// //add()
// // function with data types 
// function addNumber(a:number,b:number){
//     let sum = a+b;
//     console.log(sum);
//     //return "Hello"
//     //return 100;
// }
// addNumber(10,20);
// addNumber(10.20,20.20)
// //addNumber("A","B")
// // function with no return type 
// function info():void {
//     console.log("This function no return type")
//     //return "Ravi"
// }
// info();
// // function must be return string value 
// function sayHello(name:string):string {
//  // logic 
// return "Welcome user "+name;   
// }
// console.log(sayHello("Ravi"))
// // if we need function with generic return type 
// function genericReturn():any{
//     //return "success"
//     return 0;
// }
// empDetails function with default value for parameter 
// function empInfo(id:number,fname:string="UnKnown",age:number=18,result:boolean=false):void {
//     console.log("id "+id)
//     console.log("name "+fname)
//     console.log("age "+age)
//     console.log("result "+result);
// }
// empInfo(100,"Ravi",21,true);
// empInfo(101,"Ramesh",34)
// empInfo(102,"Ajay")
// empInfo(103)
// // empDetails function with optional value for parameter 
// function empInfo1(id:number,fname?:string,age?:number,result?:boolean):void {
//     console.log("id "+id)
//     console.log("name "+fname)
//     console.log("age "+age)
//     console.log("result "+result);
// }
// empInfo1(100,"Ravi",21,true);
// empInfo1(101,"Ramesh",34)
// empInfo1(102,"Ajay")
// empInfo1(103)
// // with array parameter we need to pass empty array or array with value. 
// function studentInfo(sid:number,sname:string,age:number,skillset:Array<string>):void {
//     console.log("sid "+sid+"sname "+sname+" age "+age+"Number of skillset "+skillset.length)
// }
// let skillSetInfo:string[]=["C","C++","C#"]
// studentInfo(1,"Ravi",21,["Java"]);
// studentInfo(2,"Raj",22,["NodeJS","Angular","ReactJS","Python"]);
// studentInfo(3,"Rajesh",32,[]);
// studentInfo(4,"Ajay",34,skillSetInfo);  //skillSet array variable. 
// // with array parameter we need to pass empty array or array with value. 
// // ...variableName it receive 0 or 1 or many parameter like Java main(String...args)
// function studentInfo1(sid:number,sname:string,age:number,...skillset:Array<string>):void {  //...skillset rest 
//     console.log("sid "+sid+"sname "+sname+" age "+age+"Number of skillset "+skillset.length)
// }
// studentInfo1(1,"Ravi",21,"Java");
// studentInfo1(2,"Raj",22,"NodeJS","Angular","ReactJS","Python");
// studentInfo1(3,"Rajesh",32);
// studentInfo1(4,"Ajay",34,skillSetInfo[0],skillSetInfo[1],skillSetInfo[2]);
// studentInfo1(4,"Ajay",34,...skillSetInfo);      // using spread operator we are passing value to rest operator 
// normal style function 
display1();
function display1() {
    console.log("normal function");
}
display1();
// expression style function 
var display3 = function display2() {
    console.log("normal function");
};
display3();
// expression style function 
//display4();
var display4 = function () {
    console.log("expression style function");
};
display4();
// arrow function 
var display5 = function () { return console.log("arrow style function"); };
display4();
// addition of two number using expression style 
var addNumber1 = function (a, b) {
    var sum = a + b;
    return sum;
};
console.log("sum of two number is using expression style" + addNumber1(100, 200));
// addition of two number using arrow style 
var addNumber2 = function (a, b) { return a + b; };
console.log("sum of two number is using arrow style" + addNumber2(200, 300));
var addNumber3 = function (a, b) { return a + b; };
console.log("sum of two number is using arrow style" + addNumber3(200, 300));

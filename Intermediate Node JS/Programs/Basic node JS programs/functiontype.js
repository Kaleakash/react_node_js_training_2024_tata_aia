//1st way normal function declaration 
function display1() {
    console.log("normal function declaration in node js")
}
display1();
// 2nd way : expression style 
let display2 = function() {
    console.log("expression style function")
}
display2();
// 3rd way : arrow style function 
let display3 = ()=>console.log("Arrow style function")
display3();
// addition of two number using expression style 
let addNumber1 = function(a,b){
    let add = a+b;
    return add;
}
console.log("Addition of two number using expression style "+addNumber1(100,200));
let addNumber2 = (a,b)=>a+b;
console.log("Addition of two number using arrow style "+addNumber2(100,200));
let findLargest1 = function(a,b){
    if(a>b){
        return "first number is largest"
    }else {
        return "second number is largest"
    }
}
let findLargest2 = (a,b)=>{
    if(a>b){
        return "first number is largest"
    }else {
        return "second number is largest"
    }
}
console.log("find largest using expression style ="+findLargest1(20,10));
console.log("find largest using arrow style ="+findLargest2(20,100));
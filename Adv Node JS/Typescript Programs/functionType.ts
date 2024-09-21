// normal function 
function add(a,b){          // number of parameter must be match of any type. 
    console.log(a+" "+b)
}
add(10,20)
add("A","B")
//add(100)
//add()
// function with data types 
function addNumber(a:number,b:number){
    let sum = a+b;
    console.log(sum);
    //return "Hello"
    //return 100;
}
addNumber(10,20);
addNumber(10.20,20.20)
//addNumber("A","B")
// function with no return type 
function info():void {
    console.log("This function no return type")
    //return "Ravi"
}
info();
// function must be return string value 
function sayHello(name:string):string {
 // logic 
return "Welcome user "+name;   
}
console.log(sayHello("Ravi"))
// if we need function with generic return type 
function genericReturn():any{
    //return "success"
    return 0;
}


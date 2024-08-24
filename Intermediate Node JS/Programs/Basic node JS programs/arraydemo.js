let num1=[10,20,30,40,50];// array object in literal style  String str = new String("Raj");
let num2 = new Array(10,20,30,40,50);   // using new keyword. String str = "Raj";
console.log(num1.length)                        // Integer a=10;
console.log(num2.length)
num1.push(60);      // add at last 
num1.push(70);
num1.unshift(100);  // add at begining 
num1.unshift(200);
console.log(num1)
num1.pop();     // remove from end 
num1.shift();   // remove from start 
console.log(num1);
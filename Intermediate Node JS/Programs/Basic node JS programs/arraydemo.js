let num1=[10,20,30,40,50];// array object in literal style  String str = new String("Raj");
let num2 = new Array(10,20,30,40,50);   // using new keyword. String str = "Raj";
// console.log(num1.length)                        // Integer a=10;
// console.log(num2.length)
// num1.push(60);      // add at last 
// num1.push(70);
// num1.unshift(100);  // add at begining 
// num1.unshift(200);
// console.log(num1)
// num1.pop();     // remove from end 
// num1.shift();   // remove from start 
// console.log(num1);
console.log(num2)
//num2.splice(1,1);       // 1st parameter index position and 2nd number number of element to remove 
//num2.splice(2,2);       // 1st parameter index position and 2nd number number of element to remove 
//num2.splice(2,0,100);   // 3rd,4th,5th...nth parameter number to add the element 
//num2.splice(2,0,100,200,300,400);
//num2.splice(2,1,100);       // 2nd index position element replace by 100
//console.log(num2);
let index = num2.findIndex(e=>e==40)
//console.log(index);
// if(index==-1){
//     console.log("element not present")
// }else {
//     num2.splice(index,1);
//     console.log("element deleted")
// }
// console.log(num2);

num2.splice(-1,1);
console.log(num2)
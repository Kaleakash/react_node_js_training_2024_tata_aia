var a=10;// declaration with initialization     int a=10;
a=20;       //re-initialization                 a=20
var a=30; // re-declaration                 int a=30;
console.log(a)
let b=10;
b=20;
//let b=30;// let doesn't support re-declaration 
for(var i=0;i<10000;i++){

}
console.log(i);

for(let j=0;j<10000;j++){           // let support block scope. 

}
//console.log(j);
const c=100;
//c=200;

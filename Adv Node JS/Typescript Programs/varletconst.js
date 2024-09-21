var a = 10; //                  int a=10;
a = 20; // initialization   a=20;
var a = 30; // re-declaration   int a=30;
let b = 10;
b = 20;
//let b=30;     error 
for (var i = 0; i < 10000; i++) {
}
console.log("value of i " + i);
for (let j = 0; j < 10000; j++) {
    //console.log(j)
}
//console.log("value of j "+j)
const j = 100;
//j=200;

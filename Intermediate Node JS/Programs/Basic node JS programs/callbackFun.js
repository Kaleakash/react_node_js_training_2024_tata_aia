function greeting(fname,callback){
    return "Welcome "+callback(fname);
}
let maleInfo= function(name){
    return "Mr "+name
}

let femaleInfo = (name)=>"Miss "+name;

console.log(greeting("Ravi",maleInfo));
console.log(greeting("Seeta",femaleInfo))
console.log(greeting("Ajay",function(name){
    return "Mr "+name
}));

console.log(greeting("Veeta",(name)=>"Miss "+name));
let num=[10,20,30,40,50];
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
console.log("retrieve element one by one using callback ie foreach")
num.forEach(display);
function display(n){
    console.log(n)
}

console.log("retrieve the element one by using arrow function")

num.forEach((v,i)=>console.log("value is "+v+" Index is "+i))
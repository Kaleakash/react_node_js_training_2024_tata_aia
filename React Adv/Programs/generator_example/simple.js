// function hello() {
//     console.log("first statement");
//     console.log("second statement");
//     console.log("third statement");
//     console.log("fourth statement");
//     console.log("fifth statement");
//     console.log("sixth statement");
// }

// hello();
// console.log("-----------------------")
// function* simpleGenerator() {
//     console.log("first statement");
//     console.log("second statement");
//     yield 1;
//     console.log("third statement");
//     console.log("fourth statement");
//     yield 2;
//     console.log("fifth statement");
//     console.log("sixth statement");
//     yield 3;
// }
// let generator = simpleGenerator();
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())


// using generator consume asynchronous data. 
function* fetchData() {
    const response = yield fetch("http://localhost:3000/products").then(res=>res.json())
    console.log(response)
}
let data = fetchData();
console.log(data.next());



// function runGenerator(generator){
//     const iterator = generator();

//     function iterate(iterator) {
//         if(iterator.done){
//             return iterator.value;
//         }

//        const data =  iterator.value;
//        return data.then(p=>iterate(iterate.next(p)))
//     }

//     return iterate(iterator.next())
// }
// runGenerator(fetchData)










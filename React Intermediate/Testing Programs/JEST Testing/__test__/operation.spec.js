//import {add,sub} from '../operation'; // ES6 
let obj = require("../operation")       // ES5 style 
describe("Operation Testing",()=> {

    it("Add testing ",()=> {
          let result = obj.add(100,200);
          expect(result).toEqual(300)  
    })

    it("Sub testing ",()=> {
        let result = obj.sub(100,100);
        expect(result).toEqual(0) 
    })
})
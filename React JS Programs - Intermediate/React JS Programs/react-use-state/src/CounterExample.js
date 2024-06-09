function CouterExample() {
let counter = 0;    // if variable is normal varible 
                    // it doesn't re-render on dom. 

let handleCounter=(event)=> {
    console.log("event fired")
    counter=counter+1;
    console.log(counter)
}
    return(
        <div>
            <h4>Couter Example with normal varialbe</h4><br/>
            <p>Value of counter is {counter}</p>
            <input type="button" value="Increment"
            onClick={handleCounter}/>
        </div>
    )
}

export default CouterExample;
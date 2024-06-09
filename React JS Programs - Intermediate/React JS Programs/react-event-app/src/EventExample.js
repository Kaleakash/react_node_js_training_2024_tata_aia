function EventExample() {

let handleButton=(event)=> {
    console.log("Event fired first button");
    console.log(event)
}
let handleTextField=(event)=>{
    //console.log(event)
    console.log(event.target.name+" "+event.target.value)
}
    return(
        <div>
            <h3>Event Example</h3>
        <input type="button" value="Click Here1" onClick={handleButton}/>
<input type="button" value="Click Here2" onClick={(e)=> {
    console.log("Event fired second button");
    console.log(e)
}}/>
<hr/>
<form>
    <label>Name</label>
    <input type="text" name="ename" onChange={handleTextField}/><br/>
</form>
        </div>
    )
}

export default EventExample;
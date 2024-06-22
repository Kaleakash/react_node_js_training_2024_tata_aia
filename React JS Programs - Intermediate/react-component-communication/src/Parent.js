import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {

    return(
        <div style={{backgroundColor:"gray",height:"400px"}}>
            <h3>Parent Component</h3>
            <Child1></Child1>
            <Child2></Child2>
        </div>
    )
}

export default Parent;
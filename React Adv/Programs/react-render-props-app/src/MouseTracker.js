import { useEffect, useState } from "react";

function MouseTracker({render1}) {
let [position,setPosition]=useState({x:0,y:0});

    useEffect(()=> {
        //console.log("hello")
            let handleMouseEvent = (event)=> {
                //console.log(event)
                setPosition({x:event.clientX,y:event.clientY})
            }
            //let b1 = document.getElementById("b1")
            //b1.addEventListener("click",handler);
            window.addEventListener("mousemove",handleMouseEvent)
            // clean up activity 
            return ()=>window.removeEventListener("mousemove",handleMouseEvent);
    })
    // return(
    //     <div>
    //         <input type="button" value="click " onClick={fun}/>
    //     </div>
    // )
    return render1(position);

}


export default MouseTracker;
import { useEffect, useState } from "react";

function MouseTracker({render}) {
let [position,setPosition]=useState({x:0,y:0});

    useEffect(()=> {
            let handleMouseEvent = (event)=> {
                console.log(event)
                setPosition({x:event.clientX,y:event.clientY})
            }

            window.addEventListener("mousemove",handleMouseEvent)
            // clean up activity 
            return ()=>window.removeEventListener("mousemove",handleMouseEvent);
    },[])

    return render(position);

}


export default MouseTracker;
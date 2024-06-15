import imagename from './akash.jpg';
import * as obj from './name.js'

function InlineCssComponent() {

const styleInfo = {border:"yellow 1px solid",color:"red"}

return(
<section style={{border:"red 1px solid",width:"50%",backgroundColor:'pink',marginLeft:"300px",borderRadius:"10%"}}>
        <img src="akash.jpg" width="200px" height="200px"/>
        <img src={imagename} width="200px" height="200px"></img>
        <img src={obj.iname} width="200px" height="200px"/>
<p style={styleInfo}>This is one of trainer and developer blogs {obj.marks.map(n=><li>{n}</li>)}</p>
<h3 style={styleInfo}> <span>{obj.fname} - {obj.designation}</span> Full Stack Trainer</h3>

    </section>
)
}

export default InlineCssComponent;
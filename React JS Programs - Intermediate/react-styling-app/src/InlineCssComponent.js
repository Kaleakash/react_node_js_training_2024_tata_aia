import imagename from './akash.jpg';
import * as obj from './name.js'

//import {fname,designation,marks} from './name.js'
//import {fname,designation,marks} from './name1.js'

//import { useEffect,use } from 'react';
//import {designation} from './name.js'
function InlineCssComponent() {


return(
    <section>
        <img src="akash.jpg" width="200px" height="200px"/>
        <img src={imagename} width="200px" height="200px"></img>
        <p>This is one of trainer and developer blogs {obj.marks}</p>
        <h3> <span>{obj.fname} - {obj.designation}</span> Full Stack Trainer</h3>
    </section>
)
}

export default InlineCssComponent;
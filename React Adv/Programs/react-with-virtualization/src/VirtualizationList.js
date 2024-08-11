
import {FixedSizeList as List} from 'react-window';
function VirtualizationList() {

const data = Array.from(Array(1000).keys()); // huge data can be load from backend technologies. 
console.log(data.length)
// for(let i=0;i<data.length;i++){
//     console.log(data[i])
// }
const row = ({index})=> 
    <div>
        {data[index]}
    </div>

    return(
        <div>
            <h2>VirtualizationList Example</h2>
            <List 
            height={400}
            itemCount={data.length}
            itemSize={40}
            width={300}
            >
             {row}
            </List>
        </div>
    )

}


export default VirtualizationList;
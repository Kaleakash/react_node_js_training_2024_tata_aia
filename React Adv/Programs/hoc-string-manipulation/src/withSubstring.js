
let withSubstring = (WrappedComponent)=> {
    return(props)=> {
        console.log(props)          
        let start = props.start;
        let end = props.end;
        let substring = props.text.substring(start,end)
        console.log(substring)
        return <WrappedComponent text={substring}/>
    }
}

export default withSubstring;
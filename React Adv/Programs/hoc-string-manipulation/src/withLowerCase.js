
let withLowerCase = (WrappedComponent)=> {
    return(props)=> {
        console.log(props)          
        let lowerCaseValue = props.text.toLowerCase();
        console.log(lowerCaseValue)
        return <WrappedComponent text={lowerCaseValue}/>
    }
}

export default withLowerCase;
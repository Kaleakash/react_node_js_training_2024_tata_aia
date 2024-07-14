
let withUpperCase = (WrappedComponent)=> {
    return(props)=> {
        console.log(props)          
        let upperCaseValue = props.text.toUpperCase();
        console.log(upperCaseValue)
        return <WrappedComponent text={upperCaseValue}/>
    }
}

export default withUpperCase;
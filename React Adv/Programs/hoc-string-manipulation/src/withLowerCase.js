
let withLowerCase = (WrappedComponent,propsName)=> {
    return(props)=> {
        console.log(props)          // it has a object. 
        console.log(propsName)      // text 
        let propsValue = props[propsName]
        console.log(propsValue)
        let lowerCaseValue = propsValue.toLowerCase();

        return <WrappedComponent {...props} {...{[propsName]:lowerCaseValue}}/>
    }
}

export default withLowerCase;
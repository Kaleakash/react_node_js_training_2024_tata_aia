import './styles.css'
function ExternalCssComponent() {


    return(
        <div>
            <p>Welcome to External CSS Rules</p>
            <p className='pClass1'>Welcome to External CSS Rules</p>
            <p className='pClass2'>Welcome to External CSS Rules</p>
            <p className='pClass3'>Welcome to External CSS Rules</p>
            <p className='pClass1 pClass2'>Welcome to External CSS Rules</p>
        </div>
    )
}

export default ExternalCssComponent;
function Login() {


    return(
        <div className="container">
                <h2>Login Page</h2>
        <form className="form-group">
            <label>EmailId</label>
            <input type="email" name="emailid" className="form-control"/><br/>
            <label>Password</label>
            <input type="password" name="password" className="form-control"/><br/>
            <input type="submit" value="submit" className="btn btn-success" style={{backgroundColor:"red"}}/>
            <input type="reset" value="reset" className="btn btn-info"/>
        </form>
        </div>
    )
}

export default Login;
import React from 'react';

const Login = () => {
    return(
        <div>
            <h1>Log In</h1>
            <input placeholder="username" className="form-control"/>
            <input type="password" placeholder="password" className="form-control"/>
            <button className="btn">Log In</button>
        </div>
    )
}

export default Login;
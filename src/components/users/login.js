import React, {useState} from 'react';
import userService from '../../services/user-service';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({})
    const login = () => {
        userService.login(credentials)
            .then((existingUser) => {
                if (existingUser) {
                    history.push("./profile")
                }
            })
    }
    return(
        <div>
            <h1>Log In</h1>
            <input onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                   placeholder="username"
                   className="form-control"/>
            <input onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                   type="password"
                   placeholder="password"
                   className="form-control"/>
            <button className="btn">Log In</button>
        </div>
    )
}

export default Login;
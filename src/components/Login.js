import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

class Login extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="login">
                    <Link to="/top">Top</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;
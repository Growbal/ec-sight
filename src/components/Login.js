import React , { Component } from 'react';

import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="login">
                    <form className='login-list' onSubmit={ this.handleSubmit }>
                        <input type="text" placeholder='メールアドレスを入力' value = {this.state.email } onChange = { this.handleChangeEmail } />
                        <input type="text" placeholder='ぱすわーど' value = { this.state.password } onChange = { this.handleChangePassword }/>
                        <button>ろぐいん</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    handleChangeEmail = event => {
        // console.log(event.currentTarget.value);
        this.setState({ email: event.currentTarget.value });
    }
    
    handleChangePassword = event => {
        // console.log(event.currentTarget.value);
        this.setState({ password: event.currentTarget.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('入力内容：', this.state.email , this.state.password);
        this.setState({ email : ""});
        this.setState({ password : ""});
        this.props.history.push('/top');


    }
}

export default Login;
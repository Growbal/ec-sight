import React , { Component } from 'react';
import Modal from 'react-modal';

import './Login.css';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
    }
};

Modal.setAppElement('#root');

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render(){
        return(
            <React.Fragment>
                <div className="menu">
                    <div className="registration">
                        <p>登録する</p>
                    </div>
                    <div className="login">
                        <p onClick={ this.openModal }>ろぐいん</p>
                        <Modal                          
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}>
                            <form className='login-list' onSubmit={ this.handleSubmit }>
                                <input type="text" placeholder='めーる' value = {this.state.email } onChange = { this.handleChangeEmail } />
                                <input type="text" placeholder='ぱすわーど' value = { this.state.password } onChange = { this.handleChangePassword }/>
                                <button>ろぐいん</button>
                            </form>
                        </Modal>
                    </div>
                </div>
            </React.Fragment>
        )
    }


    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
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
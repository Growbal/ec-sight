import React , { Component } from 'react';

import './Form.css';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: ""
        };
    }

    render(){
        return (
        <form className="Serch-box" onSubmit = {this.handleSubmit}>
            <input type = "text" placeholder="商品を検索" value = {this.state.input} onChange = {this.handleChange}/>
            <button>🔍</button>
        </form>
        )
    }

    handleChange = event =>{
        this.setState({ input:event.currentTarget.value});
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state.input);
        this.setState({ input : ""});
        
    }
}

export default Form;
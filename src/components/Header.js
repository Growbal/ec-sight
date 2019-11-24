import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Form from './Form';

class Header extends Component{

    render(){
        return (
            <div className = "Header">
                <div className = "Logo">
                    <Link to='/top'>
                        <p>ロゴ</p>
                    </Link>
                </div>
                <div className = "Link">
                    <p>リンク</p>
                </div>
                <Form />
                <div className = "Info">
                    <p>お知らせ</p>
                </div>
                <div className = "Account">
                    <p>アカウント情報</p>
                </div>
            </div>
        )
    }

}

export default Header;
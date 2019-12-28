import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';

import { getData } from '../actions';

import  Header from './Header';
import './Top.css';

class Top extends Component{

    render(){
        return(
            <React.Fragment>
                <Header />
                    <div className = "topPage">
                        <div className = "movie">
                            <p>動画</p>
                        </div>
                        <div className = "right">
                            <div>
                                <p>ばなー</p>    
                            </div>
                                <div className = "linkList">
                                    <div className = "link">
                                        <Link to='/productlist'>
                                            <p>商品一覧</p>
                                        </Link>
                                    </div>
                                    <div className = "link">
                                        <Link to='/'>
                                            <p>ランキング</p>
                                        </Link>
                                    </div>
                                    <div className = "link">
                                        <Link to='/'>
                                            <p>概要</p>
                                        </Link>
                                    </div>
                                    <div className = "link">
                                        <Link to='/'>
                                            <p>ジャンル</p>
                                        </Link>
                                    </div>
                                    <div className = "link">
                                        <Link to='/'>
                                            <p>おすすめ</p>
                                        </Link>
                                    </div>
                                    <div className = "link">
                                        <Link to='/'>
                                            <p>レビュー</p>
                                        </Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ });
const mapDispatchToProps = dispatch => ({ getData });

export default connect(mapStateToProps, mapDispatchToProps)(Top)
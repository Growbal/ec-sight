import React , { Component } from 'react';
import logo from '../logo.svg';

import './ProductList.css';
import Header from './Header';
// import _ from 'lodash';

class ProductList extends Component {
    constructor(props){
        super(props);

        this.state = {
            productName: "",
            productPay: ""
        }
    }

    // displayProduct(){
    //     return _.map(this.props)
    // }

    render(){
        return(
            <React.Fragment>
                <Header />
                <div className="productlist">
                    <div className="demo"></div>
                    <div className="products">
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                        <div className="puroduct">
                            {/* {this.displayProduct()} */}
                            <img src={logo} className="logo" alt="logo" />
                            <p>商品名</p>
                            <p>表品価格＄</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;
import React , { Component } from 'react';

import './Top.css';

class Top extends Component{

    render(){
        return(
            <div className = "topPage">
                <div className = "movie">
                    <p>動画を表示するっぽい</p>
                </div>
                <div className = "right">
                    <div>
                        <p>バナー？</p>
                    </div>
                    <div className = "main">
                        <div className = "productList">
                            <button>商品一覧</button>
                        </div>
                        <div className = "ranking">
                            <button>ランキング</button>
                        </div>
                        <div className = "overView">
                            <button>概要</button>
                        </div>
                        <div className = "genre">
                            <button>ジャンル</button>
                        </div>
                        <div className = "recommended">
                            <button>おすすめ</button>
                        </div>
                        <div className = "review">
                            <button>レビュー</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top;
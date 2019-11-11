import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideLeanCanvas, ShowGuide, MoveHomeButton, NextButton } from './Guide.js';
import './LeanCanvas.css';

export class LeanCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.match.params.productID,
      guideFlag: true,
    };
  }
  
  guideFlagChange() {
      this.setState({guideFlag: !this.state.guideFlag});
  }
 render(){
    return(    
      <div>
      { this.state.guideFlag && <GuideLeanCanvas onClick={() => this.guideFlagChange()} /> }
        <Header className='header' title='リーンキャンバス' />
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName="/product/0/elevatorpitch" />
        <div className='lean'>
            <div className="kadai">
                <textarea className="name" readOnly >
                    [1]課題　
                </textarea>
                <textarea className="write" />
            </div>
            
            <div className="kizon">
                <textarea className="name" readOnly >
                    [2]既存の代替品
                </textarea>
                <textarea className="write" />
            </div>            
            
            <div className="solution">
                <textarea className="name" readOnly >
                    [5]ソリューション
                </textarea>
                <textarea className="write" />
            </div>            

            <div className="syuyou">
                <textarea className="name" readOnly >
                    [9]主要指標
                </textarea>
                <textarea className="write" />
            </div>

            <div className="dokuzi">
                <textarea className="nameL" readOnly >
                    [4]独自の価値提案
                </textarea>
                <textarea className="writeL" />
            </div>

            <div className="attouteki">
                <textarea className="name" readOnly >
                    [10]圧倒的な優位性
                </textarea>
                <textarea className="write" />
            </div>            

            <div className="tyaneru">
                <textarea className="name" readOnly >
                    [6]チャネル
                </textarea>
                <textarea className="write" />
            </div>               

            <div className="kokyaku">
                <textarea className="nameL" readOnly >
                    [3]顧客セグメント
                </textarea>
                <textarea className="writeL" />
            </div>        

            <div className="cost">
                <textarea className="name" readOnly >
                    [8]コスト構造
                </textarea>
                <textarea className="write" />
            </div>   

            <div className="syueki">
                <textarea className="name" readOnly >
                    [7]収益の流れ
                </textarea>
                <textarea className="write" />
            </div>                                                                                 
      <button onclick={()=>this.download}>ダウンロード</button>

       </div>
      </div>  
    )
  }  
}
































import React, {Component} from 'react';
import './LeanCanvas.css'
import {Header} from './Header.js'
import { Link } from 'react-router-dom';
import {TipsLeanCanvas,ShowTips, MoveHomeButton, NextButton} from './tips.js'


export class LeanCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipsFlag: true,
    };
  }
  
  tipsFlagChange() {
      this.setState({tipsFlag: !this.state.tipsFlag});
  }
  render(){
    return(    
      <div>
      { this.state.tipsFlag && <TipsLeanCanvas onClick={() => this.tipsFlagChange()} /> }      
        <Header className='header' title='リーンキャンバス' />
        <ShowTips  onClick={() => this.tipsFlagChange()} />        
        <NextButton urlName="/elevatorpitch" />
        <div className='lean'>
            <div className="kadai">
                <textarea className="name" readOnly >
                    課題
                </textarea>
                <textarea className="write" />
            </div>
            
            <div className="kizon">
                <textarea className="name" readOnly >
                    既存の代替品
                </textarea>
                <textarea className="write" />
            </div>            
            
            <div className="solution">
                <textarea className="name" readOnly >
                    ソリューション
                </textarea>
                <textarea className="write" />
            </div>            

            <div className="syuyou">
                <textarea className="name" readOnly >
                    主要指標
                </textarea>
                <textarea className="write" />
            </div>

            <div className="dokuzi">
                <textarea className="nameL" readOnly >
                    独自の価値提案
                </textarea>
                <textarea className="writeL" />
            </div>

            <div className="attouteki">
                <textarea className="name" readOnly >
                    圧倒的な優位性
                </textarea>
                <textarea className="write" />
            </div>            

            <div className="tyaneru">
                <textarea className="name" readOnly >
                    チャネル
                </textarea>
                <textarea className="write" />
            </div>               

            <div className="kokyaku">
                <textarea className="nameL" readOnly >
                    顧客セグメント
                </textarea>
                <textarea className="writeL" />
            </div>        

            <div className="cost">
                <textarea className="name" readOnly >
                    コスト構造
                </textarea>
                <textarea className="write" />
            </div>   

            <div className="syueki">
                <textarea className="name" readOnly >
                    収益の流れ
                </textarea>
                <textarea className="write" />
            </div>                                                                                 

       </div>
      </div>  
    )
  }  
}

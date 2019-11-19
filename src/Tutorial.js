import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Header } from './Header.js';
import { GuideLeanCanvas, ShowGuide, MoveHomeButton, NextButton, BackButton, AllMenu } from './Guide.js';
import './Tutorial.css';

export class Tutorial extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.match.params.productID,      
      weig: window.location.href,
			};
    }

  render(){
    return(
      <div>
        <Header className='header' title='トップ' />
        <NextButton urlName={"/product/" + this.props.match.params.productID + "/leancanvas"} />  
        <AllMenu className="allmenu-user" Tflag={true} TurlName={"/product/" + this.props.match.params.productID} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>      
        <div className="tutorial">
          <div className="beforecom">
          <p className="emphaB">
          <p className="emphaR">
          必読
          </p>
          </p>
          <br/>
          <p className="flow">
          あなたのプロジェクトのURLは「 <p className="returnurl">{this.state.weig}</p> 」です。<br/>
          今後このプロジェクトを利用する際には上記のURLによる接続となるため、
          <p className="emphaR">忘れずにメモしておいてください。</p><br/><br/>
          </p>
          </div>
          
          
          <div className="beforecom">
          <p className="emphaB">
          プロダクトデザインの流れ
          </p>
          <br/>
          <p className="flow">
          プロダクトデザインは<br/>
            <p className="emphaB">
          　ー「リーンキャンバス」<br/>
          　ー「エレベーターピッチ」<br/>
          　ー「ユーザーストーリーマップ」<br/>
          　ー「プロダクトバックログ」</p>の順で進行し、終えることになります。 <br/><br/>
                    このサイトでは上記の流れに沿ってプロダクトデザインを行うことができます。
          </p>
        </div>
        
          <div className="beforecomB">
          <p className="emphaB">
          サイトの各種機能のチュートリアル
          </p>
          <br/><br/>
          <p className="flow">
          <p className="emphaB">
            1.サイトの上部にある緑色のバー↓</p>
            </p>
                    <AllMenu/>
          <p className="flow">                    
          は現在取り組んでいる作業を確認することができます。リーンキャンバスに取り組んでいるときは、<br/>バーのリーンキャンバスの部分の色が変わります。現在はトップ画面なのでトップの色が他と異なっています。<br/>
          またバーはクリックすることができ、移動したい場所を選択すれば即座にその場へ飛ぶことができます。
          <br/><br/>
          <p className="emphaB">          
          2.右上に設置されているBack,Nextボタン↓
          </p>
          <p className="obj">
            <BackButton /><NextButton/>   
           </p> <br/>
           はクリックすることで現在の作業場所から、プロダクトデザインの流れに沿って、前後の作業場所に飛ぶことができます。<br/>
           例えばユーザーストーリーマップの画面であるならば,<br/>Backでエレベーターピッチ,Nextでプロダクトバックログに飛ぶことができます。<br/>
           このページにおいては、Nextを押せばリーンキャンバスへ移動できます。<br/><br/>
          <p className="emphaB">           
           3.右上に設置されているGUIDEボタン↓
           </p>
           <p className="obj2">
        <ShowGuide  onClick={() => null} />
            </p><br/>
            はクリックすることで現在の作業の取り組み方についての説明が表示されます。<br/>
            例えばリーンキャンパスの画面でクリックすれば、リーンキャンバスの取り組み方の説明が表示されます。<br/>                  
          </p>          
        </div>        
        </div>
      </div>
    )
  }
}
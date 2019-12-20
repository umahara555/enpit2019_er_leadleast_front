import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Header } from './Header.js';
import { GuideTutorial, ShowGuide, MoveHomeButton, NextButton, BackButton, AllMenu } from './Guide.js';
import './Tutorial.css';


export class Tutorial extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.match.params.productID, 
      guideFlag: true,
      weig: window.location.href,
    };
    const {cookies} = this.props;
    }


  guideFlagChange() {
    this.setState({guideFlag: !this.state.guideFlag});
  }

  checkCookiesFlag(){
    const {cookies} = this.props;
    console.log(cookies.get("guide"));
    let guideFlag = cookies.get("guide");
    if (guideFlag[0]==1) {
      this.setState({guideFlag: false});
    }
  }

  componentWillMount() {
    this.checkCookiesFlag()
  }

  componentWillUnmount(){
    const {cookies} = this.props;
    let guideFlag = cookies.get("guide");
    if (guideFlag[0]==0) {
      guideFlag[0] = 1;
      cookies.set("guide", guideFlag);
    }
  }

  render(){
    return(
      <div>
        { this.state.guideFlag && <GuideTutorial onClick={() => this.guideFlagChange()} /> }
        <Header className='header' title='トップ' />
        <ShowGuide  onClick={() => this.guideFlagChange()} />
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
         </div>
      </div>
    )
  }
}

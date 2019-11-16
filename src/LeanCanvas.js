import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideLeanCanvas, ShowGuide, MoveHomeButton, NextButton, BackButton, AllMenu } from './Guide.js';
import './LeanCanvas.css';

const API_URL = 'http://localhost:5000/api/v1';

export class LeanCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.match.params.productID,
      guideFlag: true,
      board_texts: {
        txt1: { text: '', } ,
        txt2: { text: '', } ,
        txt3: { text: '', } ,
        txt4: { text: '', } ,
        txt5: { text: '', } ,
        txt6: { text: '', } ,
        txt7: { text: '', } ,
        txt8: { text: '', } ,
        txt9: { text: '', } ,
        txt10: { text: '', } ,
        txt11: { text: '', } ,
        txt12: { text: '', } ,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.getBoardTexts();
  }
  
  guideFlagChange() {
    this.setState({guideFlag: !this.state.guideFlag});
  }

  getBoardTexts() {
    fetch(API_URL + '/leancanvas/' + this.props.match.params.productID)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          board_texts: responseJson.board_texts,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  handleChange(e){
    const board_texts = this.state.board_texts;
    board_texts[e.target.id].text = e.target.value;
    this.setState({board_texts: board_texts});

    const obj = { board_texts: board_texts };
    const method = "PATCH";
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(API_URL+'/leancanvas/'+this.state.productID, {method, headers, body})
      .then((res)=> console.log(res.json()))
      .then(console.log)
      .catch(console.error);
  }

  render(){
    return(
      <div>
        { this.state.guideFlag && <GuideLeanCanvas onClick={() => this.guideFlagChange()} /> }
        <Header className='header' title='リーンキャンバス' />
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} />  
        <AllMenu className="allmenu-user" Lflag={true} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>
        <div className='lean'>
          <div className="kadai">      
            <div className="element">
              <div className="ename">
            <p>[1]課題</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                         サービスの対象のユーザーが抱えている課題、<br/>
         または解決すべき課題を複数個あげてください。<br/><br/>
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt1" value={this.state.board_texts.txt1.text} onChange={this.handleChange}/>
          </div>

          <div className="kizon">
            <div className="element">
              <div className="ename">
            <p>[2]既存の代替品</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt2" value={this.state.board_texts.txt2.text} onChange={this.handleChange}/>
          </div>

          <div className="solution">
            <div className="element">
              <div className="ename">
            <p>[7]ソリューション</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt3" value={this.state.board_texts.txt3.text} onChange={this.handleChange}/>
          </div>

          <div className="syuyou">
            <div className="element">
              <div className="ename">
            <p>[12]主要指標</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt4" value={this.state.board_texts.txt4.text} onChange={this.handleChange}/>
          </div>

          <div className="dokuzi">
            <div className="element">
              <div className="ename">
            <p>[5]独自の価値提案</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt5" value={this.state.board_texts.txt5.text} onChange={this.handleChange}/>
          </div>

          <div className="highlevel">
            <div className="element">
              <div className="ename">
            <p>[6]ハイレベルコンセプト</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt6" value={this.state.board_texts.txt6.text} onChange={this.handleChange}/>
          </div>

          <div className="attouteki">
            <div className="element">
              <div className="ename">
            <p>[11]圧倒的な優位性</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt7" value={this.state.board_texts.txt7.text} onChange={this.handleChange}/>
          </div>

          <div className="tyaneru">
            <div className="element">
              <div className="ename">
            <p>[8]チャネル</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>              
            <textarea className="write" id="txt8" value={this.state.board_texts.txt8.text} onChange={this.handleChange}/>
          </div>

          <div className="kokyaku">
            <div className="element">
              <div className="ename">
            <p>[3]顧客セグメント</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt9" value={this.state.board_texts.txt9.text} onChange={this.handleChange}/>
          </div>

          <div className="early">
            <div className="element">
              <div className="ename">
            <p>[4]アーリーアダプタ</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="write" id="txt10" value={this.state.board_texts.txt10.text} onChange={this.handleChange}/>
          </div>

          <div className="cost">
            <div className="element">
              <div className="ename">
            <p>[10]コスト構造</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
            <textarea className="writeL" id="txt11" value={this.state.board_texts.txt11.text} onChange={this.handleChange}/>
          </div>

          <div className="syueki">
            <div className="element">
              <div className="ename">
            <p>[10]収益の流れ</p>
            </div>
            <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                aaa
              </div>    
            </div>
            </div>    
          <textarea className="writeL" id="txt12" value={this.state.board_texts.txt12.text} onChange={this.handleChange}/>
        </div>
      </div>
    </div>
    )
  }
}
































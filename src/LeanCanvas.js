import React, { Component } from 'react';
import { Header } from './Header.js';
import { GuideLeanCanvas, ShowGuide, NextButton, BackButton, AllMenu } from './Guide.js';
import './LeanCanvas.css';


const API_URL = 'http://localhost:5000/api/v1';
const API_WS_URL = 'ws://localhost:5000/cable';

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
      ws: null,
      isChange: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getBoardTexts();
  }

  componentDidMount() {
    {/*
    const ws = new WebSocket(API_WS_URL);
    ws.onopen = () => {
      ws.send(
        JSON.stringify(
          {
            "command": "subscribe",
            "identifier":`{\"channel\":\"LeanCanvasChannel\", \"product_id\": \"${this.props.match.params.productID}\"}`,
          }
        )
      );
    };
    ws.onmessage = this.handleBoard.bind(this);
    this.setState({ws: ws});
    */}
  }

  componentWillMount() {
    const {cookies} = this.props;
    console.log(cookies.get("guide"));
    let guideFlag = cookies.get("guide");
    if(guideFlag==undefined) {
      cookies.set("guide", [0,0,0,0,0]);
    }
    else if (guideFlag[2]==1) {
      this.setState({guideFlag: false});
    }


  }

  handleBoard(event) {
    const data = JSON.parse(event.data);
    if ('message' in data) {
      if (this.state.isChange === false) {
        const messageData = JSON.parse(data.message);
        if (typeof(messageData) == 'object' && 'board_texts' in messageData) {
          if (messageData.product_id === this.state.productID) {
            this.setState({
              board_texts: messageData.board_texts,
            });
            console.log(messageData.board_texts);
          }
        }
      }
      this.setState({isChange: false});
    }
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
    this.setState({board_texts: board_texts, isChange: true});

    const obj = { board_texts: board_texts };
    const method = "PATCH";
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(API_URL+'/leancanvas/'+this.state.productID, {method, headers, body})
      .then((res)=> res.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch(console.error);
  }

  render(){
    return(
      <div>
        { this.state.guideFlag && <GuideLeanCanvas onClick={() => this.guideFlagChange()} /> }
        <Header className='header' title='Step1 : リーンキャンバス' />
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} />  
        <AllMenu className="allmenu-user" Lflag={true} TurlName={"/product/" + this.props.match.params.productID} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>
        <div className='lean'>
          <div className="kadai">      
            <div className="element">
              <div className="ename">
            <p>[1]課題</p>
            </div>
            <div className="kadaiGuide">
            <p>?</p>
              <div className="hidekadaiGuide">
                         サービスの対象の顧客が抱えている課題、<br/>
         または解決すべき課題を1~3個あげてください。<br/><br/>
          <p1 className="example">あなたが企画したサービスは、<br/>顧客の何を解決するために提案しましたか？<br/>
            </p1>
          
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="hidekadaiGuide">
                [1]で挙げた課題を解決するために顧客が現在<br/>
                行なっている具体的な対処をあげてください。<br/><br/>
                <p1 className="example">
                  顧客が課題解決のために使用していると考えられる<br/>
                  既存のアプリは何ですか？<br/><br />
                  課題ではあるが、顧客が解決する必要はない、   <br />
                  と考えている場合は「何もしない」が代替品となっても良い。
                  
            </p1>                
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="hidekadaiGuide">
                [1]であげた課題を解決するための方法を<br/>
                説明してください。<br/><br/>
           <p1 className="example">
            あなたが企画したサービスが提供できる機能は何ですか？<br /><br />
            [独自の価値提案]と内容が多少被ってもかまいません。<br />
            またそれぞれのソリューションの詳細に書き込む必要もありません。
            </p1> 
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="hidekadaiGuide">
                企画したサービスがどの程度発展したかを測ることができる指標をあげましょう。<br/><br/>
               <p1 className="example">
                  あなたが企画したサービスは何の数値が上がれば、成功と言えますか？ユーザー数や普及率でしょうか。
                </p1> 
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="hidekadaiGuide">
                企画しているサービスが顧客にとって<br/>
                興味を引くに値する固有の利点を<br/>
                挙げてください。<br/><br/>
              <p1 className="example">
              サービスがもたらす顧客の成功体験は<br />
              どんなものになりますか？<br /><br />
              固有の利点(他サービスとの差別化)は、[既存の代替品]<br />
              と比較して求めてみましょう。

              
              
            </p1> 
                               
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="hidekadaiGuide">
                企画しているサービスを、顧客に簡潔にサービスの<br/>概要を伝えるフレーズを挙げてください。<br/><br/>
              <p1 className="example">
              [5]の価値提案を簡潔に顧客に伝えるフレーズは何ですか？
            </p1> 
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="RhidekadaiGuide">
                他者が簡単に真似できない技術、ノウハウ、サービスなどを挙げてください。<br/><br/>
              <p1 className="example">
             「特殊な技術」や、「特定の人脈」「特定のビックデータ」など他者が真似しにくい要素を挙げてください。<br />
              思いつくのが難しい箇所であるため、最初は空欄でも構いません。<br />
              企画を進める中で考えましょう。
  
            </p1> 
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="RhidekadaiGuide">
                企画したサービスを顧客に知ってもらう経路を挙げてください。<br/><br/>
              <p1 className="example">
              テレビやネットの広告、SNSの口コミなど、企画しているサービスを周知させるために最適な経路は何ですか？
            </p1> 
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="RhidekadaiGuide">
                ターゲットとなる顧客を挙げてください。<br/><br/>
              <p1 className="example">
              あなたが企画したサービスを主に使用すると考えられる顧客はどんな人ですか？性別は、年齢は、趣味は、考え方は？
            </p1> 
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="RhidekadaiGuide">
                このサービスを最も早く利用するであろう顧客の特徴を挙げてください。<br/><br/>
              <p1 className="example">
              あなたが企画したサービスのリリースの情報を、いち早く知り得て、尚且つ興味を持って利用すると考えられる顧客は誰ですか？
            </p1> 
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
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="hidekadaiGuide">
                サービスを運用できるようになるまでの、コストを挙げてください。<br/><br/>
              <p1 className="example">
              サービスの開発費、人件費、広告費などはどのくらいになりますか？具体的な算出が難しいのであれば、コストとなり得る要素のみでも大丈夫です。
            </p1> 
              </div>    
            </div>
            </div>    
            <textarea className="writeL" id="txt11" value={this.state.board_texts.txt11.text} onChange={this.handleChange}/>
          </div>

          <div className="syueki">
            <div className="element">
              <div className="ename">
            <p>[9]収益の流れ</p>
            </div>
            <div className="kadaiGuide" >
            <p>?</p>
              <div className="RhidekadaiGuide">
                収益となる要素を挙げ、どの程度の収益になるか書き込んでください。<br/><br/>
              <p1 className="example">
              あなたが企画したサービスは、どのようにして利益を出すことができますか？課金、広告などですか？具体的な算出が難しいのであれば、要素のみでも大丈夫です。
            </p1> 
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



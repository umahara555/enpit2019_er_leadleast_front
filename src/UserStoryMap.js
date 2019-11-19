import React, { Component } from 'react';
import { Card, Card1, Card2 } from './Card.js';
import { GuideUserStoryMap, ShowGuide, NextButton, BackButton, AllMenu } from './Guide.js';
import { Header } from './Header.js';
import './UserStoryMap.css'

const API_URL = 'http://localhost:5000/api/v1';
const API_WS_URL = 'ws://localhost:5000/cable';

export class UserStoryMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.match.params.productID,
      guideFlag: true,
      board_texts: {
        group1: {
          txt1: { text: '', } ,
          txt2: { text: '', } ,
          txt3: { text: '', } ,
          txt4: { text: '', } ,
          txt5: { text: '', } ,
          txt6: { text: '', } ,
        },
        group2: {
          txt1: { text: '', } ,
          txt2: { text: '', } ,
          txt3: { text: '', } ,
          txt4: { text: '', } ,
          txt5: { text: '', } ,
          txt6: { text: '', } ,
        },
        group3: {
          txt1: { text: '', } ,
          txt2: { text: '', } ,
          txt3: { text: '', } ,
          txt4: { text: '', } ,
          txt5: { text: '', } ,
          txt6: { text: '', } ,
        },
        group4: {
          txt1: { text: '', } ,
          txt2: { text: '', } ,
          txt3: { text: '', } ,
          txt4: { text: '', } ,
          txt5: { text: '', } ,
          txt6: { text: '', } ,
        },
        group5: {
          txt1: { text: '', } ,
          txt2: { text: '', } ,
          txt3: { text: '', } ,
          txt4: { text: '', } ,
          txt5: { text: '', } ,
          txt6: { text: '', } ,
        },
        group6: {
          txt1: { text: '', } ,
          txt2: { text: '', } ,
          txt3: { text: '', } ,
          txt4: { text: '', } ,
          txt5: { text: '', } ,
          txt6: { text: '', } ,
        },
        group7: {
          txt1: { text: '', } ,
          txt2: { text: '', } ,
          txt3: { text: '', } ,
          txt4: { text: '', } ,
          txt5: { text: '', } ,
          txt6: { text: '', } ,
        },
        group8: {
          txt1: { text: '', } ,
          txt2: { text: '', } ,
          txt3: { text: '', } ,
          txt4: { text: '', } ,
          txt5: { text: '', } ,
          txt6: { text: '', } ,
        },
      },
      ws: null,
      isChange: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getBoardTexts();
  }

  componentDidMount() {
    const ws = new WebSocket(API_WS_URL);
    ws.onopen = () => {
      ws.send(
        JSON.stringify(
          {"command": "subscribe",
            "identifier":"{\"channel\":\"UserStoryMapChannel\"}"}
        )
      );
    };
    ws.onmessage = this.handleBoard.bind(this);
    this.setState({ws: ws});
  }

  componentWillUnmount() {
    this.state.ws.close();
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

  getBoardTexts() {
    fetch(API_URL + '/user_story_map/' + this.props.match.params.productID)
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

  handleChange(state){
    const board_texts = this.state.board_texts;
    const key = state.id.split('_');
    board_texts[key[0]][key[1]].text = state.value;
    this.setState({board_texts: board_texts, isChange: true});

    const obj = { board_texts: board_texts };
    const method = "PATCH";
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(API_URL+'/user_story_map/'+this.state.productID, {method, headers, body})
      .then((res)=> res.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch(console.error);
  }

  guideFlagChange() {
      this.setState({guideFlag: !this.state.guideFlag});
  }

  render() {
    const boardCards = Object.keys(this.state.board_texts).map((key) => {
      return Object.keys(this.state.board_texts[key]).map((txt) => {
        // TODO : Card側のモード設定で色を変更するようにする
        if (key === 'group1') {
          return <Card key={key+'_'+txt}
                       id={key+'_'+txt}
                       value={this.state.board_texts[key][txt].text}
                       updateState={this.handleChange}
                       color='red'
          />;
        } else if (key === 'group2') {
          return <Card1 key={key+'_'+txt}
                       id={key+'_'+txt}
                       value={this.state.board_texts[key][txt].text}
                       updateState={this.handleChange}
          />;
        } else {
          return <Card2 key={key+'_'+txt}
                       id={key+'_'+txt}
                       value={this.state.board_texts[key][txt].text}
                       updateState={this.handleChange}
          />;
        }
      });
    });

    return(
      <div className="App">
        { this.state.guideFlag && <GuideUserStoryMap onClick={() => this.guideFlagChange()} /> }      
        <Header className="header" title={'ユーザーストーリーマップ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName={"/product/" + this.props.match.params.productID + "/productbacklog"} />
        <BackButton urlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} />         
        <AllMenu className="allmenu-user" Uflag={true}  TurlName={"/product/" + this.props.match.params.productID} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>        
        {/*TODO : ループでまわせそうなところはループでやる*/}
        <div className="board">
          <div className="split" />
          			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                ユーザーストーリーの骨格を書きましょう
              </div>    
              </div>
          <div className="boardCard">
            {boardCards[0]}
          </div>
          
          			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                         ユーザーストーリーの流れを書きましょう<br/>
              </div>    
              </div>
          <div className="boardCard1">
            {boardCards[1]}
          </div>
          			 <div className="kadaiGuide" title="aaa">
            ?
              <div className="hidekadaiGuide">
                         ユーザーストーリーの詳細を書きましょう
              </div>    
              </div>
          <div className="boardCard2-0">
            <div className="boardCard2">
              {boardCards[2]}
            </div>
            <div className="boardCard2-1">
              {boardCards[3]}
            </div>
            <div className="boardCard2-1">
              {boardCards[4]}
            </div>
            <div className="boardCard2-1">
              {boardCards[5]}
            </div>
            <div className="boardCard2-1">
              {boardCards[6]}
            </div>
            <div className="boardCard2-1">
              {boardCards[7]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

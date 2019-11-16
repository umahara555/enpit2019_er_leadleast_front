import React, { Component } from 'react';
import { Card, CardAddButton, Card1, Card2 } from './Card.js';
import { GuideUserStoryMap, ShowGuide, NextButton, BackButton, AllMenu } from './Guide.js';
import { Header } from './Header.js';
import { MoveHomeButton } from './Guide.js';
import './UserStoryMap.css'

const API_URL = 'http://localhost:5000/api/v1';
// const SET_API_URL = API_URL + '/handcards';
// const GET_API_URL = API_URL + '/handcards';

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
      // boardCards: ["1","2","3","4","5","6"],
      // boardCards1: ["1","2","3","4","5","6"],
      // boardCards2:["1","2","3","4","5","6","7","8","9","10"],
    };
    // this.fetchData();
    this.handleChange = this.handleChange.bind(this);
    this.getBoardTexts();
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
    this.setState({board_texts: board_texts});

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

  /*handleClick() {
    const cards = this.state.handCards;
    const id = Math.round( Math.random () * 10000000 );
    cards.unshift({id: id, text: ""});
    this.setState({handCards: cards});
  }*/

  /*fetchData() {
    fetch(GET_API_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          boardCards: responseJson.card_data
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }*/

  /*
  sendData(text) {
    const obj = {board: {"text": text}};
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(SET_API_URL, {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);
  }
  */

  /*handleUpToBoard(id) {
    const handCards = this.state.handCards;
    const handCard = handCards.find(card => card.id === id);
    const handCardIndex = handCards.findIndex(card => card.id === id);
    handCards.splice(handCardIndex, 1);
    this.setState({handCards: handCards});

    const SendAndDownload = async () => {
      try {
        // PSOT Card Data
        const obj = {board: {"text": handCard.text}};
        const method = "POST";
        const body = JSON.stringify(obj);
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };
        const postResponse = await fetch(SET_API_URL, {method, headers, body})
        if (!postResponse.ok) {
          throw Error(postResponse.statusText)
        }
        const postResponseJson = await postResponse.json()

        // GET Board Data
        const getResponse = await fetch(GET_API_URL)
        if (!getResponse.ok) {
          throw Error(getResponse.statusText)
        }
        const getResponseJson = await getResponse.json()
        this.setState({
          boardCards: getResponseJson.card_data,
        });
      } catch (error) {
        console.log(error)
      }
    }
    SendAndDownload()
  }*/

  /*handleDownToHand(id) {
    const boardCards = this.state.boardCards;
    const boardCard = boardCards.find(card => card.id === id);
    const boardCardIndex = boardCards.findIndex(card => card.id === id);
    boardCards.splice(boardCardIndex, 1);
	var result = "";
    const delete_url = `${GET_API_URL}?id=${boardCard.id}`;
    const method = "DELETE";
    fetch(delete_url, {method})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.status);
        this.setState({boardCards: boardCards});
        if(responseJson.status=="SUCCESS"){
	      console.log("OK");
          const handCards = this.state.handCards;
          handCards.unshift(boardCard);
          this.setState({handCards: handCards});
	    }else{
	      console.log("BAD");
	    }
      })
      .catch((error) =>{
        console.error(error);
      });

  }*/

/*  handleDeleteCard(id) {
      const handCards = this.state.handCards;
      const handCardIndex = handCards.findIndex(card => card.id === id);

      const boardCards = this.state.boardCards;
      const boardCardIndex = boardCards.findIndex(card => card.id === id);

      if(handCardIndex !== -1 ){
        handCards.splice(handCardIndex, 1);
        this.setState({handCards: handCards});
      }else if (boardCardIndex !== -1) {
        boardCards.splice(boardCardIndex, 1);
        this.setState({boardCards: boardCards});
      }
  }*/

 /* updateState(state){
      const handCards = this.state.handCards;
      const handCardIndex = handCards.findIndex(card => card.id === state.id);

      const boardCards = this.state.boardCards;
      const boardCardIndex = boardCards.findIndex(card => card.id === state.id);

      if(handCardIndex !== -1 ){
        handCards[handCardIndex].text = state.text;
        this.setState({handCards: handCards});
      }else if (boardCardIndex !== -1) {
        boardCards[boardCardIndex].text = state.text;
        this.setState({boardCards: boardCards});
      }
  }*/

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
        <Header className="header" title={'ユーザーストーリーマップ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName={"/product/" + this.props.match.params.productID + "/productbacklog"} />
        {/*TODO : ループでまわせそうなところはループでやる*/}
        <div className="board">
          <div className="split" />
          <div className="boardCard">
            {boardCards[0]}
          </div>
          <div className="boardCard1">
            {boardCards[1]}
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

  /*render() {
    const boardCards = this.state.boardCards.map((cardInfo) => (
      <Card />
    ));

    const boardCards1 = this.state.boardCards1.map((cardInfo) => (
      <Card1 />
    ));

    const boardCards2 = this.state.boardCards2.map((cardInfo) => (
      <Card2 />
    ));


    return(
    <div>
      { this.state.guideFlag && <GuideUserStoryMap onClick={() => this.guideFlagChange()} /> }
      <div className="App">
        <Header className="header" title={'ユーザーストーリーマップ'}/>
        <ShowGuide  onClick={() => this.guideFlagChange()} />
        <NextButton urlName={"/product/" + this.props.match.params.productID + "/productbacklog"} />          
        <BackButton urlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} />         
        <AllMenu className="allmenu-user" Uflag={true} LurlName={"/product/" + this.props.match.params.productID + "/leancanvas"} EurlName={"/product/" + this.props.match.params.productID + "/elevatorpitch"} UurlName={"/product/" + this.props.match.params.productID + "/userstorymap"} PurlName={"/product/" + this.props.match.params.productID + "/productbacklog"}/>
             
        <div className="board">
        <div className="split" />
        <div className="boardCard">
          {boardCards}
        </div>
        <div className="boardCard1">
          {boardCards1}
          </div>
          <div className="boardCard2-0">
          <div className="boardCard2">
          {boardCards2}
          </div>
          <div className="boardCard2-1">
          {boardCards2}
          </div>
          <div className="boardCard2-1">
          {boardCards2}
          </div>
          <div className="boardCard2-1">
          {boardCards2}
          </div>
          <div className="boardCard2-1">
          {boardCards2}
          </div>
          <div className="boardCard2-1">
          {boardCards2}
          </div>
          </div>
        </div>
         {/!*<button onClick={() => this.fetchData()}>reload</button>*!/}
        {/!*<div className="memo"></div>*!/}
      </div>
   </div>
    );
  }*/
}

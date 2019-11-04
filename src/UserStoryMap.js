import React, {Component} from 'react';
import {Card, CardAddButton, Card1, Card2} from './Card.js';
import {TipsUserStoryMap,ShowTips} from './tips.js'
import {Header} from './Header.js'
import {Link} from 'react-router-dom';
import './UserStoryMap.css';
import {MoveHomeButton} from './tips.js'



const API_URL = 'http://localhost5000/api/v1'
const SET_API_URL = API_URL + '/handcards';
const GET_API_URL = API_URL + '/handcards';

export class UserStoryMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipsFlag: true,
      boardCards: ["1","2","3","4","5","6"],
      boardCards1: ["1","2","3","4","5","6"],
      boardCards2:["1","2","3","4","5","6","7"],
    };
    this.fetchData();
  }

  handleClick() {
    const cards = this.state.handCards;
    const id = Math.round( Math.random () * 10000000 );
    cards.unshift({id: id, text: ""});
    this.setState({handCards: cards});
  }

  fetchData() {
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
  }

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

  handleUpToBoard(id) {
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
  }

  handleDownToHand(id) {
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

  }

  handleDeleteCard(id) {
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
  }

  updateState(state){
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
  }

  tipsFlagChange() {
      this.setState({tipsFlag: !this.state.tipsFlag});
  }

  render() {
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
      { this.state.tipsFlag && <TipsUserStoryMap onClick={() => this.tipsFlagChange()} /> }
      <div className="App">
        <Header className="header" title={'ユーザーストーリーマップ'}/>
        <ShowTips  onClick={() => this.tipsFlagChange()} />
        <MoveHomeButton />
        <Link to="/productbacklog" className="Usnext">
            <p>→</p>
        </Link>
        <div className="board">
        <div className="split" />
          {boardCards}
          {boardCards1}
          {boardCards2}
          {boardCards2}
          {boardCards2}
        </div>
        <button onClick={() => this.fetchData()}>reload</button>
        {/*<div className="memo"></div>*/}
      </div>
   </div>
    );
  }
}

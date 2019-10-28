import React, {Component} from 'react';
import {Card, CardAddButton} from './Card.js';
import {TipsUserStoryMap,ShowTips} from './tips.js'
import './UserStoryMap.css';
import {Header} from './Header.js'
import { Link } from 'react-router-dom';


const API_URL = 'http://localhost:5000/api/v1'
const SET_API_URL = API_URL + '/handcards';
const GET_API_URL = API_URL + '/handcards';

export class UserStoryMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStatus: '',
      cardMessage: '',
      tipsFlag: true,
      handCards: [],
      boardCards: [],
    };
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
          cardStatus: responseJson.status,
          cardMessage: responseJson.card_data,
		  boardCards: responseJson.card_data
        });
        console.log(responseJson.card_data);
      })
      .catch((error) =>{
        console.error(error);
      });
  }

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

  deleteData(id) {
    const delete_url = `${GET_API_URL}?id=${id}`;
    const method = "DELETE";
    fetch(delete_url, {method})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.status);
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  handleUpToBoard(id) {
    const handCards = this.state.handCards;
    const handCard = handCards.find(card => card.id === id);
    const handCardIndex = handCards.findIndex(card => card.id === id);
    handCards.splice(handCardIndex, 1);
    this.setState({handCards: handCards});

	this.sendData(handCard.text)
  }

  handleDownToHand(id) {
    const boardCards = this.state.boardCards;
    const boardCard = boardCards.find(card => card.id === id);
    const boardCardIndex = boardCards.findIndex(card => card.id === id);
    boardCards.splice(boardCardIndex, 1);
    this.setState({boardCards: boardCards});

    const handCards = this.state.handCards;
    handCards.unshift(boardCard);
    this.setState({handCards: handCards});
    this.deleteData(boardCard.id)
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
    const handCards = this.state.handCards.map((cardInfo) => (
      <Card key={cardInfo.id}
            value={cardInfo}
            onClick={this.handleUpToBoard.bind(this, cardInfo.id)}
            onDeleteButtonClick={this.handleDeleteCard.bind(this, cardInfo.id)}
            updateState={this.updateState.bind(this)}
            isEditMode={true}
      />
    ));

    const boardCards = this.state.boardCards.map((cardInfo) => (
      <Card key={cardInfo.id}
            value={cardInfo}
            onClick={this.handleDownToHand.bind(this, cardInfo.id)}
            onDeleteButtonClick={this.handleDeleteCard.bind(this, cardInfo.id)}
            updateState={this.updateState.bind(this)}
            isEditMode={false}
      />
    ));

    return(
    <div>
      { this.state.tipsFlag && <TipsUserStoryMap onClick={() => this.tipsFlagChange()} /> }
      <div className="App">
        <Header className="header" title={'ホワイトボード：付箋に欲しい機能を書き出そう'}/>
        <ShowTips  onClick={() => this.tipsFlagChange()} />

        <div className="board">
          {boardCards}

        </div>
        <button onClick={() => this.fetchData()}>reload</button>
        {/*<div className="memo"></div>*/}
        <div className="hand">
          <Link to="/" className="link">
            <h1>・Homeへ</h1>
          </Link>
          <CardAddButton onClick={() => this.handleClick()}/>
          {handCards}
        </div>
      </div>
   </div>
    );
  }
}

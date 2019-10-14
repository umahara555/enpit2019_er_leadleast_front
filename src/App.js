import React, {Component} from 'react';
import {Card, CardAddButton} from './Card.js';
import './App.css';

const API_URL = 'http://localhost:8000/api/v1/hello';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hStatus: '',
      hMessage: '',
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

  handleUpToBoard(id) {
    const handCards = this.state.handCards;
    const handCard = handCards.find(card => card.id === id);
    const handCardIndex = handCards.findIndex(card => card.id === id);
    handCards.splice(handCardIndex, 1);
    this.setState({handCards: handCards});

    const boardCards = this.state.boardCards;
    boardCards.unshift(handCard);
    this.setState({boardCards: boardCards});
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
      handCards[handCardIndex].text = state.text;
      this.setState({handCards: handCards});
  }

  componentDidMount(){
    return fetch(API_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          hStatus: responseJson.status,
          hMessage: responseJson.message,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    const handCards = this.state.handCards.map((cardInfo) => (
      <Card key={cardInfo.id}
            value={cardInfo}
            onClick={this.handleUpToBoard.bind(this, cardInfo.id)}
            onDeleteButtonClick={this.handleDeleteCard.bind(this, cardInfo.id)}
            updateState={this.updateState.bind(this)}
      />
    ));

    const boardCards = this.state.boardCards.map((cardInfo) => (
      <Card key={cardInfo.id}
            value={cardInfo}
            onClick={this.handleDownToHand.bind(this, cardInfo.id)}
            onDeleteButtonClick={this.handleDeleteCard.bind(this, cardInfo.id)}
            updateState={this.updateState.bind(this)}
      />
    ));

    return(
      <div className="App">
        <div className="header">
          <p>ホワイトボード</p>
        </div>
        <div className="nav">
          <p>付箋に欲しい機能を書き起こそう！</p>
        </div>
        <div className="board">
          {boardCards}
        </div>
        <div className="memo"></div>
        <div className="hand">
          <CardAddButton onClick={() => this.handleClick()}/>
          {handCards}
        </div>
      </div>
    );
  }
}

export default App;

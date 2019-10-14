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
    const key = Math.round( Math.random () * 10000000 );
    cards.unshift(<Card key={key}/>);
    // cards.unshift(<Card key={key} onClick={this.handleUpToBoard.bind(this, key)} updateState={this.updateState.bind(this)}/>);
    this.setState({handCards: cards});
  }

  // handleUpToBoard(key) {
  //   const handCards = this.state.handCards;
  //   const handCard = handCards.find(card => card.key == key);
  //   const handCardIndex = handCards.findIndex(card => card.key == key);
  //   handCards.splice(handCardIndex, 1);
  //
  //   console.log(handCard);
  //
  //   const boardCards = this.state.boardCards;
  //   boardCards.push(handCard);
  //   this.setState({boardCards: boardCards});
  //
  // }
  //
  // updateState(state){
  //     console.log(state);
  // }

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
    return(
      <div className="App">
        <div className="header">
          <p>ホワイトボード</p>
        </div>
        <div className="nav">
          <p>付箋に欲しい機能を書き起こそう！</p>
        </div>
        <div className="board">
        {this.state.boardCards.map((value) => {
          return value;
        })}
        </div>
        <div className="memo"></div>
        <div className="hand">
          <CardAddButton onClick={() => this.handleClick()}/>
          {this.state.handCards.map((value) => {
            return value;
          })}
        </div>
      </div>
    );
  }
}

export default App;

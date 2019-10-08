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
      cards: [],
    };
  }

  handleClick() {
    const cards = this.state.cards;
    // cards.push(<Card key={cards.length}/>);
    if (cards.length == 0) {

    }

    cards.unshift(<Card key={cards.length}/>);
    this.setState({cards: cards});
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
    return(
      <div className="App">
        <div className="header">
          <p>付箋に欲しい機能を書き起こそう！</p>
        </div>
        <div className="board">
          <CardAddButton onClick={() => this.handleClick()}/>
          {this.state.cards.map((value) => {
            return value;
          })}
        </div>
      </div>
    );
  }
}

export default App;

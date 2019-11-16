import React, {Component} from 'react';
import './Card.css';

export class CardAddButton extends Component {
  render() {
    return(
    <div>
      <button
        className="card-add-button"
        onClick={() => this.props.onClick()}
      >
        ＋ 付箋を追加
      </button>
      </div>
    );
  }
}

export class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: this.props.id,
      value: this.props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const state = this.state;
    state.value = e.target.value;
    this.setState(state);
    this.props.updateState(state);
  }

  render() {
    const upButton = (
      <button
        className="upButton"
        onClick={() => this.props.onClick()}
      >↑</button>
    );
    
    const downButton = (
      <button
        className="downButton"
        onClick={() => this.props.onClick()}
      >↓</button>
    );

    const deleteButton = (
      <button
        className="deleteButton"
        onClick={() => this.props.onDeleteButtonClick()}
      >x</button>
    );

    return(
      <div>
        <div className="card">

          <textarea onChange={this.handleChange}
                    value={this.props.value}
                    placeholder="ここにアイディア"

          />
        </div>
      </div>
    );
  }
}


export class Card1 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: this.props.id,
      value: this.props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const state = this.state;
    state.value = e.target.value;
    this.setState(state);
    this.props.updateState(state);
  }

  render() {
    const upButton = (
      <button
        className="upButton"
        onClick={() => this.props.onClick()}
      >↑</button>
    );

    const downButton = (
      <button
        className="downButton"
        onClick={() => this.props.onClick()}
      >↓</button>
    );

    const deleteButton = (
      <button
        className="deleteButton"
        onClick={() => this.props.onDeleteButtonClick()}
      >x</button>
    );

    return(
      <div>
        <div className="card1">

          <textarea onChange={this.handleChange}
                    value={this.props.value}
                    placeholder="ここにアイディア"

          />
        </div>
      </div>
    );
  }
}

export class Card2 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: this.props.id,
      value: this.props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const state = this.state;
    state.value = e.target.value;
    this.setState(state);
    this.props.updateState(state);
  }

  render() {
    const upButton = (
      <button
        className="upButton"
        onClick={() => this.props.onClick()}
      >↑</button>
    );

    const downButton = (
      <button
        className="downButton"
        onClick={() => this.props.onClick()}
      >↓</button>
    );

    const deleteButton = (
      <button
        className="deleteButton"
        onClick={() => this.props.onDeleteButtonClick()}
      >x</button>
    );

    return(
      <div>
        <div className="card2">

          <textarea onChange={this.handleChange}
                    value={this.props.value}
                    placeholder="ここにアイディア"

          />
        </div>
      </div>
    );
  }
}


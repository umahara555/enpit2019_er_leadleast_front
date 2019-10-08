import React, {Component} from 'react';
import './Card.css';

export class CardAddButton extends Component {
  render() {
    return(
      <button
        className="card-add-button"
        onClick={() => this.props.onClick()}
      >
        ＋ 付箋を追加
      </button>
    );
  }
}

export class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  render() {
    return(
      <div className="card">
        <textarea onChange={this.handleChange} placeholder="ここにアイディア"></textarea>
      </div>
    );
  }
}

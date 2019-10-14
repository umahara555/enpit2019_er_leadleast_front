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
    super(props)
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({value: e.target.value});
    this.props.updateState(this.state);
  }

  render() {
    return(
      <div>
        <div className="card">
          {/*<button
            className="upButton"
            onClick={() => this.props.onClick()}
          >↑</button>*/}
          <textarea onChange={this.handleChange} placeholder="ここにアイディア" />
        </div>
      </div>
    );
  }
}

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
      id: this.props.value.id,
      text: this.props.value.text,
      isEditMode: true,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const state = this.state;
    state.text = e.target.value;
    this.setState(state);
    this.props.updateState(state);
  }

  render() {
    const moveButton = (
      <button
        className="upButton"
        onClick={() => this.props.onClick()}
      >↑</button>
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
          {this.state.isEditMode && moveButton}
          {this.state.isEditMode && deleteButton}
          <textarea onChange={this.handleChange}
                    placeholder="ここにアイディア"
                    value={this.state.text}
                    readOnly={!this.state.isEditMode}
          />
        </div>
      </div>
    );
  }
}

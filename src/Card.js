import React, {Component} from 'react';
import './Card.css';
import Draggable from 'react-draggable';


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

export class Waku extends Component {
  render() {
    return(
    <div>
          <div className="wakuF" />    
          <div className="wakuS" />    
          <div className="waku" />    
          <div className="waku" />    
          <div className="waku" />    
          <div className="waku" />    
          <div className="waku" />    
      </div>
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
    <div>
              <Draggable
        handle=".focusicon"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[10, 10]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>

      <div className="card">
     <div className="focusicon"></div>
        <textarea onChange={this.handleChange} placeholder="ここにアイディア" />
      </div>
            </Draggable>

      </div>
    );
  }
}

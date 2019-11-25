import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Hooder.css';

export class Hooder extends Component {
  render(){
    return(
      <div className="Hooder-container-wrapper">
        <div className='Hooder-container'>
          <div className='box'>
            <div className="hooder">
              <Link to="/" className="hooder-home-btn">
                <p>LeadLeast</p>
              </Link>
              <p>{this.props.title}</p>
            </div>
            これはHooderです。
          </div>
        </div>
      </div>
    )
  }
}

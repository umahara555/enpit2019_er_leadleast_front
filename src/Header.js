import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export class Header extends Component {
  render(){
    return(
      <div className="header">
        <Link to="/" className="header-home-btn">
          <p>LeadLeast</p>
        </Link>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

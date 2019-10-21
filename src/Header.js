import React, {Component} from 'react';
import './Header.css';

export class Header extends Component {
  render(){
  	return(
	    <div className="header">
		    <p>{this.props.title}</p>
        </div>
    )
  }
}
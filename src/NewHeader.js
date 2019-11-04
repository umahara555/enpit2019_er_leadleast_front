import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewHeader.css';

export class NewHeader extends Component {
  render(){
    return(
      <div className="new-header">
        <div className="header-left">
          <Link to="/" className="header-btn">
            <i className="material-icons-outlined header-icon">home</i>
          </Link>
        </div>
        <div className="header-center">
          <Link to="/" className="header-title">
            <p>Lead Least</p>
          </Link>
        </div>
        { (() => {
          if (this.props.isLoggedin) {
            return (
              <div className="header-right">
                <button className="header-btn">
                  <i className="material-icons header-icon">help_outline</i>
                </button>
                <button className="header-btn">
                  <i className="material-icons-outlined header-icon">account_circle</i>
                </button>
              </div>
            );
          } else {
            return (
              <div className="header-right">
                <button className="header-btn header-btn_login">ログイン</button>
                <button className="header-btn header-btn_signup">ユーザー登録</button>
              </div>
            );
          }
        })() }
      </div>
    )
  }
}

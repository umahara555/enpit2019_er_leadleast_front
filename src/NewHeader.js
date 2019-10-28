import React, { Component } from 'react';
import './NewHeader.css';

export class NewHeader extends Component {
  render(){
    return(
      <div className="new-header">
        <div className="header-left">
          <button className="header-btn">
            <i className="material-icons header-icon">menu</i>
          </button>
        </div>
        <div className="header-center">
          <p className="header-title">LL</p>
        </div>
        { (() => {
          if (this.props.isLoggedin) {
            return (
              <div className="header-right">
                <button className="header-btn">
                  <i className="material-icons header-icon">help_outline</i>
                </button>
                <button className="header-btn">
                  <i className="material-icons header-icon">account_circle</i>
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

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Hooder.css';

export class Hooder extends Component {
  render(){
    return(
      <div className="Hooder-container-wrapper">
        <div className='Hooder-container'>
          <div className='title_box'>
            <div className="hooder">
              <h1>LeadLeast</h1>
              <p>
                LeadLeastはプロダクト支援ツールです <br/>
                学びながら取り組むことができ <br/>
                実際の付箋感覚で操作できる機能を備えています
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

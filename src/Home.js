import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header.js';
import './Home.css';

const API_URL = 'http://localhost:5000/api/v1';

export class Home extends Component {
  constructor(props){
      super(props);
	  this.state = {
	  	product_id: "",
	  };
   this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const CreateNewProduct = async function(){
	  let product_id = ""
      try {
        let method = "POST";
        let postResponse = await fetch(API_URL+'/products', {method})
        if (!postResponse.ok) {
          throw Error(postResponse.statusText)
        }
        let postResponseJson = await postResponse.json()
		product_id = postResponseJson.product_id
		console.log(product_id)

        method = "POST";
        postResponse = await fetch(API_URL+'/leancanvas/'+product_id, {method})
        if (!postResponse.ok) {
          throw Error(postResponse.statusText)
        }
        postResponseJson = await postResponse.json()
      } catch (error) {
        console.log(error)
      }
		
	  console.log(product_id)
      this.props.history.push("/product/"+product_id+"/leancanvas");
	}.bind(this)
	CreateNewProduct()
  }
  
  render(){
    return(
      <div>
        <Header className='header' title={'LeadLeast'} />
        <div className='home'>
          <div className='terget'>
       	    <h1>LeadLeast</h1>
            <p>- Begin Product Design -</p>
            <br />
              <button
              className='Button'
               onClick={this.handleClick}>
               はじめる
                               </button>
          </div>
        </div>
        <div className='link'>
          <Link to="/product/0/leancanvas" className="serviseLink">
            <p>リーンキャンバスへ</p>
          </Link>          	  
          <Link to="/product/0/elevatorpitch" className="serviseLink">
            <p>エレベーターピッチへ</p>
          </Link>
       	  <Link to="/product/0/userstorymap" className="serviseLink">
            <p>ユーザーストーリーマップへ</p>
          </Link>
          <Link to="/product/0/productbacklog" className="serviseLink">
            <p>プロダクトバックログへ</p>
          </Link>
        </div>
      </div>
    )
  }  
}

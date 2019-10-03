import React, {Component} from 'react';
import './App.css';

const API_URL = 'http://localhost:8000/api/v1/hello';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hStatus: '',
      hMessage: ''
    };
  }

  componentDidMount(){
    return fetch(API_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          hStatus: responseJson.status,
          hMessage: responseJson.message,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return(
      <div>
        <p>Status: {this.state.hStatus}</p>
        <p>Message: {this.state.hMessage}</p>
      </div>
    );
  }
}

export default App;

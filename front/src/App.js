import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null,
    };
  }

  render() {
    const getDataFromServer = async () => {
      const response = await fetch('http://localhost:3000/greeting');
      const text = await response.text();
      this.setState({
          response: text
      });
    };

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Hackathon!
            </h1>
            <button
                onClick={getDataFromServer} className="send-button">Press me!</button>
            <h2>Data from server:</h2>
            {this.state.response || '- no data -'}
          </header>
        </div>
    );
  }
}

export default App;

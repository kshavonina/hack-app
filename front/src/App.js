import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response1: null,
      response2: null,
    };
  }

  render() {
    const requestToGreeting = async () => {
      const response = await fetch('http://localhost:3000/greeting');
      const text = await response.text();
      this.setState({
        response1: text
      });
    };

    const requestToUser = async () => {
        const objectToSend = {
            name: 'Admin',
            age: 45,
        };
      const response = await fetch('http://localhost:3000/addUser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(objectToSend),
      });
      const text = await response.text();
      this.setState({
        response2: text,
      });
    };

    return (
        <div className="App">
          <header className="App-header">
              <div className="logo-wrapper">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                  Hackathon!
                </h1>
              </div>
              <div className="data-block">
                <button onClick={requestToGreeting} className="send-button">Press me!</button>
                <h2>Data from server:</h2>
                {this.state.response1 || '- no data -'}
              </div>
              <div className="data-block">
                <button onClick={requestToUser} className="send-button">Press me too!</button>
                <h2>Data from server:</h2>
                {this.state.response2 || '- no data -'}
              </div>
          </header>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        defaultText: "default text",
        inputValue: "",
        labelText: ""
    }
  }

  handleValueChange = (event) => {

      let inputValue = event.target.value;
      console.log(`Change... ${inputValue}`)
      this.setState({
          labelText: inputValue
      });
  }


  render() {
    return (

      <div className="App">
          <p />
          <input placeholder={this.state.defaultText} type="text" onChange={this.handleValueChange} />
          <div>{this.state.labelText}</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import person from "./file2";

const { firstName: fName, email } = person;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello Jesper</p>
          <p>{upper(text1)}</p>
          <p>{upper(text2)}</p>
          <p>{upper(text3)}</p>
          <p>
            {fName} - {email}
          </p>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Clock extends React.Component {
  constructor(props) {
    console.log("Constructor was called");
    super(props);
    this.state = { date: new Date() };
  }

  componentWillMount() {
    console.log("ComponentDidMount was called");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate was called");
  }
  componentDidCatch() {
    console.log("componentDidCatch was called");
  }
  shouldComponentUpdate() {
    console.log("");
  }

  componentDidMount() {
    console.log("componentDidMount was called");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componenetWillUnmount was called");
    clearInterval(this.timerID);
  }

  tick() {
    console.log("Tick was called");
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log("Render was called");
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.msg}</h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </header>
      </div>
    );
  }
}

export default Clock;

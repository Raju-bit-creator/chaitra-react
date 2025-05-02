import React, { Component } from "react";

export default class Class extends Component {
  // component initialization
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // mounting phase
  componentDidMount() {
    console.log("component did mount: component has mounted");
  }

  // updating phase
  componentDidUpdate() {
    console.log("component did update: component update");
  }
  //unmounting phase
  componentWillUnmount() {
    console.log("component will unmount: component unmount ");
  }
  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 5 })}>
          {" "}
          click Me
        </button>
      </div>
    );
  }
}

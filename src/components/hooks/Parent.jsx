import React, { Component } from "react";
import Counter from "./Counter";
class Parent extends Component {
  //   constructor(props) {
  //     super();
  //     this.state = { counter_title: "I am the counter" };
  //     this.testRef = createRef();
  //   }
  state = { counter_title: "I am the counter" };
  testRef = React.createRef();
  render() {
    return (
      <div>
        <Counter title={this.state.counter_title} />
      </div>
    );
  }
}

export default Parent;

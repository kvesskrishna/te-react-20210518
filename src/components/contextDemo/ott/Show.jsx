import React, { Component } from "react";
import ShowsContext from "./ShowsContext";

class Show extends Component {
  render() {
    return (
      <ShowsContext.Consumer>
        {(context) => {
          //   const viewCondition = this.props.show.free;
          const viewCondition = this.props.show.free || context.loggedIn;

          return (
            <div>{viewCondition ? <h2>{this.props.show.title}</h2> : ""}</div>
          );
        }}
      </ShowsContext.Consumer>
    );
  }
}

export default Show;

import React, { Component } from "react";
import Show from "./Show";
import ShowsContext from "./ShowsContext";
class Shows extends Component {
  render() {
    return (
      <ShowsContext.Consumer>
        {(context) => (
          <div>
            {
              // console.log(value);
              context.shows.map((show) => (
                <Show key={show.id} show={show} />
              ))
            }
          </div>
        )}
      </ShowsContext.Consumer>
    );
  }
}

export default Shows;

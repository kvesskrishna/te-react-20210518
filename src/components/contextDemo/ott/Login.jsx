import React, { Component } from "react";
import ShowsContext from "./ShowsContext";

class Login extends Component {
  state = { uname: "", password: "" };
  unameRef = React.createRef();
  pwdRef = React.createRef();
  updateCredentials = () => {
    this.setState({
      uname: this.unameRef.current.value,
      password: this.pwdRef.current.value,
    });
  };
  render() {
    return (
      <ShowsContext.Consumer>
        {(context) => {
          return context.loggedIn ? (
            <h3>
              <a href="#" onClick={() => context.loginHandler("logout")}>
                Logout
              </a>
            </h3>
          ) : (
            <div>
              <div>
                <label htmlFor="">Uname</label>
                <br />
                <input
                  type="text"
                  name="uname"
                  onChange={this.updateCredentials}
                  ref={this.unameRef}
                />
                <br />
                <label htmlFor="">Pwld</label>
                <br />
                <input
                  name="password"
                  onChange={this.updateCredentials}
                  type="password"
                  ref={this.pwdRef}
                />
                <button
                  onClick={() =>
                    context.loginHandler(
                      "login",
                      this.state.uname,
                      this.state.password
                    )
                  }
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          );
        }}
      </ShowsContext.Consumer>
    );
  }
}

export default Login;

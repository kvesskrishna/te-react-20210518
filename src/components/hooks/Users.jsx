import React, { Component } from "react";
import axios from "axios";
import EffectDemo from "./EffectDemo";

class Users extends Component {
  state = { users: [] };
  componentDidMount() {
    console.log("...cdm called");
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        console.log(res.data);
        this.setState({ users: [...res.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log("...render called");

    return (
      <div>
        <EffectDemo />
        {/* <table>
          {this.state.users.map((user, index) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table> */}
      </div>
    );
  }
}

export default Users;

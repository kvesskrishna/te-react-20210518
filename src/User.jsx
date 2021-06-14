import axios from "axios";
import React, { useState, useEffect } from "react";

const User = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users/" + props.match.params.id
      )
      .then((res) => {
        console.log(res.data);
        setUser({ ...res.data });
      })
      .catch((err) => {
        alert(err);
      });
  });
  console.log(props);
  return (
    <div>
      <h2>
        {" "}
        {props.match.params.id} User info
        <p>{user.name}</p>
      </h2>
    </div>
  );
};

export default User;

import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectDemo = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const print = () => {
    console.log("print called");
    setMessage(Math.random());
  };
  const getUsers = () => {
    // job of this function
    console.log("get users called", message);
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setUsers([...res.data]);
      })
      .catch((err) => console.log(err));
    // what to do while unmounting
    return () => {
      console.log("EffectDemo unmounting...", message);
    };
  };
  const timer = () => {
    const mytime = setInterval(() => console.log("hello", message), 1000);
    return () => {
      console.log("unmounting from timer..");
      clearInterval(mytime);
    };
  };
  //   useEffect(print, []); /// repeating 2 times - equivalent to componentDidMount
  //   useEffect(getUsers); /// repeating endlessly 1. equivalent to componentDidUpdate
  // useEffect(getUsers, []);
  //   useEffect(getUsers, [message]); //shouldComponentUpdate
  useEffect(getUsers, [message]); //componentWillUnmount
  useEffect(timer, []);
  return (
    <div>
      <h2>{message}</h2>
      <table>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={print}>change message</button>
    </div>
  );
};

export default EffectDemo;

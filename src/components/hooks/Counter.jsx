import React, { useState, useRef } from "react";

const Counter = (props) => {
  //   let count = 0;
  let [count, setCount] = useState(0); // destructuring assignment
  let [color, setColor] = useState({ color: "red", backgroundColor: "yellow" });
  let [nature, setNature] = useState(["trees", "animals", "birds"]);
  let natureRef = useRef("");
  //   natureRef.current = "tiger";

  //   const timerRef = useRef(0);
  //   timerRef.current = setInterval(() => setCount(count + 1), 1000);

  //   const changeCount = () => {
  //     // count = count + 1;
  //     setCount(count + 1);

  //     console.log(count);
  //   };
  const colorHandler = (e) => {
    console.log(e.target.name);
    setColor({ ...color, [e.target.name]: e.target.value });
  };
  const natureHandler = () => {
    natureRef.current.value = "tiger";
    console.log(natureRef.current.value);
  };
  return (
    <div style={color}>
      <ul>
        {nature.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
      <h3>{props.title}</h3>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>click</button>
      <br />
      color
      <input name="color" type="text" onChange={colorHandler} />
      <br />
      background{" "}
      <input name="backgroundColor" onChange={colorHandler} type="text" />
      <br />
      nature items
      <input type="text" ref={natureRef} />
      <button onClick={natureHandler}>add item</button>
    </div>
  );
};

export default Counter;

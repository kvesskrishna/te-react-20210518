import React from "react";

const ConditionalRouting = (props) => {
  const role = "customer";
  const authUser = () => {
    switch (role) {
      case "admin":
        props.history.replace(`/admin`);
        break;
      case "customer":
        props.history.replace(`/customer`);
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <button onClick={authUser}>Login</button>
    </div>
  );
};

export default ConditionalRouting;

import logo from "./../images/783px-Test-Logo.svg.png";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Logo = () => {
  return <img alt="img" style={{ height: "40px" }} src={logo} />;
};

const Header = () => {
  const heading = "Todo List";
  return (
    <div className="header">
      {heading}
      <Logo></Logo>
      <NavLink activeClassName="active" style={{ color: "white" }} to="/users">
        Users
      </NavLink>
      &nbsp;{" "}
      <NavLink activeClassName="active" style={{ color: "white" }} to="/shows">
        Shows
      </NavLink>
      &nbsp;
      <NavLink activeClassName="active" to="/child">
        Child
      </NavLink>
      &nbsp;
      <NavLink exact activeClassName="active" to="/">
        Login
      </NavLink>
      &nbsp;
    </div>
  );
};

export const Header2 = () => {
  const heading = "My Header2";
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};
export default Header;

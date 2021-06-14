import logo from "./../images/783px-Test-Logo.svg.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return <img alt="img" style={{ height: "40px" }} src={logo} />;
};

const Header = () => {
  const heading = "Todo List";
  return (
    <div className="header">
      {heading}
      <Logo></Logo>
      <Link style={{ color: "white" }} to="/users">
        Users
      </Link>
      &nbsp;{" "}
      <Link style={{ color: "white" }} to="/shows">
        Shows
      </Link>
      &nbsp;
      <Link to="/child">Child</Link>&nbsp;
      <Link to="/">Login</Link>&nbsp;
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

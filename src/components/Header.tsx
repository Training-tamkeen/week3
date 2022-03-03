import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/another">
          <li>Another</li>
        </Link>
        <a  href="/#contact">
         Contact us
        </a>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;

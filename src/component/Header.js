//React Component
import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import Instamart from './Instamart';

const Header = () => {
  const [title, setTitle] = useState("Food villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline =  useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <li>Cart</li>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        
        
        </ul>
      </div>
      <h1>{isOnline ? '✅' :'🔴'}</h1>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;

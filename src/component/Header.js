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
    <div className="flex justify-between  bg-pink-50 shadow-lg sm:bg-blue-50">
      <Title />
      <div className="nav-items">
        <ul className="flex">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>

          <li>Cart</li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
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

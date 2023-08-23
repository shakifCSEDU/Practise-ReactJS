//React Component
import { useState } from "react";
import Title from "./Title";

const loggedInUser = () => {
  // API call to check authentication
  return true;
};

const Header = () => {
  const [title, setTitle] = useState("Food villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;

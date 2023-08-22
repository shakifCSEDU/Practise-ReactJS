//React Component
import { useState } from "react";
import Title from "./Title";

const Header = () => {

  const [title,setTitle] =  useState("Food villa");

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
    </div>
  );
};

export default Header;
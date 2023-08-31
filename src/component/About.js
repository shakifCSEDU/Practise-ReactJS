import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";
class About extends React.Component{
  constructor(props){
    super(props);
    
    console.log("Parent - Constructor");
  }

  componentDidMount(){
    console.log("Parent-ComponentDidMount");
  }

  render(){
    console.log("Parent -render");
    return(
      <div>
        <h1>About Us  page</h1>
        <p>This is  shakif</p>
      <Profile/>
      </div>
    );
  }
}
export default About;
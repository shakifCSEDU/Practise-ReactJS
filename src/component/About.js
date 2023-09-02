import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";
import UserContext from "../../utils/UserContext";

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


        <UserContext.Consumer>
          {({user})=><h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>}
        </UserContext.Consumer>
        
        <p>This is  shakif</p>
      <Profile/>
      </div>
    );
  }
}
export default About;
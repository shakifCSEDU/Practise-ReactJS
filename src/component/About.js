import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";


const About = ()=>{
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is a Practise...</p>
      <ProfileFunctionalComponent name={"Shakif"}/>
      <Profile name={"ShakifClass"}/>
    </div>
  )
}

export default About;
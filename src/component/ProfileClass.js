import React from "react";

class Profile extends React.Component{
  constructor(props){
    super(props);
    // Create state
    this.state = {
      userInfo:{
        name:"Dummy name",
        location:"Dummy location",
      }
    }
    console.log("Child constructor..");
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/shakifCSEDU");
    const json = await data.json();

    this.setState({
      userInfo:json,
    })
    console.log("Child componentDidMount");
  }

  componentDidUpdate(){
      console.log("Component did update.");
  }
  componentWillUnmount(){
    console.log("Component will unmount");
  }

  render(){
      console.log("Child render!!");
    return(<div>
      <h1>Profile Class Component</h1>
      <img src={this.state.userInfo.avatar_url}/>
      <h2>Name : {this.state.userInfo.name}</h2>
      <h3>Location : {this.state.userInfo.location}</h3>
    </div>
    );
  }
}
export default Profile;
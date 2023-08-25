import React from "react";

class Profile extends React.Component{

  constructor(props){
    super(props);
    // Create state
    this.state = {
      count : 0,
    }

  }

  componentDidMount(){
    
  }

  render(){
    <div>
      <h1>Profile Class Component</h1>
      <h2>Name : {this.props.name}</h2>
      <h3>Count : {this.state.count}</h3>
      <button onClick={()=>{
        this.setState({
          count :1,
        });
      }}>Count</button>
    </div>
    
  }


}


export default Profile;
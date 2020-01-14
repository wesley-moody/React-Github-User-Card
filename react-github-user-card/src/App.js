import React, { Component } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      login: "",
      avatar: "",
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/wesley-moody").then(response => {
      // console.log (response.data.name)

      this.setState({
        name: response.data.name,
        email: response.data.email,
        login: response.data.login,
        avatar: response.data.avatar_url
      });
    });
    axios
      .get("https://api.github.com/users/wesley-moody/followers")
      .then(response => {
        console.log(response);

        this.setState({
          followers: response.data
        });
      });
  }

  render() {
    return (
      <div className='App'>
        {this.state.followers.map(followme => {
          return (
            <div className='followers'>
              <img src={followme.avatar_url} />
              <div className='followersinfo'>
                <p>{followme.name}</p>
                <p>USERNAME: {followme.login}</p>
                <p> Follow the link below to see my work on github! </p>
                <button>{followme.html_url}</button>
              </div>
            </div>
          );
        })}

        {console.log(this.state)}
        <UserCard
          name={this.state.name}
          email={this.state.email}
          login={this.state.login}
          avatar={this.state.avatar}
        />
      </div>
    );
  }
}
export default App;

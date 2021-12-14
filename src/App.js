import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Home from "./Components/Body/Home";
import Login from "./Components/Body/Login";
import Logout from "./Components/Body/Logout";
import Register from "./Components/Body/Register";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      fullname: ""
    }
  }
  onLogin(data) {
    if (data.status) {
      this.setState({
        isLogin: true,
        fullname: data.fullname
      });
      if (!sessionStorage.getItem("sessionID")) {
        sessionStorage.setItem("sessionID", data.id)
      }
    }
  }
  onLogout(bool) {
    if (bool) {
      this.setState({
        isLogin: false,
        fullname: ""
      });
      sessionStorage.removeItem("sessionID");
    }
  }

  componentDidMount() {
    const sessionID = sessionStorage.getItem("sessionID");
    if (sessionID !== null) {
      axios.post("https://hoangkhang2899-api.herokuapp.com/loginSession", { sessionID: sessionID })
        .then(res => {
          if (res.data.status) {
            this.onLogin(res.data)
          }
          else {
            sessionStorage.removeItem("sessionID");
          }
        })
        .catch(() => console.log("Error"))
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header isLogin={this.state.isLogin} fullname={this.state.fullname} />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/"> <Home /></Route>
            <Route exact path="/login"> <Login onLogin={this.onLogin.bind(this)} isLogin={this.state.isLogin} /></Route>
            <Route exact path="/logout"> <Logout onLogout={this.onLogout.bind(this)} /></Route>
            <Route exact path="/register"> <Register onRegister={this.onLogin.bind(this)} isLogin={this.state.isLogin} /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

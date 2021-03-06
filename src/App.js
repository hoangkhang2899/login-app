import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Axios from "./Utils/Axios";
import { loadProgressBar } from 'axios-progress-bar'
import socketIOClient from "socket.io-client";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Body/Home";
import Login from "./Components/Body/Login";
import Logout from "./Components/Body/Logout";
import Display from "./Components/Body/Display";
import Add from "./Components/Body/Add";

loadProgressBar();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.socketIo = React.createRef();
    this.socketLogin = false;
    this.state = {
      isLogin: false,
      fullname: "",
      customerID: []
    }
  }
  onLogin(data) {
    if (data.status) {
      this.setState({
        isLogin: true,
        fullname: data.fullname
      });
      axios.post(Axios("customer"), { sessionID: data.id })
        .then(res => {
          this.setState({ customerID: res.data });
          this.socketIo.current = socketIOClient.connect(Axios(""));
          this.socketLogin = true;
          this.socketIo.current.on("sendDataServer", data => {
            if (data.method === 'register') {
              delete data.errorValidate;
              this.setState({ customerID: [...this.state.customerID, data] });
            }
            else {
              let { customerID } = this.state;
              customerID.forEach((item, index) => {
                if (item.inputName === data.inputName && item.inputID === data.inputID) {
                  customerID.splice(index, 1);
                  this.setState({ customerID: customerID });
                }
              });
            }
          })
        })
        .catch(err => console.log(err));
      if (!sessionStorage.getItem("sessionID")) {
        sessionStorage.setItem("sessionID", data.id)
      }
    }
  }
  onLogout(bool) {
    if (bool) {
      this.setState({
        isLogin: false,
        fullname: "",
        customerID: []
      });
      sessionStorage.removeItem("sessionID");
      this.socketIo.current.disconnect();
    }
  }
  deleteCustomer(obj) {
    axios.post(Axios("deleteCustomer"), obj)
      .then(res => {
        this.socketIo.current.emit("sendDataClient", obj);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    const sessionID = sessionStorage.getItem("sessionID");
    if (sessionID !== null) {
      axios.post(Axios("loginSession"), { sessionID: sessionID })
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
  componentWillUnmount() {
    if (this.socketLogin) {
      this.socketIo.current.disconnect();
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header isLogin={this.state.isLogin} fullname={this.state.fullname} />
          <Switch>
            <Route exact path="/"> <Home /></Route>
            <Route exact path="/login"> <Login onLogin={this.onLogin.bind(this)} isLogin={this.state.isLogin} /></Route>
            <Route exact path="/logout"> <Logout onLogout={this.onLogout.bind(this)} /></Route>
            <Route exact path="/display">
              <Display
                isLogin={this.state.isLogin}
                customerID={this.state.customerID}
                deleteCustomer={this.deleteCustomer.bind(this)} />
            </Route>
            <Route exact path="/add"> <Add /></Route>
          </Switch>
          <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

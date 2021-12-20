import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Axios from "../../Utils/Axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.cancelRequest = React.createRef();
        this.state = {
            noti: ""
        }
    }

    handleSubmit(e) {
        const username = e.target.username.value;
        const password = e.target.password.value;
        e.preventDefault();
        // this.setState({ noti: "Just a moment ..." })
        axios.post(Axios("login"), { username: username, password: password }, { cancelToken: this.cancelRequest.token })
            .then(res => {
                if (res.data.status) {
                    this.props.onLogin(res.data);
                }
                else {
                    this.setState({ noti: "Wrong login information" })
                }
            })
            .catch((err) => {
                if (err.message !== "canceled") {
                    this.setState({ noti: "Error connecting to server, please come back again" });
                }
            });
    }

    componentDidMount() {
        this.cancelRequest = axios.CancelToken.source();
    }
    componentWillUnmount() {
        this.cancelRequest.cancel("canceled");
    }

    render() {
        return (
            <div className="container">
                <br />
                <h4>Demo account:</h4>
                <p className="pl-3">Username: hoangkhang2899</p>
                <p className="pl-3">Password: 123</p>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {this.state.status || this.props.isLogin ? <Redirect to="/display" /> : ""}
                    <div className="form-group" >
                        <input type="text"
                            className="form-control" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control" name="password" placeholder="Password" />
                    </div>
                    <div className="text-center">
                        {this.state.noti === "" ? "" : <h3>{this.state.noti}</h3>}
                        <button type="submit" className="btn btn-primary">Login</button>&nbsp;
                        <Link className="btn btn-primary" to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
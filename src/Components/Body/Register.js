import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Axios from "../../Utils/Axios";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.cancelRequest = React.createRef();
        this.state = {
            noti: ""
        }
    }

    handleSubmit(e) {
        const fullname = e.target.fullname.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        const query = { fullname: fullname, username: username, password: password };
        e.preventDefault();
        if (!fullname || !username || !password) {
            return this.setState({ noti: "Take a check, please!" });
        }
        else {
            this.setState({ noti: "Just a moment ..." })
            axios.post(Axios("register"), query, {cancelToken: this.cancelRequest.token})
                .then(res => {
                    if (res.data.status) {
                        query.status = true;
                        query.id = res.data.id;
                        this.props.onRegister(query);
                    }
                    else {
                        this.setState({ noti: "Please try another username" })
                    }
                })
                .catch((err) => {
                    if (err.message !== "canceled") {
                        this.setState({ noti: "Error connecting to server, please come back again" });
                    }
                });
        }
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
                <h3 className="pb-2">Please enter register form</h3>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {this.props.isLogin ? <Redirect to="/" /> : ""}
                    <div className="form-group" >
                        <input type="text"
                            className="form-control" name="fullname" placeholder="Your Fullname" />
                    </div>
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
                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                        <button type="reset" className="btn btn-primary">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
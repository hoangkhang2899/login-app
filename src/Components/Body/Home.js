import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Home Page</h1>
                <p>Login web application make by Hoang Khang</p>
                <hr />
                <h1>Dependencies</h1>
                <p>Front-end: reactjs, react-router-dom, axios, bootstrap 4</p>
                <p>Back-end: express, express-generator, mongodb, cors</p>
                <hr />
                <h1>Source code</h1>
                <a
                    href="https://github.com/hoangkhang2899/login-app"
                    className="text-break"
                    target="_blank"
                    rel="noreferrer">
                    https://github.com/hoangkhang2899/login-app</a>
                <hr />
                <p className="text-center">Thanks for reading!</p>
            </div>
        );
    }
}

export default Home;
import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-violet navbar-dark sticky-top">
                {this.props.isLogin ?
                    <span className="navbar-brand d-block d-sm-none" style={{ fontSize: "0.8rem" }}>
                        Hi, {this.props.fullname}
                    </span> :
                    <span className="navbar-brand d-block d-sm-none" style={{ fontSize: "0.8rem" }}>
                        Have a good day!
                    </span>}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        {this.props.isLogin ?
                            "" :
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/add">Add</NavLink>
                            </li>
                        }
                        {this.props.isLogin ?
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/display">Customer</NavLink>
                            </li> :
                            ""
                        }
                        {this.props.isLogin ?
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/logout" onClick={(e) => e.target.blur()}>Logout</NavLink>
                            </li> :
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/login">Login</NavLink>
                            </li>
                        }
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="/#">Action 1</a>
                                <a className="dropdown-item" href="/#">Action 2</a>
                            </div>
                        </li> */}
                    </ul>
                    {this.props.isLogin ?
                        <span className="navbar-text d-none d-sm-block" style={{ fontSize: "0.8rem" }}>
                            Hi, {this.props.fullname}
                        </span> :
                        ""}
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav >
        );
    }
}

export default Header;
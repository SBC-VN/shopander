import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

class LogIn extends Component {
    state = {
        username: "",
        password: "",
        loginkey: "" 
    };

    render() {
        return(
            <div className="login-wrapper">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" class="validate"></input>
                                <label for="icon_prefix">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="icon_password" type="password" className="validate"></input>
                                <label for="icon_password">Password</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>      
        );
    };
};

export default LogIn;
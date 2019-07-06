import React, { Component , Redirect} from "react";
import "./LogIn.css";

class LogIn extends Component {
    state = {
        username: "guest",
        password: "guest",
        loginkey: "" ,
        status: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.setState({
            status: "Checking log in information",
            loginkey: "yes"
          });
    
        console.log("Form submit",this.state);
        this.props.history.push('/garage');
        
    };

    handleFormReset = event => {
        this.setState({
            username: "",
            password: "",
            loginkey: "" ,
            status: ""
        });
    };

    render() {
        // if (this.state.loginkey.length > 0) {
        //     return (<Redirect to='/garage' />);
        //   }

        return(
            <div className="login-wrapper">
                <a className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons"
                       onClick={this.handleFormReset}>add</i>
                </a>
                <div style={{"textAlign":"center"}}>
                    <h3 id="login-prompt">Please Log In</h3>
                </div>
                <form className="col s6"> 
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix"
                                   value={this.state.username}
                                   type="text"
                                   onChange={this.handleInputChange}
                                   name="username"
                                   className="validate"></input>
                            <label htmlFor="icon_prefix">User Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">vpn_key</i>
                            <input  id="icon_password"
                                    value={this.state.password}
                                    type="password"
                                    name="password"
                                    onChange={this.handleInputChange}
                                    className="validate"></input>
                            <label htmlFor="icon_password">Password</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light right" 
                            id="login-submit" 
                            type="submit" 
                            name="login"
                            onClick={this.handleFormSubmit}>
                        Log In
                        <i className="material-icons right">send</i>
                    </button>
                </form>
                <div id="login-status">{this.state.status}</div>
            </div>      
        );
    };
};

export default LogIn;
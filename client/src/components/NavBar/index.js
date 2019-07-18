import React from "react";

const NavBar = (props) => {
    return(
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">
                            <img src="pistonlogo.png" style={{width:"60px"}} alt="Logo"/>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a href="#!" className="waves-effect waves-light btn">
                                    <i className="material-icons right">search</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
}

export default NavBar;
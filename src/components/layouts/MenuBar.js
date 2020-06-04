import React from 'react';
import {Link} from 'react-router-dom';


import Logo from '../../images/logo.png';

export default function MenuBar() {
    return (
        <div>
            <React.Fragment>
                <div className="top-nav-bar">
                    <div className="search-box">
                        <i className="fa fa-bars" id="menu-btn" ></i>
                        <i className="fa fa-times" id="close-btn"></i>
                        <Link to="/"><img src={Logo} className="logo"/></Link>
                        <input type="text" className="form-control" placeholder="Search Products ..."/>
                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    <div className="menu-bar">
                        <ul>
                            <li> <a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i>Cart</a></li>
                            <li> <Link to="/signup">Sign Up</Link></li>
                            <li> <Link to="login">Log In</Link></li>
                        </ul>
                    </div>
                </div>
              
            </React.Fragment>
        </div>
    )
}


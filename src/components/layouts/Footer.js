import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AppLogo from '../../images/app-logo.png';

export default class Footer extends Component {
    render() {
        return (
                <section className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h1>Useful Links</h1>
                                <p> privacy policy </p>
                                <p> Terms of Use </p>
                                <p> Return Policy </p>
                                <p> Discount Coupons </p>
                            </div>

                            <div className="col-md-3">
                                <h1>Company</h1>
                                <p> <Link to="/about"> About us </Link> </p>
                                <p> <Link to="/contact"> Contact us </Link> </p>
                                <p> <Link to="/bloglist"> Blogs  </Link></p>
                            </div>

                            <div className="col-md-3">
                                <h1>Follow us on</h1>
                                <p> <i className="fa fa-facebook"></i> Facebook </p>
                                <p> <i className="fa fa-youtube"></i> Youtube </p>
                                <p> <i className="fa fa-linkedin"></i> LinkedIn </p>
                                <p> <i className="fa fa-twitter"></i> Twitter </p>
                            </div>

                            <div className="col-md-3 footer-image">
                                <h1>Download App</h1>
                                <img src={AppLogo}/>
                            </div>
                        </div>
                        <hr/>
                        <p className="copyright"> 
                            Design by <i className="fa fa-heart-o"></i> Sachin Maharjan
                        </p>
                    </div>
                </section>

        )
    }
}

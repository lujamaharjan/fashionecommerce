import React, { Component } from 'react'

class Signup extends Component {
    render() {
        return (
            <section className="signup">
                <div className="card col-md-4 mx-auto shadow">
                    <h3 className="text-center">Create Account</h3>
                    <p className="text-center">It's free and hardly takes more than 30 seconds.</p>
                    <form>
                        <div className="input-group">
                            <span><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" placeholder="Username"/>
                        </div>
                        <hr/>
                        <div className="input-group">
                            <span><i className="fa fa-paper-plane"></i></span>
                            <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                        <hr/>
                        <div className="input-group">
                            <span><i className="fa fa-lock"></i></span>
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <hr/>
                        <div className="input-group">
                            <span><i className="fa fa-check-square"></i></span>
                            <input type="text" className="form-control" placeholder="Confirm Password"/>
                        </div>
                        <button className="btn btn-block" type="submit">Submit</button>
                        <hr/>
                    </form>
                    <div className="bottom-text">
                        <p>By clicking the signup button, you agree to our</p>
                        <p><span>Terms &amp; conditions </span> and <span> Privacy Policy </span></p>
                    </div>
                </div>
            </section>
        )
    }
}



export default Signup;
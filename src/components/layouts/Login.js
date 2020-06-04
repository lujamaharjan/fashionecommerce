import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <section className="signup">
            <div className="card col-md-4 mx-auto shadow">
                <h3 className="text-center">Login</h3>
                <form>
                    <div className="input-group">
                        <span><i className="fa fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <hr/>
                    
                    <div className="input-group">
                        <span><i className="fa fa-lock"></i></span>
                        <input type="text" className="form-control" placeholder="Password"/>
                    </div>
                    <hr/>
                    
                    <button className="btn btn-block" type="submit">Login</button>
                    <hr/>
                </form>
                <div className="bottom-text">
                    <p><span>Forget password</span></p>
                </div>
            </div>
        </section>
        )
    }
}

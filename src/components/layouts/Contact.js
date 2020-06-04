import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="card col-md-8 mx-auto">
                    <h3>Contact us </h3>
                    <form className="contact-form">
                        <input type="text" className="form-control" placeholder="your name"/>
                        <input type="email" className="form-control" placeholder="your email"/>
                        <input type="text" className="form-control" placeholder="your phone (optional)"/>
                        <input type="text" className="form-control" placeholder="your website"/>
                        <textarea className="form-control" placeholder="your message"></textarea>
                        <button className="btn btn-block">Submit</button>
                    </form>
                </div>
            </section>
        )
    }
}

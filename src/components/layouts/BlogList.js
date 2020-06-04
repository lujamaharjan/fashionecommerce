import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class BlogList extends Component {
    render() {
        return (
            <section className="blog-list">
                <div className="container">
                    <h1>Latest Posts </h1>
                    <div className="card col-md-10 mx-auto shadow">
                        <Link to="/blog"><h3 >Must purchase fashion wears in the market</h3></Link>
                        <p>As a coorna hit the mareket fashion market is down. So, our company is gifting the 
                            many jeans and shoes with shopping of more than worth Rs. 1000. A lot of people are 
                            purchasing because it is totally reasonable price... <Link to="/blog"><span>Read More >> </span></Link></p>
                    </div>
                    <div className="card col-md-10 mx-auto shadow">
                        <Link to="/blog"><h3 >Must purchase fashion wears in the market</h3></Link>
                        <p>As a coorna hit the mareket fashion market is down. So, our company is gifting the 
                            many jeans and shoes with shopping of more than worth Rs. 1000. A lot of people are 
                            purchasing because it is totally reasonable price... <Link to="/blog"><span>Read More >> </span></Link></p>
                    </div>
                    <div className="card col-md-10 mx-auto shadow">
                        <Link to="/blog"><h3 >Must purchase fashion wears in the market</h3></Link>
                        <p>As a coorna hit the mareket fashion market is down. So, our company is gifting the 
                            many jeans and shoes with shopping of more than worth Rs. 1000. A lot of people are 
                            purchasing because it is totally reasonable price... <Link to="/blog"><span>Read More >> </span></Link></p>
                    </div>
                    <div className="card col-md-10 mx-auto shadow">
                        <Link to="/blog"><h3 >Must purchase fashion wears in the market</h3></Link>
                        <p>As a coorna hit the mareket fashion market is down. So, our company is gifting the 
                            many jeans and shoes with shopping of more than worth Rs. 1000. A lot of people are 
                            purchasing because it is totally reasonable price... <Link to="/blog"><span>Read More >> </span></Link></p>
                    </div>
                    <div className="card col-md-10 mx-auto shadow">
                        <Link to="/blog"><h3 >Must purchase fashion wears in the market</h3></Link>
                        <p>As a coorna hit the mareket fashion market is down. So, our company is gifting the 
                            many jeans and shoes with shopping of more than worth Rs. 1000. A lot of people are 
                            purchasing because it is totally reasonable price... <Link to="/blog"><span>Read More >> </span></Link></p>
                    </div>
                    <div className="card col-md-10 mx-auto shadow">
                        <Link to="/blog"><h3 >Must purchase fashion wears in the market</h3></Link>
                        <p>As a coorna hit the mareket fashion market is down. So, our company is gifting the 
                            many jeans and shoes with shopping of more than worth Rs. 1000. A lot of people are 
                            purchasing because it is totally reasonable price... <Link to="/blog"><span>Read More >> </span></Link></p>
                    </div>
                    
                    
            
                    <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                    </nav>
                    
                </div>
            </section>
        
        )
    }
}

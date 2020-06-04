import React, { Component } from 'react';
import BlogImage from '../../images/img-3.jpeg'

export default class Blog extends Component {
    render() {
        return (
            <section className="single-blog">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="shadow">Related Posts</h3>
                            <div className='shadow similar-posts'>
                                <p>Brand new Hot T-shirts sell in the market</p>
                            </div>

                            <div className='shadow similar-posts'>
                                <p>50% discount in the market for smart watches</p>
                            </div>

                            <div className='shadow similar-posts'>
                                <p>Black friday is a shopping day in the market</p>
                            </div>

                            <div className='shadow similar-posts'>
                                <p>Shoes sell offer in resonable price with 100% warrenty</p>
                            </div>

                            <div className='shadow similar-posts'>
                                <p>Must buy items for the women in this summer seasons</p>
                            </div>

                            <div className='shadow similar-posts'>
                                <p>learn to live and gift the mobile phones to the dearest one</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card shadow">
                                <h2>Customer Staisfaction is the one and only goal of the fashion company limited.</h2>
                                <img src={BlogImage}/>			
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </p>	
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

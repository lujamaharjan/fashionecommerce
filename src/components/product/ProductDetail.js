import React, { Component } from 'react'
import ImgDetail1 from '../../images/pic-1.jpg';
import ImgDetail2 from '../../images/pic-2.jpg';
import ImgDetail3 from '../../images/pic-3.jpg';

export default class ProductDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <section class="single-product">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="slider">
                                    <div id="product-slider" class="carousel slide carousel-fade" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src={ImgDetail1} class="d-block"/>
                                        </div>
                                        <div class="carousel-item">
                                        <img src={ImgDetail2} class="d-block"/>
                                        </div>
                                        <div class="carousel-item">
                                        <img src={ImgDetail3} class="d-block"/>
                                        </div>
                                    </div>
                                        <a class="carousel-control-prev" href="#product-slider" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#product-slider" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-7">
                                <p class="new-arrival text-center">NEW</p>
                                <h2 class="single-product-title">Men's T shirts v Neck - Blue Color</h2>
                                <p>Product Code: IRSC2020</p>
                                <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                <p class="price">USD $16.00</p>
                                <p><b>Availability:</b> In Stock </p>
                                <p><b>Condition: </b> New </p>
                                <p><b>Brand:</b> XYZ Company </p>
                                <label> Quantity: </label>
                                <input type="text" value="1"/>
                                <button type="button" class="btn btn-primary">Add to Cart </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="product-description">
                    <div class="container">
                        <h5>Product Description</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <hr/>
                    </div>
                    
                    <div class="container">
                        <div class="title-box">
                            <h2> Similar  </h2>
                        </div>
                        <div class="row">
                            
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

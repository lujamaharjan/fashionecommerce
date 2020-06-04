import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    render() {
        console.log(this.props.product)
        return (
            <React.Fragment>
                <div className="col-md-3">
                    <div className="product-top">
                        <Link to="/productdetail"><img src={this.props.product.image}/></Link>
                        <div className="overlay-right">
                            <button type="button" className="btn btn-secondary" title="Quick Shop">
                                <i className="fa fa-eye"></i>
                            </button>
                            <button type="button" className="btn btn-secondary" title="Add to Whishlist">
                                <i className="fa fa-heart-o"></i>
                            </button>
                            <button type="button" className="btn btn-secondary" title="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                    <div className="product-bottom text-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <h3>{this.props.product.name}</h3>
                        <h5>{this.props.product.price}</h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

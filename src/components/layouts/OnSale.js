import React, { Component } from 'react';
import Product from '../product/Product'

class OnSale extends Component {


    constructor(props) {
        super(props);
        this.state = {
                products:[
                    {
                        id:1,
                        name: 'Fitness watch',
                        price: 49.9,
                        image: require('../../images/product1.jpg')
                    },
                    {
                        id:2,
                        name: 'Digital watch',
                        price: 39.9,
                        image: require('../../images/product2.jpg')
                    },
                    {
                        id:3,
                        name: 'Brown Shoes',
                        price: 26.9,
                        image: require('../../images/product3.jpg')
                    },
                    {
                        id:4,
                        name: 'Cell Watch',
                        price: 79.9,
                        image: require('../../images/product4.jpg')
                    }
                ]
        };
    }
   
    render() {
        return (
            <section className="on-sale">
                <div className="container">
                    <div className="title-box">
                        <h2> On Sale </h2>
                    </div>
                    <div className="row">
                        {this.state.products.map((product) => (
                           <Product key={product.id} product={product}/>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default OnSale;

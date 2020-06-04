import React, { Component } from 'react';
import Catago1 from '../../images/categories1.jpg';
import Catago2 from '../../images/categories2.jpeg';
import Catago3 from '../../images/categories3.jpeg';


export default class FeaturedCatagories extends Component {
    render() {
        return (
            <section className="featured-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Catago1}/>
                        </div>
                        <div className="col-md-4">
                            <img src={Catago2}/>
                        </div>
                        <div className="col-md-4">
                            <img src={Catago3}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

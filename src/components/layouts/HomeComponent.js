import React, { Component } from 'react';


import  SideMenu from './SideMenu';
import Slider from './Slider';
import FeaturedCatagories from './FeaturedCatagories';
import OnSale from './OnSale';
import NewProduct from './NewProducts';

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <section className="header">
                    <SideMenu/>
                    <Slider/>
                    <FeaturedCatagories/>
                    <OnSale/>
                    <NewProduct/>
                </section>
            </div>
        )
    }
}

import React, { Component } from 'react';

import Sliderimg1 from "../../images/img-1.jpeg"; 
import Sliderimg2 from "../../images/img-2.jpeg";
import Sliderimg3 from "../../images/img-3.jpeg";
import Sliderimg4 from "../../images/img-4.jpeg";


export default class Slider extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="slider">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={Sliderimg1} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                        <img src={Sliderimg2} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                        <img src={Sliderimg3} className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                        <img src={Sliderimg4} className="d-block w-100" />
                        </div>
                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    </ol>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

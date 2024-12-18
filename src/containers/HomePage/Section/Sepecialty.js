import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Sepecialty.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

class Sepecialty extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <section className="section_sepecialty">
                <div className="container">
                    <Slider {...settings} className="slider">
                        <a href="#" className="img-customize">
                            Image 1
                        </a>
                        <a href="#" className="img-customize">
                            Image
                        </a>
                        <a href="#" className="img-customize">
                            Image
                        </a>
                        <a href="#" className="img-customize">
                            Image
                        </a>
                    </Slider>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sepecialty);

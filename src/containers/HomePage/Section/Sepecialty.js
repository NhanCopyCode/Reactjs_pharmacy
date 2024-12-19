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
import sepcialty_image from "../../../assets/images/specialty/specialty_image.jpg";
class Sepecialty extends Component {
    render() {
        let settings = {
            dots: false,
            speed: 300,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <section className="section_sepecialty">
                <div className="container">
                    <div className="specialty_header">
                        <h1>Chuyên khoa phổ biến</h1>
                        <button className="see_more">Xem thêm</button>
                    </div>
                    <Slider {...settings} className="slider">
                        <a href="#" className="slide_item_link">
                            <div className="slider_item_content">
                                <img
                                    src={sepcialty_image}
                                    alt="Specialty image"
                                />
                                <div className="slide_item_title">
                                    <span>Cơ xương khớp</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="slide_item_link">
                            <div className="slider_item_content">
                                <img
                                    src={sepcialty_image}
                                    alt="Specialty image"
                                />
                                <div className="slide_item_title">
                                    <span>Cơ xương khớp</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="slide_item_link">
                            <div className="slider_item_content">
                                <img
                                    src={sepcialty_image}
                                    alt="Specialty image"
                                />
                                <div className="slide_item_title">
                                    <span>Cơ xương khớp</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="slide_item_link">
                            <div className="slider_item_content">
                                <img
                                    src={sepcialty_image}
                                    alt="Specialty image"
                                />
                                <div className="slide_item_title">
                                    <span>Cơ xương khớp</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="slide_item_link">
                            <div className="slider_item_content">
                                <img
                                    src={sepcialty_image}
                                    alt="Specialty image"
                                />
                                <div className="slide_item_title">
                                    <span>Cơ xương khớp</span>
                                </div>
                            </div>
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

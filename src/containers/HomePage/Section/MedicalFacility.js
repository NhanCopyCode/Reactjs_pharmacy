import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sepcialty_image from "../../../assets/images/specialty/specialty_image.jpg";

class MedicalFacility extends Component {
    render() {
        const settings = this.props.settings;
        return (
            <section className="section_specialty section_slide ">
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);

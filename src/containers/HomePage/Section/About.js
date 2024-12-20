import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class About extends Component {
    render() {
        return (
            <section className="section_about">
                <div className="container">
                    <div className="about_content">
                        <h3 className="about_title">Về chúng tôi</h3>
                        <div className="about_content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="about_video">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/Lwuxlb83LD8"
                                            title='Đi Giữa Trời Rực Rỡ (From "Đi Giữa Trời Rực Rỡ")'
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="about_text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Donec
                                            nec odio vitae est gravida
                                            malesuada. Cras tristique, purus nec
                                            iaculis posuere, lectus ligula
                                            lacinia ligula, eget imperdiet
                                            turpis sem nec est. Donec nec odio
                                            vitae est gravida malesuada. Cras
                                            tristique, purus nec iaculis
                                            posuere, lectus ligula lacinia
                                            ligula
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);

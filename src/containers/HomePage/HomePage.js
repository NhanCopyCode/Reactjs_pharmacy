import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Sepecialty from "./Section/Sepecialty";
import NextArrow from "./Section/NextArrow";
import PrevArrow from "./Section/PrevArrow";
import MedicalFacility from "./Section/MedicalFacility";
import "./HomePage.scss";


class HomePage extends Component {
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
            <div>
                <HomeHeader />
                <Sepecialty settings={settings} />
                <MedicalFacility settings={settings} />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

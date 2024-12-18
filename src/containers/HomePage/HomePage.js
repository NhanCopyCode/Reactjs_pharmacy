import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Sepecialty from "./Section/Sepecialty";
import NextArrow from "./Section/NextArrow";
class HomePage extends Component {
    render() {
      

        return (
             <div>
                <HomeHeader />
                <Sepecialty />
            </div>
        )
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

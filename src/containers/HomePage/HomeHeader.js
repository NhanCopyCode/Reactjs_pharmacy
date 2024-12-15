import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.png";
import chuyen_khoa from "../../assets/images/banners/chuyen_khoa.svg";
import tu_xa from "../../assets/images/banners/tu_xa.svg";
import tong_quat from "../../assets/images/banners/tong_quat.svg";
import y_hoc from "../../assets/images/banners/y_hoc.svg";
import tinh_than from "../../assets/images/banners/tinh_than.svg";
import nha_khoa from "../../assets/images/banners/nha_khoa.svg";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";
import { LANGUAGES } from "../../utils/constant";
import { lang } from "moment";
import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }
    render() {
        const {intl} = this.props;
        const language = this.props.lang;
        return (
            <>
                <section className="header">
                    <div className="container">
                        <div className="row ">
                            <div className="left-content col-md-6 col-lg-3">
                                <i className="fas fa-bars"></i>
                                <img src={logo} alt="Image" />
                            </div>
                            <div className="center-content col-md-12 col-lg-7">
                                <ul>
                                    <li>
                                        <button className="active">
                                            <FormattedMessage id="home-header.homepage" />
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <FormattedMessage id="home-header.atHome" />
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <FormattedMessage id="home-header.atHospital" />
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <FormattedMessage id="home-header.liveHealthy" />
                                        </button>
                                    </li>
                                </ul>
                                <input
                                    type="text"
                                    placeholder={intl.formatMessage({
                                        id: "home-header.findDoctor",
                                    })}
                                />
                            </div>
                            <div className="right-content col-md-6 col-lg-2">
                                <i className="fas fa-question-circle"></i>
                                <span>
                                    <FormattedMessage id="home-header.support" />
                                </span>
                                <div className="language">
                                    <span className={language ==  LANGUAGES.VI ? 'active' : ''} onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>VN</span>
                                    <span className={language == LANGUAGES.EN ? 'active' : ''} onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>EN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="banner">
                    <div className="container">
                        <h1 className="title">Nơi khởi nguồn sức khỏe</h1>
                        <h1 className="sub-title">
                            Chăm sóc sức khỏe toàn diện
                        </h1>
                        <ul className="list-category mt-5">
                            <li>
                                <div className="category-image">
                                    <img src={chuyen_khoa} alt="Image" />
                                </div>
                                <span>Khám chuyên khoa</span>
                            </li>
                            <li>
                                <div className="category-image">
                                    <img src={tu_xa} alt="Image" />
                                </div>
                                <span>Khám từ xa</span>
                            </li>
                            <li>
                                <div className="category-image">
                                    <img src={tong_quat} alt="Image" />
                                </div>
                                <span>Khám tổng quát</span>
                            </li>
                            <li>
                                <div className="category-image">
                                    <img src={y_hoc} alt="Image" />
                                </div>
                                <span>Xét nghiệm y học</span>
                            </li>
                            <li>
                                <div className="category-image">
                                    <img src={tinh_than} alt="Image" />
                                </div>
                                <span>Sức khỏe tinh thần</span>
                            </li>
                            <li>
                                <div className="category-image">
                                    <img src={nha_khoa} alt="Image" />
                                </div>
                                <span>Khám nha khoa</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="info circle">
                    <div className="container">
                        <h3 className="content-title">Dành cho bạn</h3>
                        <div></div>
                    </div>
                </section>
            </>
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
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomeHeader));

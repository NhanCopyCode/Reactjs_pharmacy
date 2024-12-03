import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "ThanhNhan",
            password: "123",
            isShowPassword: false,
        };
    }

    handleOnChangeInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    handleShowPassword = (event) => {
        this.setState({
            isShowPassword : !this.state.isShowPassword,
        })
    }
    render() {
        return (
            <>
                <div id="login_form__container">
                    <form className="login_form">
                        <h1 className="text-center title">Login form</h1>
                        <div className="form-group mt-4">
                            <label htmlFor="username">User name</label>
                            <input
                                id="username"
                                type="text"
                                className="form-control"
                                placeholder="Enter username..."
                                name="username"
                                value={this.state.username}
                                onChange={this.handleOnChangeInput}
                            />
                        </div>
                        <div className="form-group mt-4 position-relative">
                            <label htmlFor="password">User name</label>
                            <input
                                type={
                                    this.state.isShowPassword
                                        ? "test"
                                        : "password"
                                }
                                id="password"
                                className="form-control"
                                placeholder="Enter password..."
                                name="password"
                                value={this.state.password}
                                onChange={this.handleOnChangeInput}
                            />
                            <i
                                className={
                                    this.state.isShowPassword
                                        ? "fas fa-eye-slash position-absolute show_password"
                                        : "far fa-eye position-absolute show_password"
                                }
                                onClick={this.handleShowPassword}
                            ></i>
                        </div>
                        <div className="mt-3">
                            <span className="link-primary">
                                Forgot your password
                            </span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <span className="login_with">Login with: </span>
                            <div className="social">
                                <i className="fab icon fa-google-plus-g"></i>
                                <i className="fab icon fa-facebook"></i>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) =>
            dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

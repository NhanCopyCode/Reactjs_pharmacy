import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLogin } from "../../services/userService";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isShowPassword: false,
            messageError: '',
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
            isShowPassword: !this.state.isShowPassword,
        });
    };

    handleLogin = async (event) => {
        this.setState({
            messageError: ''
        })
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log(email, password);
        try {
            let data = await handleLogin(email, password);
            if(data && data.errCode !== 0) {
                this.setState({
                    messageError: data.message
                })
            }
            if(data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('Login succed!!');
                
            }
            
        } catch (e) {
            if(e.response && e.response.data) {
                this.setState({
                    messageError: e.response.data.message
                })
            }
        }
    };
    render() {
        return (
            <>
                <div id="login_form__container">
                    <form className="login_form" method="POST">
                        <h1 className="text-center title">Login form</h1>
                        <div className="form-group mt-4">
                            <label htmlFor="email">Email name</label>
                            <input
                                id="email"
                                type="text"
                                className="form-control"
                                placeholder="Enter email..."
                                name="email"
                                value={this.state.email}
                                onChange={this.handleOnChangeInput}
                            />
                        </div>
                        <div className="form-group mt-4 position-relative">
                            <label htmlFor="password">Password</label>
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
                        <div style={{color: "red"}}>
                            {this.state.messageError}
                        </div>
                        <div className="mt-3">
                            <span className="link-primary">
                                Forgot your password
                            </span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn btn-primary"
                                onClick={this.handleLogin}
                            >
                                Login
                            </button>
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
       
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) =>
            dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

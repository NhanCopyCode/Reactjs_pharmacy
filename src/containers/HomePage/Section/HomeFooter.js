import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class HomeFooter extends Component {
    render() {
        return (
            <section className="section_footer">
                <div className="container">
                    <div className="footer_content">
                        <h3>
                            &copy; 2024 Le Phuoc Thanh Nhan. More info pls visit
                            me{" "}
                            <a href="#" className="footer_github_link">
                                Github
                            </a>
                        </h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

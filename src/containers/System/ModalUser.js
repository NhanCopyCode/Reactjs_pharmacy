import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle = () => {
        this.props.handleToggleModalUser();
    };

    componentDidMount() {}

    render() {
        console.log(this.props);
        let isOpenModal = this.props.isOpenModalUser;
        return (
            <Modal isOpen={isOpenModal} toggle={() => this.toggle()} centered>
                <ModalHeader toggle={() => this.toggle()}>
                    Create new user
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter email..."
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password..."
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter first name..."
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter last name..."
                                />
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="firstName">Address</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter first name..."
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.toggle()}>
                        Add new
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

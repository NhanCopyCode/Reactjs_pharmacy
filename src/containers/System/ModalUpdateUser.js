import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalUpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        };
    }

    toggle = () => {
        this.props.handleToggleModalUpdateUser();
    };

    clearState = () => {
        this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        });
    };

    handleOnChangeInput = (event) => {
        let fieldInput = event.target.id;
        this.setState({
            [fieldInput]: event.target.value,
        });
    };

    checkValidateInput = (input) => {
        let arrInput = [
            "email",
            "password",
            "firstName",
            "lastName",
            "address",
        ];

        let invalidField = arrInput.filter(
            (field) => !input[field] || input[field].trim() === ""
        );
        console.log(invalidField);
        if (invalidField.length > 0) {
            alert(`Invalid field input ${invalidField.join(", ")}`);
            return false;
        }
        return true;
    };

    handleAddNewUser = async (event) => {
        const isValid = this.checkValidateInput(this.state);
        if (isValid) {
            //call api create user
            const data = this.state;
            const isUserCreated = await this.props.createNewUser(data);
            console.log("is user created: ", isUserCreated);
            if (isUserCreated) {
                console.log("clear state");
                this.clearState();
            }
        }
    };
    componentDidMount() {}

    render() {
        let isOpenModal = this.props.isOpenModalUpdateUser;
        return (
            <Modal isOpen={isOpenModal} toggle={() => this.toggle()} centered>
                <ModalHeader toggle={() => this.toggle()}>
                    Edit user
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <form className="row">
                            <div className="form-group col-6">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter email..."
                                    required
                                    value={this.state.email}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password..."
                                    required
                                    value={this.state.password}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter first name..."
                                    required
                                    value={this.state.firstName}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter last name..."
                                    required
                                    value={this.state.lastName}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="address">Address</label>
                                <input
                                    id="address"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter first name..."
                                    required
                                    value={this.state.address}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                        </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={(e) => this.handleAddNewUser(e)}
                    >
                        Update user
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateUser);

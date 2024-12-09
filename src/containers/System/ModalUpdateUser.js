import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalUpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            roleId: "1",
        };
    }

    toggle = () => {
        this.props.handleToggleModalUpdateUser();
    };

    clearState = () => {
        this.setState({
            id: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            roleId: "1",
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

    handleUpdateUser = async (event) => {
        const isValid = this.checkValidateInput(this.state);
        if (isValid) {
            //call api create user
            const data = this.state;
            console.log('data update user: ', data);
            this.props.handleUserEdit(data);
           
        }
    };
    componentDidMount() {
        const user = this.props.currentUser;
        this.setState({
            id: user.id,
            password: "Hard code",
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
        });
    }

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
                        onClick={(e) => this.handleUpdateUser(e)}
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

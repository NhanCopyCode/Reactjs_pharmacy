import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
    getAllUsers,
    createUserService,
    deleteUserService,
    updateUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalUpdateUser from "./ModalUpdateUser";
import { emitter } from "../../utils/emitter";
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: [],
            isOpenModalUser: false,
            isOpenModalUpdateUser: false,
            currentUser: {},
        };
    }

    async componentDidMount() {
        this.renderListUser();
    }

    renderListUser = async () => {
        const response = await getAllUsers("ALL");
        if (response && response.errCode === 0) {
            this.setState({
                listUsers: response.users,
            });
        }
    };

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        });
    };

    handleToggleModalUser = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        });
    };

    handleToggleModalUpdateUser = () => {
        this.setState({
            isOpenModalUpdateUser: !this.state.isOpenModalUpdateUser,
        });
    };

    createNewUser = async (data) => {
        try {
            const response = await createUserService(data);
            if (response && response.errCode !== 0) {
                return alert(response.errMessage);
            }
            this.renderListUser();
            this.setState({
                isOpenModalUser: false,
            });

            // return true;
            emitter.emit("EVENT_CLEAR_MODAL_DATA");
        } catch (error) {
            console.log(error);
        }
    };

    handleDeleteUser = async (event, userId) => {
        try {
            if (userId) {
                await deleteUserService(userId);
                this.renderListUser();
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleUpdateUser = (event, user) => {
        this.handleToggleModalUpdateUser();
        this.setState({
            currentUser: user,
        });
    };

    doEditUser = async (user) => {
        try {
            const res = await updateUserService(user);
            if(res && res.errCode !== 0) {
                return alert(res.errMessage);
            }
            this.renderListUser();
            this.setState({
                isOpenModalUpdateUser: false,
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const listUsers = this.state.listUsers;
        return (
            <div className="user-container mt-5 container">
                <div className="text-center user-management-title">
                    Manage users ThanhNhangg
                </div>
                <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={this.handleAddNewUser}
                >
                    Add new user
                </button>
                {this.state.isOpenModalUpdateUser && (
                    <ModalUpdateUser
                        isOpenModalUpdateUser={this.state.isOpenModalUpdateUser}
                        handleToggleModalUpdateUser={
                            this.handleToggleModalUpdateUser
                        }
                        currentUser={this.state.currentUser}
                        handleUserEdit={this.doEditUser}
                    />
                )}
                <ModalUser
                    isOpenModalUser={this.state.isOpenModalUser}
                    handleToggleModalUser={this.handleToggleModalUser}
                    createNewUser={this.createNewUser}
                />
                <table className="table mt-2">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>

                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers &&
                            listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td className="d-flex">
                                            <button
                                                className="btn btn-warning me-3"
                                                onClick={(event) =>
                                                    this.handleUpdateUser(
                                                        event,
                                                        item
                                                    )
                                                }
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button
                                                className="btn btn-danger "
                                                onClick={(event) =>
                                                    this.handleDeleteUser(
                                                        event,
                                                        item.id
                                                    )
                                                }
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

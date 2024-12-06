import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: [],
            isOpenModalUser: false,
        };
    }

    async componentDidMount() {
        const response = await getAllUsers("ALL");
        console.log(response);
        if (response && response.errCode === 0) {
            this.setState({
                listUsers: response.users,
            });
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        });
    };

    handleToggleModalUser = () => {
        console.log(123);
        
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        });
    };

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
                <ModalUser
                    isOpenModalUser={this.state.isOpenModalUser}
                    handleToggleModalUser={this.handleToggleModalUser}
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
                                            <button className="btn btn-warning me-3">
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className="btn btn-danger ">
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

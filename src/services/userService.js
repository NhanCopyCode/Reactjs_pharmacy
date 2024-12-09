import axios from "../axios";
const handleLogin = (email, password) => {
    return axios.post("/api/login", { email, password });
};

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-user?id=${id}`);
};

const createUserService = (data) => {
    data.roleId = 1;
    return axios.post("/api/create-new-user", data);
};

const deleteUserService = (id) => {
    if (id) {
        
        return axios.delete("/api/delete-user",{ data: {id}});
    }
};

const updateUserService = (data) => {
    if (data) {
        return axios.delete("/api/delete-user", { data: { data } });
    }
};

export {
    handleLogin,
    getAllUsers,
    createUserService,
    deleteUserService,
    updateUserService,
};

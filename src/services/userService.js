import axios from "../axios";
const handleLogin = (email, password) => {
    return axios.post("/api/login", { email, password });
};

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-user?id=${id}`);
};

const createUserService = (data) => {
    console.log("check data from service: ", data);
    data.roleId = 1;
    return axios.post("/api/create-new-user", data);
};

export { handleLogin, getAllUsers, createUserService };

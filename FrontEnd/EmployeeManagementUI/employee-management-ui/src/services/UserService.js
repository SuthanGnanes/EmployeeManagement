import axios from 'axios';

const USER = "http://localhost:8085/employee-management/api/v1/user";

class UserService{
    addUser(){
        return axios.post(USER);
    }
}
export default new UserService()
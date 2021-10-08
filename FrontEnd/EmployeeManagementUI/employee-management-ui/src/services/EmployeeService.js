import axios from 'axios';

const EMPLOYEES = "http://localhost:8085/employee-management/api/v1/employees";
const EMPLOYEE = "http://localhost:8085/employee-management/api/v1/employee";
class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEES);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE + '/' + employeeId);
    }
    
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE + '/' + employeeId, employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE + '/' + employeeId);
    }
    getEmployeesByDepartment(departmentName){
        return axios.get(EMPLOYEE + '/' + departmentName);
    }
}

export default new EmployeeService()
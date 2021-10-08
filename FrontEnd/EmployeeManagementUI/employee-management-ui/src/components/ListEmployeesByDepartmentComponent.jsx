import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeesByDepartmentComponent extends Component {
    constructor(props)
    {
       super(props)

       this.state = {
           employees: []
       }
       this.addEmployee = this.addEmployee.bind(this);
       this.editEmployee = this.editEmployee.bind(this);
       this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    viewEmployee(id){
       this.props.history.push(`/view-employee/${id}`);
    }

    deleteEmployee(id){
       EmployeeService.deleteEmployee(id).then( responce => {
           this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
       });
    }


    editEmployee(id){
       this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount(departmentName){
        EmployeeService.getEmployeesByDepartment(departmentName).then((responce) => {
           this.setState({
               employees: responce.data
           });
        });
    }

    addEmployee(){
       this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className = "text-center">Employees</h2>
                <div className ="row" style = {{width:"130px", marginBottom:"20px", marginTop:"20px"}}>
                   <button className = "btn btn-primary" onClick = {this.addEmployee}>Add Employee</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead >
                            <tr className = "text-primary text-center" >
                               <th>Name</th>
                               <th>Position</th>
                               <th>Salary</th>
                               <th>Department</th>
                               <th>Joined Date</th>
                               <th>Actions</th>
                           </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key ={employee.id}>
                                       <td> {employee.fullName} </td>
                                       <td> {employee.position} </td>
                                       <td> {employee.salary} </td>
                                       <td> {employee.departmentName} </td>
                                       <td> {employee.joinDate} </td>
                                       <td>
                                           <button onClick ={() => this.editEmployee(employee.id)} className = "btn btn-info">Update</button> 
                                           <button style = {{marginLeft:"10px"}} onClick ={() => this.viewEmployee(employee.id)} className = "btn btn-warning">View</button>
                                           <button style = {{marginLeft:"10px"}} onClick ={() => this.deleteEmployee(employee.id)} className = "btn btn-danger">Delete</button>
                                       </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeesByDepartmentComponent;
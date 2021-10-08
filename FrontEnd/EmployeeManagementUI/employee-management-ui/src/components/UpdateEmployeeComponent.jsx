import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fullName: '',
            salary: '',
            position: '',
            departmentName: '',
            joinDate: ''
        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeDepartmentHandler =this.changeDepartmentHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount()
    {
        EmployeeService.getEmployeeById(this.state.id).then( (responce) => {
            let employee = responce.data;
            this.setState({
                employeeId: employee.id,
                fullName: employee.fullName,
                salary: employee.salary,
                position: employee.position,
                departmentName: employee.departmentName,
                joinDate: employee.joinDate
            });
        });
    }

    updateEmployee = (e) =>{
        e.preventDefault();
        let employee = {id:this.state.id, fullName:this.state.fullName, salary:this.state.salary, position:this.state.position, departmentName:this.state.departmentName, joinDate: this.state.joinDate};
        console.log('employee =>' +JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then( responce => {
            this.props.history.push('/employees');
        });
    }
    cancel(){
        this.props.history.push('/employees');
    }
    changeFullNameHandler = (event) => {
        this.setState({fullName: event.target.value});
    }

    changeSalaryHandler = (event) =>{
        this.setState({salary: event.target.value});
    }

    changePositionHandler = (event) => {
        this.setState({position: event.target.value});
    }

    changeDepartmentHandler = (event) => {
        this.setState({departmentName: event.target.value});
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update Employee</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label style = {{marginBottom:"10px"}}>Full Name</label>
                                            <input placeholder = "Full Name" name = "fullName" style = {{marginBottom:"20px"}} className = "form-control" value = {this.state.fullName} onChange = {this.changeFullNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label style = {{marginBottom:"10px"}}>Salary</label>
                                            <input placeholder = "Salary" name = "salary" style = {{marginBottom:"20px"}} className = "form-control" value = {this.state.salary} onChange = {this.changeSalaryHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label style = {{marginBottom:"10px"}}>Position</label>
                                            <input placeholder = "Position" name = "position" style = {{marginBottom:"20px"}} className = "form-control" value = {this.state.position} onChange = {this.changePositionHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label style = {{marginBottom:"10px"}}>Department</label>
                                            <input placeholder = "Department" name = "departmentName" style = {{marginBottom:"20px"}} className = "form-control" value = {this.state.departmentName} onChange = {this.changeDepartmentHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label style = {{marginBottom:"10px"}}>Joined Date</label>
                                            <input placeholder = "Joined Date" name = "joinDate" style = {{marginBottom:"20px"}} className = "form-control" value = {this.state.joinDate} onChange = {this.changeDepartmentHandler}/>
                                        </div>
                                        <button className ="btn btn-success" onClick = {this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft:"10px"}}>Cancel</button>    
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;
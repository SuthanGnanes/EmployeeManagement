import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( responce =>{
            this.setState({employee: responce.data})
        });
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Employee Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label>Full Name : {this.state.employee.fullName}</label>
                        </div>
                        <div className = "row">
                            <label>Employee ID : {this.state.employee.id}</label>
                        </div>
                        <div className = "row">
                            <label>Salary : {this.state.employee.salary}</label>
                        </div>
                        <div className = "row">
                            <label>Position : {this.state.employee.position}</label>
                        </div>
                        <div className = "row">
                            <label>Department : {this.state.employee.departmentName}</label>
                        </div>
                        <div className = "row">
                            <label>Joined Date : {this.state.employee.joinDate}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;
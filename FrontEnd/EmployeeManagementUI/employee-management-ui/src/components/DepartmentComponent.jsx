import React, { Component } from 'react';

class DepartmentComponent extends Component {
    marketingManagement(){
        this.props.history.push('/department/marketing-management');
    }
    hrManagement()
    {
        this.props.history.push('/department/hr-management');
    }
    qa()
    {
        this.props.history.push('/department/qa');
    }
    softwareEngineering(){
        this.props.history.push('/department/software-engineering');
    }
    render() {
        return (
            <div>
                 <div className = "container">
                    <div className = "row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Departments</h3>
                                <div className="card-body"> 
                                    <button className ="btn btn-success" style = {{height:"100px", width: "250px", marginBottom:"20px", marginRight:"20px" }} onClick><h6>Marketing Management</h6></button>
                                    <button className="btn btn-primary " style = {{height:"100px", width: "250px", marginBottom:"20px" }} onClick ><h6>HR Management</h6></button><br/>
                                    <button className="btn btn-info" style = {{height:"100px", width: "250px", marginBottom:"20px",  marginRight:"20px" }} onClick ><h6>QA</h6></button> 
                                    <button className="btn btn-warning" style = {{height:"100px", width: "250px", marginBottom:"20px" }} onClick ><h6>Software Engineering</h6></button>     
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DepartmentComponent;
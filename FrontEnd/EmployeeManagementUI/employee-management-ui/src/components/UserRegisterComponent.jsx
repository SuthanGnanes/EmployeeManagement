import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserRegisterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            userType: '',
            userName: '',
            emailAddress: '',
            password: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserTypeHandler = this.changeUserTypeHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.changePasswordtHandler =this.changePasswordtHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) =>{
        e.preventDefault();
        let user = {userType:this.state.userType, userName:this.state.userName, emailAddress:this.state.emailAddress, password:this.state.password};
        console.log('user =>' +JSON.stringify(user));

      
        UserService.addUser(user).then(responce => {
            this.props.history.push('/employees');
        })
    }
        
        

    cancel(){
        this.props.history.push('/employees');
    }
    changeUserNameHandler = (event) => {
        this.setState({userName: event.target.value});
    }

    changeUserTypeHandler = (event) =>{
        this.setState({userType: event.target.value});
    }

    changeEmailAddressHandler = (event) => {
        this.setState({emailAddress: event.target.value});
    }

    changePasswordtHandler = (event) => {
        this.setState({password: event.target.value});
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">User Regisrtion Form</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group" style = {{marginBottom:"20px"}}>
                                            <label style = {{marginBottom:"10px"}}>User Type</label>
                                            <select name = "userType" className = "form-control" value = {this.state.userType} onChange = {this.changeUserTypeHandler} >
                                                <option value="admin" >Admin</option>
                                                <option value="user">User</option>                
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label style = {{marginBottom:"10px"}}>User Name</label>
                                            <input placeholder = "User Name" name = "userName" style = {{marginBottom:"20px"}} className = "form-control" value = {this.state.userName} onChange = {this.changeUserNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label style = {{marginBottom:"10px"}}>Email Address</label>
                                            <input placeholder = "Email Address" name = "emailAddress" style = {{marginBottom:"20px"}} className = "form-control" value = {this.state.emailAddress} onChange = {this.changeEmailAddressHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label style = {{marginBottom:"10px"}}>Password</label>
                                            <input type = "password" placeholder = "Password" name = "password" style = {{marginBottom:"20px"}} className = "form-control" value = {this.state.password} onChange = {this.changePasswordtHandler}/>
                                        </div>                
                                        <button className ="btn btn-success" onClick = {this.saveUser}>Register</button>
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

export default UserRegisterComponent;
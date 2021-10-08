import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className = "navbar navbar-dark bg-dark navbar-expand-md">
                        <div> 
                           <a href = "/employees" className = "navbar-brand" > Employee Management Application </a>
                        </div>
                        <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/employees">Employees</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/department">Department</a>
                                </li>
                            </ul>
                        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/Register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Login">Login</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </header> 
            </div>
        );
    }
}

export default HeaderComponent;
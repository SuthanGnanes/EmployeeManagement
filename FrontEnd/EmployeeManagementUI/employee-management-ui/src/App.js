
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UserRegisterComponent from './components/UserRegisterComponent';
import DepartmentComponent from './components/DepartmentComponent';
import ListEmployeesByDepartmentComponent from './components/ListEmployeesByDepartmentComponent';

function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path ="/" exact component = {ListEmployeesComponent}></Route>
                <Route path ="/employees" component = {ListEmployeesComponent}></Route>
                <Route path ="/add-employee" component = {CreateEmployeeComponent}></Route>
                <Route path ="/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                <Route path ="/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                <Route path ="/register" component = {UserRegisterComponent}></Route>
                <Route path ="/department" component = {DepartmentComponent}></Route>
                <Route path ="/department/:departmentName" component = {ListEmployeesByDepartmentComponent}></Route>

              </Switch>
            </div>
          <FooterComponent/>
        </div>
      </Router>
    </div>
    
  );
}

export default App;

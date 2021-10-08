package com.employee.management.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.data.dto.EmployeeDto;
import com.employee.management.data.entity.Employee;
import com.employee.management.data.mapper.Mapper;
import com.employee.management.services.EmployeeService;
import com.employee.management.util.Constants;
import com.employee.management.util.EndpointURI;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private Mapper mapper;
	
	@PostMapping(value = EndpointURI.ADD_OR_UPDATE_EMPLOYEE)
	public ResponseEntity<Object> addEmployee(@Valid @RequestBody EmployeeDto employeeDto){
		Employee employee = mapper.map(employeeDto, Employee.class);
		employeeService.createEmployee(employee);
		return new ResponseEntity<Object>(Constants.EMPLOYEE_ADD_SUCCESS, HttpStatus.OK);
	}
	
	@GetMapping(value = EndpointURI.EMPLOYEES)
	public ResponseEntity<Object> getAllEmployees(){
		return new ResponseEntity<Object>(mapper.map(employeeService.getEmployees(), EmployeeDto.class), HttpStatus.OK);
	}
	
	@GetMapping(value = EndpointURI.EMPLOYEES_BY_DEPARTMENT)
	public ResponseEntity<Object> getEmployeesByDepartment(@PathVariable(value = "departmentName") String departmentName){
		return new ResponseEntity<Object>(mapper.map(employeeService.findEmployeeByDepartment(departmentName), EmployeeDto.class), HttpStatus.OK);
	}
	
	@GetMapping(value = EndpointURI.EMPLOYEE)
	public ResponseEntity<Object> getAllEmployee(@PathVariable(value = "id") Long employeeId){
		return new ResponseEntity<Object>(mapper.map(employeeService.getEmployee(employeeId), EmployeeDto.class), HttpStatus.OK);
	}
	
	@DeleteMapping(value = EndpointURI.EMPLOYEE)
	public ResponseEntity<Object> deleteEmployee(@PathVariable(value = "id") Long employeeId){
		employeeService.deleteEmployee(employeeId);
		return new ResponseEntity<Object>(Constants.EMPLOYEE_DELETE_SUCCESS, HttpStatus.OK);
	}
	
	@PutMapping(value = EndpointURI.EMPLOYEE)
	public ResponseEntity<Object> updateEmployee(@Valid @RequestBody EmployeeDto employeeDto){
		Employee employee = mapper.map(employeeDto, Employee.class);
		employeeService.updateEmployee(employee);
		return new ResponseEntity<Object>(Constants.EMPLOYEE_UPDATED_SUCCESS, HttpStatus.OK);
	}
	
	

}

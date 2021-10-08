package com.employee.management.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.data.entity.Employee;
import com.employee.management.data.repositories.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;
	@Override
	public void createEmployee(Employee employee) {
		employeeRepository.save(employee);		
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		employeeRepository.deleteById(employeeId);
	}

	@Override
	public void updateEmployee(Employee employee) {		
		employeeRepository.save(employee);
	}

	@Override
	public List<Employee> getEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public List<Employee> findEmployeeByDepartment(String departmentName) {
		
		return employeeRepository.findByDepartmentName(departmentName);
	}

	@Override
	public Employee getEmployee(Long employeeId) {
		return employeeRepository.findById(employeeId).get();
	}

}

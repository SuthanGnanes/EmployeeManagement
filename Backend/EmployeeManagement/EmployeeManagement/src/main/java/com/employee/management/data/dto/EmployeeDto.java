package com.employee.management.data.dto;

import java.sql.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class EmployeeDto {
	private Long id;
	@NotBlank(message = "{EmployeeDto.fullName.blank}")
	@NotNull(message = "{EmployeeDto.fullName.null}")
	@NotEmpty(message = "{EmployeeDto.fullName.empty}")
	private String fullName;
//	@NotBlank(message = "{EmployeeDto.salary.blank}")
//	@NotNull(message = "{EmployeeDto.salary.null}")
//	@NotEmpty(message = "{EmployeeDto.salary.empty}")
	private double salary;
	@NotBlank(message = "{EmployeeDto.departmentName.blank}")
	@NotNull(message = "{EmployeeDto.departmentName.null}")
	@NotEmpty(message = "{EmployeeDto.departmentName.empty}")
	private String departmentName;
	@NotBlank(message = "{EmployeeDto.position.blank}")
	@NotNull(message = "{EmployeeDto.position.null}")
	@NotEmpty(message = "{EmployeeDto.position.empty}")
	private String position;
	private Date joinDate;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	
	
}

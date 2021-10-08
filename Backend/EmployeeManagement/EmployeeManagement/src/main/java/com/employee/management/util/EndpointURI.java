package com.employee.management.util;

public final class EndpointURI {
	private static final String BASE_API_PATH = "/api/v1/";
	private static final String SLASH = "/";
	
	//User
	public static final String ADD_USER = BASE_API_PATH + SLASH + "user";
	public static final String USER = BASE_API_PATH + SLASH + "user" + SLASH + "{id}";
	
	//Employee
	public static final String EMPLOYEES = BASE_API_PATH + SLASH + "employees";
	public static final String EMPLOYEES_BY_DEPARTMENT = BASE_API_PATH + SLASH + "employees"+ SLASH + "{departmentName}";
	public static final String ADD_OR_UPDATE_EMPLOYEE = BASE_API_PATH + SLASH + "employee";
	public static final String EMPLOYEE = BASE_API_PATH + SLASH + "employee" + SLASH + "{id}";
	
}
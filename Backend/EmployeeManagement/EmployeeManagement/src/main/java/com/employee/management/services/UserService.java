package com.employee.management.services;

import com.employee.management.data.entity.User;

public interface UserService {
	public void addUser(User user);
	public void updateUser(User user);
	public boolean isEmailAlreadyExist(String email);
	public boolean isUserNameAlreadyExist(String userName);
}

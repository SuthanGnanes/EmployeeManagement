package com.employee.management.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.data.entity.User;
import com.employee.management.data.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public void addUser(User user) {
		userRepository.save(user);
	}

	@Override
	public void updateUser(User user) {
		userRepository.save(user);
	}

	@Override
	public boolean isEmailAlreadyExist(String email) {
		return userRepository.existsByeMail(email);
	}

	@Override
	public boolean isUserNameAlreadyExist(String userName) {
		return userRepository.existsByUserName(userName);
	}
	
}

package com.employee.management.util;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;


@Component
@PropertySource("classpath:ValidationMessages.properties")
public class ValidationFailureStatusCodes {
	//User
	@Value("${validation.user.alreadyExists}")
	private String userNameAlreadyExists;
	
	@Value("${validation.email.alreadyExists}")
	private String emailAlreadyExists;
	
	public String getUserNameAlreadyExists() {
		return userNameAlreadyExists;
	}

	public void setUserNameAlreadyExists(String userNameAlreadyExists) {
		this.userNameAlreadyExists = userNameAlreadyExists;
	}

	public String getEmailAlreadyExists() {
		return emailAlreadyExists;
	}

	public void setEmailAlreadyExists(String emailAlreadyExists) {
		this.emailAlreadyExists = emailAlreadyExists;
	}
	
	
}

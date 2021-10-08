package com.employee.management.data.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class RegisterDto {
	private Long id;
	@NotBlank(message = "{RegisterDto.eMail.blank}")
	@NotNull(message = "{RegisterDto.eMail.null}")
	@NotEmpty(message = "{RegisterDto.eMail.empty}")
	private String eMail;
	@NotBlank(message = "{RegisterDto.userName.blank}")
	@NotNull(message = "{RegisterDto.userName.null}")
	@NotEmpty(message = "{RegisterDto.userName.empty}")
	private String userName;
	@NotBlank(message = "{RegisterDto.password.blank}")
	@NotNull(message = "{RegisterDto.password.null}")
	@NotEmpty(message = "{RegisterDto.password.empty}")
	private String password;
	private String type;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String geteMail() {
		return eMail;
	}
	public void seteMail(String eMail) {
		this.eMail = eMail;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}

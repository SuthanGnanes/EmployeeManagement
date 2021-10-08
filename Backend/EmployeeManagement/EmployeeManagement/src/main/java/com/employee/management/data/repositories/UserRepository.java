package com.employee.management.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.management.data.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	boolean existsByeMail(String email);
	boolean existsByUserName(String userName);

}

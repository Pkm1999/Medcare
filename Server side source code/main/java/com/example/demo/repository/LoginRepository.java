package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> 
{
	
	@Query("select l.role,l.lid from Login l where username= :uname and password= :pwd")
	public List<Object[]> checkLogin(String uname,String pwd);
	
	
	
	
}

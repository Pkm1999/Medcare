package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>
{
	@Query("select a from Admin a where login.lid= :id")
	public Object getObject(int id);
}

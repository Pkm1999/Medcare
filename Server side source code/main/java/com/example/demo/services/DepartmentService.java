package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Department;
import com.example.demo.repository.DepartmentRepository;

@Service
public class DepartmentService 
{
	@Autowired
	DepartmentRepository drepo;
	
	public Department saveDepartment(Department d)
	{
		return drepo.save(d);
	}

}

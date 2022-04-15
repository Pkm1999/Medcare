package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Department;
import com.example.demo.entities.DepartmentRegister;
import com.example.demo.entities.Hospital;
import com.example.demo.services.DepartmentService;
import com.example.demo.services.HospitalService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DepartmentController 
{
	@Autowired
	DepartmentService ds;
	@Autowired
	HospitalService hs;
	
	@PostMapping("/saveDepartment")
	public Department saveDepartment(@RequestBody DepartmentRegister dr)
	{
		Hospital h=hs.getHospital(dr.getHid());
		Department d=new Department(dr.getDno(),dr.getDname(), h);
		return ds.saveDepartment(d); 
		
	}
	
	

}

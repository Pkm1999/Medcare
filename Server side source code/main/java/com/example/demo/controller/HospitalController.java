package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Hospital;
import com.example.demo.entities.HospitalRegister;
import com.example.demo.entities.Login;
import com.example.demo.services.HospitalService;
import com.example.demo.services.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HospitalController 
{
	@Autowired
	HospitalService hs;
	@Autowired
	LoginService ls;
	
	@PostMapping("/saveHospital")
	public Hospital saveHospital(@RequestBody HospitalRegister hr)
	{
		Login l=new Login(hr.getEmail(), hr.getPwd(), "Hospital");
		ls.saveLogin(l);
		Hospital h=new Hospital(hr.getName(), hr.getAddress(), hr.getRatings(), l);
		return hs.saveHospital(h);
	}
	
	@GetMapping("/getHospitals")
	public List<Hospital> getAllHospitals()
	{
		return hs.getAllHospitals();
	}

}

package com.example.demo.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Doctor;
import com.example.demo.entities.DoctorRegister;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.entities.UserPayment;
import com.example.demo.services.DoctorService;
import com.example.demo.services.HospitalService;
import com.example.demo.services.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController 
{
	@Autowired
	DoctorService ds;
	@Autowired
	LoginService ls;
	
	@Autowired
	HospitalService hservice;
	
	@PostMapping("/saveDoctor")
	public Doctor saveDoctor(@RequestBody DoctorRegister dr)
	{
		System.out.println("hello");
		System.out.println("hello"+dr.getName()+" "+dr.getAddress()+" "+dr.getHid());
		Login l=new Login(dr.getUname(), dr.getPwd(), "Doctor");
		ls.saveLogin(l);
		
		Hospital h=hservice.getHospital(dr.getHid());
		
		Doctor d=new Doctor(dr.getName(), dr.getDob(), dr.getAddress(),dr.getMobile(), dr.getGender(), dr.getSpec(), dr.getEdu(), dr.getExp(),h, l);
		return ds.saveDoctor(d);
	}
	
	@GetMapping("/getDoctor")
	public Doctor getDoctor(@RequestParam int id)
	{
		return ds.getDoctor(id);
	}
	
	
	@GetMapping("/getDoctors/{id}")
	public List<Doctor> getDoctors(@PathVariable int id)
	{
		Hospital h = hservice.getHospital(id);
		return ds.getDoctors(h);
	}
}

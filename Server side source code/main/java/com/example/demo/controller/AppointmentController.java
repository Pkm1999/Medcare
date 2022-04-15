package com.example.demo.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
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

import com.example.demo.entities.Appoinment;
import com.example.demo.entities.AppointmentRequest;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.Hospital;
import com.example.demo.entities.User;
import com.example.demo.services.AppointmentService;
import com.example.demo.services.DoctorService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController 
{
	@Autowired
	AppointmentService as;
	@Autowired
	DoctorService ds;
	@Autowired
	UserService us;
	
	@GetMapping("/showAppointments/{id}")
	public List<Appoinment> getAppointments(@PathVariable int id)
	{
		User u=us.getUser(id);
		return as.showAppointments(u);
	}
	
	@GetMapping("/getAppointments/{id}/{dt}")
	public List<Appoinment> getDoctors(@PathVariable int id,@PathVariable String dt)
	{
		
		
		Doctor d=ds.getDoctor(id);
		return as.getAppointments(d, dt);
	}
	
	@PostMapping("saveAppointment")
	public Appoinment saveAppointment(@RequestBody AppointmentRequest ar)
	{
		System.out.println("---"+ar.getUid());
		System.out.println("---"+ar.getDid());
		
		Doctor d=ds.getDoctor(ar.getDid());
		User u=us.getUser(ar.getUid());
		
		Appoinment apo=new Appoinment(u, d, ar.getDate(), ar.getTime(), "Requested");
		return as.saveAppointment(apo);
	}
	
	
	@GetMapping("/getSchedule")
	public List<Appoinment> getShedule(@RequestParam int id)
	{
		Doctor d=ds.getDoctor(id);
		
		String date="2022-04-16";
		System.out.println("----------------------------"+date);
		return as.getSchedule(d, date);
	}
	
	@GetMapping("/approveAppointment")
	public List<Appoinment> getApproveAppointment(@RequestParam int id)
	{
		Doctor d=ds.getDoctor(id);
		return as.getApproveAppointment(d);
	}
	
	@GetMapping("/approve/{id}")
	public void approve(@PathVariable int id)
	{
		
		as.approve(id);
		
	}
	
	@GetMapping("/decline/{id}")
	public void decline(@PathVariable int id)
	{
		
		as.decline(id);
		
	}
	
	
	

}

package com.example.demo.controller;

import java.text.ParseException;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Consultation;
import com.example.demo.entities.ConsultationRegister;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.User;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.services.ConsultationService;
import com.example.demo.services.DoctorService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ConsultationController
{
	@Autowired
	ConsultationService cs;
	@Autowired
	UserService us;
	@Autowired
	DoctorService ds;
	
	@PostMapping("/getConsult")
	public Consultation consult(@RequestBody ConsultationRegister cr) throws ParseException
	{
		User u=us.getUser(cr.getUid());
		Doctor d=ds.getDoctor(cr.getDid());
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = sdf.parse(sdf.format(new Date()));
		Consultation c=new Consultation(cr.getSymptoms(), null, u, d, date);
		return cs.getConsult(c);
	}
	
	@GetMapping("/consultationList")
	public List<Consultation> getConsultationRequests(@RequestParam int id)
	{
		Doctor d=ds.getDoctor(id);
		return cs.getConsultationRequests(d);
	}
	
	@PostMapping("/sendResponse")
	public String sendResponse(@RequestBody ConsultationRegister cr)
	{
		cs.sendResponse(cr.getResponse(), cr.getId());
		return "Responce send successfully";
	}
	
	
	@GetMapping("/getList/{id}")
	public List<Consultation> consultationList(@PathVariable int id)
	{
		User u=us.getUser(id);
		return cs.consultationList(u);
	}
}

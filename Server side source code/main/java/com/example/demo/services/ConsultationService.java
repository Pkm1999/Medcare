package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Consultation;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.User;
import com.example.demo.repository.ConsultationRepository;

@Service
public class ConsultationService 
{
	@Autowired
	ConsultationRepository crepo;
	
	public Consultation getConsult(Consultation c)
	{
		return crepo.save(c);
	}
	
	
	public List<Consultation> getConsultationRequests(Doctor id)
	{
		return crepo.getConsultationRequests(id);
	}
	
	public void sendResponse(String response,int id)
	{
		crepo.sendResponse(response, id);
	}
	
	public List<Consultation> consultationList(User u)
	{
		return crepo.consultationList(u);
	}

}

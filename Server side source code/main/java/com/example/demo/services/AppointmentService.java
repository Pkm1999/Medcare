package com.example.demo.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Appoinment;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.User;
import com.example.demo.repository.AppointmentRepository;

@Service
public class AppointmentService 
{
	@Autowired
	AppointmentRepository arepo;
	
	public List<Appoinment> getAppointments(Doctor id,String date)
	{
		return arepo.getAppoinments(id, date);
	}
	
	public Appoinment saveAppointment(Appoinment apo)
	{
		return arepo.save(apo);
		
	}
	
	
	public List<Appoinment> showAppointments(User u)
	{
		return arepo.showAppointments(u);
	}
	
	public List<Appoinment> getSchedule(Doctor d,String date)
	{
		return arepo.getSchedule(d, date,"Approved");
	}
	
	public List<Appoinment> getApproveAppointment(Doctor d)
	{
		return arepo.getApproveAppointment(d, "Requested");
	}
	
	public void approve(int id)
	{
		arepo.approve(id, "Approved");
	}
	
	public void decline(int id)
	{
		arepo.approve(id, "Declined");
	}
	
	
	public Appoinment getAppoitnment(int id)
	{
		Optional<Appoinment> od= arepo.findById(id);
		Appoinment a = null;
		try
		{
			a = od.get();
		}
		catch(Exception e)
		{
			a=null;
		}
		return a;
	}
}

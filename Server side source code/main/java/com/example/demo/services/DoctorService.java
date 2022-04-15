package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Doctor;
import com.example.demo.entities.Hospital;
import com.example.demo.repository.DoctorRepository;

@Service
public class DoctorService 
{
	@Autowired
	DoctorRepository drepo;
	
	public Doctor saveDoctor(Doctor d)
	{
		return drepo.save(d);
	}
	
	public Doctor getDoctor(int id)
	{
		Optional<Doctor> od= drepo.findById(id);
		Doctor d = null;
		try
		{
			d = od.get();
		}
		catch(Exception e)
		{
			d=null;
		}
		return d;
	}
	
	
	public List<Doctor> getDoctors(Hospital h)
	{
		return drepo.getDoctors(h);
	}

}

package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Hospital;
import com.example.demo.repository.HospitalRepository;

@Service
public class HospitalService 
{
	@Autowired
	HospitalRepository hrepo;
	
	public Hospital saveHospital(Hospital h)
	{
		return hrepo.save(h);
		
	}
	
	public List<Hospital> getAllHospitals()
	{
		return hrepo.findAll();
	}

	
	public Hospital getHospital(int id)
	{
		return hrepo.findById(id).get();
	}
}

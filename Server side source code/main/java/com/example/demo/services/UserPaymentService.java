package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.UserPayment;
import com.example.demo.repository.UserPaymentRepository;

@Service
public class UserPaymentService {
	
	@Autowired
	UserPaymentRepository uprepo;
	
	public String savePaymentDetails(UserPayment up)
	{
		UserPayment userp=(UserPayment)uprepo.save(up);
		if(userp!=null)
		{
			return "Payments Details Added Successfully";
		}
		return "Payment details not added";
	}
	
}

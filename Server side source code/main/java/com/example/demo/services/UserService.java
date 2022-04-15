package com.example.demo.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Doctor;
import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService 
{
	@Autowired
	UserRepository urepo;
	
	public String saveUser(com.example.demo.entities.User user)
	{
		User u=(User) urepo.save(user);
		if(u!=null)
		{
			return "user successfully Added";
		}
		return "user not added";
		
		
	}
	
	public User getUser(int id)
	{
		Optional<User> os= urepo.findById(id);
		User u = null;
		try
		{
			u = os.get();
		}
		catch(Exception e)
		{
			u=null;
		}
		return u;
	}
	
}

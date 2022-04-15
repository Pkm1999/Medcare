package com.example.demo.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.entities.UserPayment;
import com.example.demo.entities.UserRegister;
import com.example.demo.services.LoginService;
import com.example.demo.services.UserPaymentService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController 
{
	@Autowired
	UserService us;
	
	@Autowired
    UserPaymentService ups;
    
	@Autowired
    LoginService ls;
	
	@PostMapping("/saveUser")
	public String addUser(@RequestBody UserRegister ur) throws ParseException
	{
		Login l=new Login(ur.getEmail(), ur.getPwd(), "User");
		ls.saveLogin(l);
		UserPayment up=new UserPayment(ur.getAccno(), ur.getAhname(), 20000);
		ups.savePaymentDetails(up);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date d = sdf.parse(sdf.format(new Date()));
		User u=new User(ur.getName(), ur.getAddress(), ur.getMobile(), ur.getAadhar(), ur.getDob(), ur.getGender(),d, l, up);
		return us.saveUser(u);
	}

}

package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.services.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController 
{
	@Autowired
	LoginService ls;
	
	@PostMapping("/login")
	public Object checkLogin(@RequestBody Login login)
	{
		return  ls.checkLogin(login.getUsername(), login.getPassword());
	}
<<<<<<< HEAD

	@PostMapping("/getPassword")
	public Login getPassword(@RequestBody Login l)
	{
		return ls.getPassword(l.getUsername());
		
	}
	
	

=======
	
	
>>>>>>> bf8da398c73ed7f1e19455a3e008e520de7f7147
}

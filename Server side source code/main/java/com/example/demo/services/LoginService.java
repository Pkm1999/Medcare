package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.repository.HospitalRepository;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.UserRepository;

@Service
public class LoginService 
{
	@Autowired
	LoginRepository lrepo;
	
	@Autowired
	UserRepository urepo;
	
	@Autowired
	HospitalRepository hrepo;
	
	@Autowired
	DoctorRepository drepo;
	
	@Autowired
	AdminRepository arepo;
	
	public String saveLogin(Login login)
	{
		Login l=(Login) lrepo.save(login);
		if(l!=null)
		{
			return "user successfully Added";
		}
		return "user not added";
		
		
	}

	
	public Object checkLogin(String uname,String pwd)
	{
		List<Object[]> l=lrepo.checkLogin(uname, pwd);
		if(l.isEmpty())
		{
			return null;
		}
		else
		{
			String role=(String) l.get(0)[0];
			int id=(int) l.get(0)[1];
			if(role.equals("User"))
			{
				//Optional<User> user=urepo.findById(id);
				//return user.get();
				return urepo.getObject(id);
			}
			else if(role.equals("Hospital"))
			{
				return hrepo.getObject(id);
			}
			else if(role.equals("Doctor"))
			{
				return drepo.getObject(id);
			}
			else if(role.equals("Admin"))
			{
				return arepo.getObject(id);
			}
			
		}
		return null;
	}
<<<<<<< HEAD

	public Login getPassword(String uname)
	{
		return lrepo.getPassword(uname);
		
	}
=======
>>>>>>> bf8da398c73ed7f1e19455a3e008e520de7f7147
	
	
	
}

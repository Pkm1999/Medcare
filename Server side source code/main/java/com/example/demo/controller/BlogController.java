package com.example.demo.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Blog;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.PublishBlog;
import com.example.demo.services.BlogService;
import com.example.demo.services.DoctorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BlogController
{
	@Autowired
	BlogService bs;
	
	@Autowired
	DoctorService ds;
	
	@GetMapping("/getBlogs")
	public List<Blog> getBlogs()
	{
		return bs.getBlogs();
	}
	
	@PostMapping("/saveBlog")
	public Blog saveBlog(@RequestBody PublishBlog pb) throws ParseException
	{
		Doctor d=ds.getDoctor(pb.getDid());
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = sdf.parse(sdf.format(new Date()));
		Blog b=new Blog(pb.getContent(), date, d);
		return bs.saveBlog(b);
	}

}

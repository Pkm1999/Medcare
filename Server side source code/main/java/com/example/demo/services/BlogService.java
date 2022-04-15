package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Blog;
import com.example.demo.repository.BlogRepository;

@Service
public class BlogService 
{
	@Autowired
	BlogRepository brepo;
	
	public List<Blog> getBlogs()
	{
		return brepo.getBlogs();
	}
	
	
	public Blog saveBlog(Blog b)
	{
		return brepo.save(b);
	}

}

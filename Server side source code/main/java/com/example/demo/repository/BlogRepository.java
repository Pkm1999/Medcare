package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Blog;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Integer> 
{
	@Query("select b from Blog b order by b.bid desc")
	public List<Blog> getBlogs();
	
}

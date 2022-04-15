package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Doctor;
import com.example.demo.entities.Hospital;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> 
{
	@Query("select d from Doctor d where hid =:id ")
	public List<Doctor> getDoctors(Hospital id);
	
	
	@Query("select d from Doctor d where login.lid= :id")
	public Object getObject(int id);

}

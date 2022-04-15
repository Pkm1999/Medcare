package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Consultation;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.User;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Integer> 
{
	@Query("select c from Consultation c where did= :id and response is null")
	public List<Consultation > getConsultationRequests(Doctor id);
	
	@Transactional
	@Modifying
	@Query("update Consultation set response= :response where id= :id")
	public void sendResponse(String response,int id);

	@Query("select c from Consultation c where uid= :id order by id desc ")
	public List<Consultation> consultationList(User id);
}

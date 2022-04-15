package com.example.demo.repository;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Appoinment;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.User;

@Repository
public interface AppointmentRepository extends JpaRepository<Appoinment, Integer> 
{
	@Query("select a from Appoinment a where did= :id and date= :date")
	public List<Appoinment> getAppoinments(Doctor id,String date);
	
	@Query("select a from Appoinment a where uid= :u")
	public List<Appoinment> showAppointments(User u);
	
	
	@Query("select a from Appoinment a where did= :d and date= :date and status= :status")
	public List<Appoinment> getSchedule(Doctor d,String date,String status);
	
	@Query("select a from Appoinment a where did= :d and status= :status")
	public List<Appoinment> getApproveAppointment(Doctor d,String status);
	
	@Transactional
	@Modifying
	@Query("update Appoinment set status= :status where id= :id")
	public void approve(int id,String status);
	
	@Transactional
	@Modifying
	@Query("update Appoinment set status= :status where id= :id")
	public void decline(int id,String status);

}

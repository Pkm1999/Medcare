package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="appointments")
public class Appoinment 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Aid")
	int id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Uid")
	User uid;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Did")
	Doctor did;
	@Column(name="Date")
	String date;
	@Column(name="Time")
	String time;
	@Column(name="Status")
	String status;
	
	public Appoinment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Appoinment(User uid, Doctor did, String date, String time, String status) {
		super();
		this.uid = uid;
		this.did = did;
		this.date = date;
		this.time = time;
		this.status = status;
	}
	
	

	public Appoinment(User uid, Doctor did, String date, String time) {
		super();
		this.uid = uid;
		this.did = did;
		this.date = date;
		this.time = time;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUid() {
		return uid;
	}

	public void setUid(User uid) {
		this.uid = uid;
	}

	public Doctor getDid() {
		return did;
	}

	public void setDid(Doctor did) {
		this.did = did;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	

}

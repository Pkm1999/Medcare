package com.example.demo.entities;

import java.util.Date;

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
@Table(name="consultations")
public class Consultation 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cid")
	int id;
	@Column(name="Symptoms")
	String symptoms;
	@Column(name="Response")
	String response;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Uid")
	User uid;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Did")
	Doctor did;
	@Column(name="Date")
	Date date;
	public Consultation() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Consultation(String symptoms, User uid, Doctor did, Date date) {
		super();
		this.symptoms = symptoms;
		this.uid = uid;
		this.did = did;
		this.date = date;
	}

	public Consultation(String symptoms, String response, User uid, Doctor did, Date date) {
		super();
		this.symptoms = symptoms;
		this.response = response;
		this.uid = uid;
		this.did = did;
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSymptoms() {
		return symptoms;
	}
	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}
	public String getResponse() {
		return response;
	}
	public void setResponse(String response) {
		this.response = response;
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
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	
}

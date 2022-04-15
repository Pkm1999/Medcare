package com.example.demo.entities;

public class ConsultationRegister 
{
	int id;
	int uid;
	int did;
	String symptoms;
	String response;
	
	public ConsultationRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

	public ConsultationRegister(int id, String response) {
		super();
		this.id = id;
		this.response = response;
	}





	public ConsultationRegister(int uid, int did, String symptoms) {
		super();
		this.uid = uid;
		this.did = did;
		this.symptoms = symptoms;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}





	public int getId() {
		return id;
	}





	public void setId(int id) {
		this.id = id;
	}





	public String getResponse() {
		return response;
	}





	public void setResponse(String response) {
		this.response = response;
	}
	
	
	

}

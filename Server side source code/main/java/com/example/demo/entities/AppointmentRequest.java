package com.example.demo.entities;

public class AppointmentRequest 
{
	int uid;
	int did;
	String date;
	String time;
	
	public AppointmentRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public AppointmentRequest(int uid, int did, String date, String time) {
		super();
		this.uid = uid;
		this.did = did;
		this.date = date;
		this.time = time;
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
	
	

}

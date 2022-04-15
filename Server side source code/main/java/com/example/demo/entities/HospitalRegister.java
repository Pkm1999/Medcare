package com.example.demo.entities;

public class HospitalRegister 
{
	private String name;
	private String address;
	private double ratings;
	private String email;
	private String pwd;
	
	public HospitalRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public HospitalRegister(String name, String address, double ratings, String email, String pwd) {
		super();
		this.name = name;
		this.address = address;
		this.ratings = ratings;
		this.email = email;
		this.pwd = pwd;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getRatings() {
		return ratings;
	}
	public void setRatings(double ratings) {
		this.ratings = ratings;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	

}

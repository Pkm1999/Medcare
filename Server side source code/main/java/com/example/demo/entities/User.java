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
@Table(name="users")
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="uid")
	int id;
	@Column(name="Name")
	String name;
	@Column(name="Address")
	String address;
	@Column(name="Mobile")
	String contact;
	@Column(name="Aadharno")
	String aadhar;
	@Column(name="Dob")
	String dob;
	@Column(name="Gender")
	String gender;
	@Column(name="Date")
	Date date;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Lid")
	Login login;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Pid")
	UserPayment up;
	
	public User() {
		super();
	}
	
	public User(String name, String address, String contact, String aadhar, String dob, String gender,
			Date date, Login login, UserPayment up) {
		super();
		this.name = name;
		this.address = address;
		this.contact = contact;
		this.aadhar = aadhar;
		this.dob = dob;
		this.gender = gender;
		this.date = date;
		this.login = login;
		this.up = up;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	
	public String getAadhar() {
		return aadhar;
	}
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	public UserPayment getUp() {
		return up;
	}
	public void setUp(UserPayment up) {
		this.up = up;
	}
	
	
	
	
	
	

}

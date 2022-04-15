package com.example.demo.entities;

import java.util.Date;

public class UserRegister 
{
	String name;
	String address;
	String mobile;
	String email;
	String aadhar;
	String dob;
	String gender;
	Date date;
	String pwd;
	String accno;
	String ahname;
	
	public UserRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserRegister(String name, String address, String mobile, String email, String aadhar, String dob,
			String gender, Date date, String pwd, String accno, String ahname) {
		super();
		this.name = name;
		this.address = address;
		this.mobile = mobile;
		this.email = email;
		this.aadhar = aadhar;
		this.dob = dob;
		this.gender = gender;
		this.date = date;
		
		this.pwd = pwd;
		this.accno = accno;
		this.ahname = ahname;
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

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getAccno() {
		return accno;
	}

	public void setAccno(String accno) {
		this.accno = accno;
	}

	public String getAhname() {
		return ahname;
	}

	public void setAhname(String ahname) {
		this.ahname = ahname;
	}
	
	
	
	
}

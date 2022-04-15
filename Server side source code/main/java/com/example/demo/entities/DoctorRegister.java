package com.example.demo.entities;

public class DoctorRegister
{
	String name;
	String dob;
	String address;
	String mobile;
	String gender;
	String spec;
	String edu;
	double exp;
	String uname;
	String pwd;
	int hid;
	
	public DoctorRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DoctorRegister(String name, String dob, String address, String mobile, String gender, String spec,
			String edu, double exp, String uname, String pwd, int hid) {
		super();
		this.name = name;
		this.dob = dob;
		this.address = address;
		this.mobile = mobile;
		this.gender = gender;
		this.spec = spec;
		this.edu = edu;
		this.exp = exp;
		this.uname = uname;
		this.pwd = pwd;
		this.hid = hid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getSpec() {
		return spec;
	}

	public void setSpec(String spec) {
		this.spec = spec;
	}

	public String getEdu() {
		return edu;
	}

	public void setEdu(String edu) {
		this.edu = edu;
	}

	public double getExp() {
		return exp;
	}

	public void setExp(double exp) {
		this.exp = exp;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}
	
	
	

}

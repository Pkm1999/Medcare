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
@Table(name="doctors")
public class Doctor 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Drid")
	private int id;
	@Column(name="Name")
	private String name;
	@Column(name="Dob")
	private String dob;
	@Column(name="Address")
	private String address;
	@Column(name="Mobile")
	private String mobial;
	@Column(name="Gender")
	private String gender;
	@Column(name="Specilization")
	private String specilization;
	@Column(name="Education")
	private String education;
	@Column(name="Experience")
	private double experience;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Hid")
	Hospital hid;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Lid")
	Login login;
	
	public Doctor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Doctor(String name, String dob, String address, String mobial, String gender, String specilization,
			String education, double experience, Hospital hid, Login login) {
		super();
		this.name = name;
		this.dob = dob;
		this.address = address;
		this.mobial = mobial;
		this.gender = gender;
		this.specilization = specilization;
		this.education = education;
		this.experience = experience;
		this.hid = hid;
		this.login = login;
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

	public String getMobial() {
		return mobial;
	}

	public void setMobial(String mobial) {
		this.mobial = mobial;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getSpecilization() {
		return specilization;
	}

	public void setSpecilization(String specilization) {
		this.specilization = specilization;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public double getExperience() {
		return experience;
	}

	public void setExperience(double experience) {
		this.experience = experience;
	}

	public Hospital getHid() {
		return hid;
	}

	public void setHid(Hospital hid) {
		this.hid = hid;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login lid) {
		this.login = lid;
	}
	
	

}

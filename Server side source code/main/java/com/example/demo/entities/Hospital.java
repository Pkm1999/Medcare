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
@Table(name="hospitals")
public class Hospital 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Hid")
	private int hid;
	@Column(name="Name")
	private String name;
	@Column(name="Address")
	private String address;
	@Column(name="Ratings")
	private double rating;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Lid")
	Login login;
	
	public Hospital() {
		super();
	}

	public Hospital(String name, String address, double rating, Login login) {
		super();
		this.name = name;
		this.address = address;
		this.rating = rating;
		this.login = login;
	}

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
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

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}
	
	
	
	

}

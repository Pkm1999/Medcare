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
@Table(name="admin")
public class Admin 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Aid")
	int id;
	@Column(name="Name")
	String name;
	@Column(name="Contact")
	String contact;
	@Column(name="Address")
	String address;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Lid")
	Login login;
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Admin(String name, String contact, String address, Login login) {
		super();
		this.name = name;
		this.contact = contact;
		this.address = address;
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
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	
	

}

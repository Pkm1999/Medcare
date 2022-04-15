package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payments_details")
public class UserPayment 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Pid")
	int id;
	@Column(name="Accno")
	String ano;
	@Column(name="Name")
	String name;
	@Column(name="Amount_paid")
	double payment;
	public UserPayment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserPayment(String ano, String name, double payment) {
		super();
		this.ano = ano;
		this.name = name;
		this.payment = payment;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAno() {
		return ano;
	}
	public void setAno(String ano) {
		this.ano = ano;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPayment() {
		return payment;
	}
	public void setPayment(double payment) {
		this.payment = payment;
	}
	
	
	
	
	
	
	

}

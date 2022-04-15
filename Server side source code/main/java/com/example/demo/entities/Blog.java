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
@Table(name="blogs")
public class Blog 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Bid")
	int bid;
	@Column(name="Content")
	String content;
	@Column(name="Date")
	Date date;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Did")
	Doctor dr;
	
	public Blog() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Blog(String content, Date date, Doctor dr) {
		super();
		this.content = content;
		this.date = date;
		this.dr = dr;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Doctor getDr() {
		return dr;
	}

	public void setDr(Doctor dr) {
		this.dr = dr;
	}
	
	
	
	
}

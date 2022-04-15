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
@Table(name="departments")
public class Department
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Did")
	int id;
	@Column(name="Deptno")
	int dno;
	@Column(name="Deptname")
	String dname;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Hid")
	Hospital hospital;
	
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Department(int dno, String dname, Hospital hospital) {
		super();
		this.dno = dno;
		this.dname = dname;
		this.hospital = hospital;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getDno() {
		return dno;
	}

	public void setDno(int dno) {
		this.dno = dno;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}
	
	

}

package com.example.demo.entities;

public class DepartmentRegister 
{
	int dno;
	String dname;
	int hid;
	public DepartmentRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	public DepartmentRegister(int dno, String dname, int hid) {
		super();
		this.dno = dno;
		this.dname = dname;
		this.hid = hid;
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
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	
	

}

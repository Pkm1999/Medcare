package com.example.demo.entities;

public class PublishBlog 
{
	int did;
	String content;
	
	public PublishBlog() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public PublishBlog(int did, String content) {
		super();
		this.did = did;
		this.content = content;
	}
	
	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	

}

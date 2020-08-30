package com.example.mvinsurance.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "valuator")
public class Valuator {

@Id
@Column(name = "valuatorid")
public String valuatorid;
public String fname;
public String mname;
public String sname;
public String workaddr;
public int valuatorno;

//@OneToMany(mappedBy = "val1",cascade = CascadeType.ALL)
//private List<Valuations> valu;


public String getFname() {
	return fname;
}

public void setFname(String fname) {
	this.fname = fname;
}

public String getMname() {
	return mname;
}

public void setMname(String mname) {
	this.mname = mname;
}

public String getSname() {
	return sname;
}

public void setSname(String sname) {
	this.sname = sname;
}

public String getWorkaddr() {
	return workaddr;
}

public void setWorkaddr(String workaddr) {
	this.workaddr = workaddr;
}

public int getValuatorno() {
	return valuatorno;
}

public void setValuatorno(int valuatorno) {
	this.valuatorno = valuatorno;
}

//public List<Valuations> getValu() {
//	return valu;
//}
//
//public void setValu(List<Valuations> valu) {
//	this.valu = valu;
//}

public String getValuatorid() {
	return valuatorid;
}

public void setValuatorid(String valuatorid) {
	this.valuatorid = valuatorid;
}





}


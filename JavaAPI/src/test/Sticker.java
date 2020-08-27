package test;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Sticker {

@Id	
String policyno;
String fname;
String sname;
String date;
String expir;
String regno;
String name;
String sign;
String type;
String use;
String cert;
public String getPolicyno() {
	return policyno;
}
public void setPolicyno(String policyno) {
	this.policyno = policyno;
}
public String getFname() {
	return fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public String getSname() {
	return sname;
}
public void setSname(String sname) {
	this.sname = sname;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public String getExpir() {
	return expir;
}
public void setExpir(String expir) {
	this.expir = expir;
}
public String getRegno() {
	return regno;
}
public void setRegno(String regno) {
	this.regno = regno;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getSign() {
	return sign;
}
public void setSign(String sign) {
	this.sign = sign;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public String getUse() {
	return use;
}
public void setUse(String use) {
	this.use = use;
}
public String getCert() {
	return cert;
}
public void setCert(String cert) {
	this.cert = cert;
}



}

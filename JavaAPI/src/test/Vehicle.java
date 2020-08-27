package test;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Vehicle {
	
	@Id 
String vrno;
int natid;
String vehType;
String model;
int yom;
int enginecc;
String bodytype;
int cost;
int ownerid;
String ownerfname;
String ownerlname;
String hpccomp;
String use;


public String getVrno() {
	return vrno;
}
public void setVrno(String vrno) {
	this.vrno = vrno;
}
public int getNatid() {
	return natid;
}
public void setNatid(int natid) {
	this.natid = natid;
}
public String getVehType() {
	return vehType;
}
public void setVehType(String vehType) {
	this.vehType = vehType;
}
public String getModel() {
	return model;
}
public void setModel(String model) {
	this.model = model;
}
public int getYom() {
	return yom;
}
public void setYom(int yom) {
	this.yom = yom;
}
public int getEnginecc() {
	return enginecc;
}
public void setEnginecc(int enginecc) {
	this.enginecc = enginecc;
}
public String getBodytype() {
	return bodytype;
}
public void setBodytype(String bodytype) {
	this.bodytype = bodytype;
}
public int getCost() {
	return cost;
}
public void setCost(int cost) {
	this.cost = cost;
}
public int getOwnerid() {
	return ownerid;
}
public void setOwnerid(int ownerid) {
	this.ownerid = ownerid;
}
public String getOwnerfname() {
	return ownerfname;
}
public void setOwnerfname(String ownerfname) {
	this.ownerfname = ownerfname;
}
public String getOwnerlname() {
	return ownerlname;
}
public void setOwnerlname(String ownerlname) {
	this.ownerlname = ownerlname;
}
public String getHpccomp() {
	return hpccomp;
}
public void setHpccomp(String hpccomp) {
	this.hpccomp = hpccomp;
}
public String getUse() {
	return use;
}
public void setUse(String use) {
	this.use = use;
}
	
}

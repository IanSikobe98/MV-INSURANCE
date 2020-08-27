package test;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Profile {

	@Id
	int natid;
	String fname;
	String mname;
	String sname;
	String gender;
	String poa;
	String pha;
	String ga;
	int phonenumber;
	String occupation;
	String town;
	String dob;
	public int getNatid() {
		return natid;
	}
	public void setNatid(int natid) {
		this.natid = natid;
	}
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPoa() {
		return poa;
	}
	public void setPoa(String poa) {
		this.poa = poa;
	}
	public String getPha() {
		return pha;
	}
	public void setPha(String pha) {
		this.pha = pha;
	}
	public String getGa() {
		return ga;
	}
	public void setGa(String ga) {
		this.ga = ga;
	}
	public int getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(int phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getTown() {
		return town;
	}
	public void setTown(String town) {
		this.town = town;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	
}

package com.example.mvinsurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="proposer")
public class Proposer {
	
	@Id
	@Column(name = "Natid")
	  public int NationalID;  
	
	@Column(name = "Fname")
	  public String Firstname; 
	
	@Column(name = "Mname")
	  public String Middlenames ;   
	
	@Column(name = "Sname")
	  public String Surname  ;  
	
	@Column(name = "Gender")
	  public String Gender  ; 
	
	@Column(name = "Poa")
	  public String Postaladdress      ; 
	

	
	@Column(name = "Phonenumber")
	  public int Phonenumber  ;
	
	@Column(name = "Occupation")
	  public String Occupation ;  
	
	@Column(name = "Town")
	  public String Town       ;

	public int getNationalID() {
		return NationalID;
	}

	public void setNationalID(int nationalID) {
		NationalID = nationalID;
	}

	public String getFirstname() {
		return Firstname;
	}

	public void setFirstname(String firstname) {
		Firstname = firstname;
	}

	public String getMiddlenames() {
		return Middlenames;
	}

	public void setMiddlenames(String middlenames) {
		Middlenames = middlenames;
	}

	public String getSurname() {
		return Surname;
	}

	public void setSurname(String surname) {
		Surname = surname;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getPostaladdress() {
		return Postaladdress;
	}

	public void setPostaladdress(String postaladdress) {
		Postaladdress = postaladdress;
	}


	public int getPhonenumber() {
		return Phonenumber;
	}

	public void setPhonenumber(int phonenumber) {
		Phonenumber = phonenumber;
	}

	public String getOccupation() {
		return Occupation;
	}

	public void setOccupation(String occupation) {
		Occupation = occupation;
	}

	public String getTown() {
		return Town;
	}

	public void setTown(String town) {
		Town = town;
	}
}

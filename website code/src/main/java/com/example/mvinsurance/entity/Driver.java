package com.example.mvinsurance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.opencsv.bean.CsvBindByPosition;

@Entity
@Table(name="driver")
public class Driver {
	
	@Id
//	@CsvBindByPosition(position = 11)
	@Column(name = "Driverno")
	public String Driverno;
	
//	@CsvBindByPosition(position = 0)
	@Column(name = "Licenceno")
	public String Licenceno  ;    
	
//	@CsvBindByPosition(position = 1)
	@Column(name = "Regno")
	public String Regno ; 
	
//	@CsvBindByPosition(position = 2)
	@Column(name = "Experience")
	public  int Experience;    
	
//	@CsvBindByPosition(position = 3)
	@Column(name = "Ohterdriver")
	public String   Multipledrivers;         
	
//	@CsvBindByPosition(position = 4)
	@Column(name = "Sickness")
	public String Ailmentstatus;         
	
//	@CsvBindByPosition(position = 5)
	@Column(name = "Conviction")
	public String  Conviction;         
	
//	@CsvBindByPosition(position = 6)
	@Column(name = "Licencedate")
	public String Licencedate;     
	 
//	@CsvBindByPosition(position = 7)
	@Column(name = "Accident")
	  public String Accident ;       
	      
//	@CsvBindByPosition(position = 8)
	@Column(name = "Previns")
	   public String DeclinedProposal ;        
	
//	@CsvBindByPosition(position = 9)
	@Column(name = "Previns1")
	   public String IncreasedPremium;         
	   
//	@CsvBindByPosition(position = 10)
	@Column(name = "Previns2")
	   public String Declinedhonorclaim ;

	public String getDriverno() {
		return Driverno;
	}

	public void setDriverno(String driverno) {
		Driverno = driverno;
	}

	public String getLicenceno() {
		return Licenceno;
	}

	public void setLicenceno(String licenceno) {
		Licenceno = licenceno;
	}

	public String getRegno() {
		return Regno;
	}

	public void setRegno(String regno) {
		Regno = regno;
	}

	public int getExperience() {
		return Experience;
	}

	public void setExperience(int experience) {
		Experience = experience;
	}

	public String getMultipledrivers() {
		return Multipledrivers;
	}

	public void setMultipledrivers(String multipledrivers) {
		Multipledrivers = multipledrivers;
	}

	public String getAilmentstatus() {
		return Ailmentstatus;
	}

	public void setAilmentstatus(String ailmentstatus) {
		Ailmentstatus = ailmentstatus;
	}

	public String getConviction() {
		return Conviction;
	}

	public void setConviction(String conviction) {
		Conviction = conviction;
	}

	public String getLicencedate() {
		return Licencedate;
	}

	public void setLicencedate(String licencedate) {
		Licencedate = licencedate;
	}

	public String getAccident() {
		return Accident;
	}

	public void setAccident(String accident) {
		Accident = accident;
	}

	public String getDeclinedProposal() {
		return DeclinedProposal;
	}

	public void setDeclinedProposal(String declinedProposal) {
		DeclinedProposal = declinedProposal;
	}

	public String getIncreasedPremium() {
		return IncreasedPremium;
	}

	public void setIncreasedPremium(String increasedPremium) {
		IncreasedPremium = increasedPremium;
	}

	public String getDeclinedhonorclaim() {
		return Declinedhonorclaim;
	}

	public void setDeclinedhonorclaim(String declinedhonorclaim) {
		Declinedhonorclaim = declinedhonorclaim;
	}



}

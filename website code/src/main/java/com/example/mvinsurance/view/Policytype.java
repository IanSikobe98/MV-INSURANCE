package com.example.mvinsurance.view;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="policytype")
public class Policytype {
    
	@Id
	@Column(name = "Type")
	public String type;
	@Column(name = "Insuredno")
	public int insuredno;
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getInsuredno() {
		return insuredno;
	}
	public void setInsuredno(int insuredno) {
		this.insuredno = insuredno;
	}
	
}

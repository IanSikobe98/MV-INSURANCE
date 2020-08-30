package com.example.mvinsurance.view;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="valuapen")
public class Valuapol1 {

	
	public String getValuation() {
		return valuation;
	}

	public void setValuation(String valuation) {
		this.valuation = valuation;
	}






	@Column(name ="valuation")
	public String valuation;
	@Id
	@Column(name ="policyno")
	public String policyno;
	
	public String getPolicytype() {
		return policytype;
	}

	public void setPolicytype(String policytype) {
		this.policytype = policytype;
	}



	@Column(name ="policytype")
	public String policytype;

	public String getPolicyno() {
		return policyno;
	}

	public void setPolicyno(String policyno) {
		this.policyno = policyno;
	}	
	
	
	
}

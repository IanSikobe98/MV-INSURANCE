package com.example.mvinsurance.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="policies")
@JsonIgnoreProperties({ "valua" })
public class Policies {

	@Id
	@Column(name = "policyno")
	public String policyno;	
	public String regno;
	public String issuedate;
	public String valuation;

	public String policytype;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "policyno", referencedColumnName = "policyno")
	private Valuations valua;


	public Valuations getValua() {
		return valua;
	}

	public void setValua(Valuations valua) {
		this.valua = valua;
	}

	public String getPolicyno() {
		return policyno;
	}

	public void setPolicyno(String policyno) {
		this.policyno = policyno;
	}

	public String getRegno() {
		return regno;
	}

	public void setRegno(String regno) {
		this.regno = regno;
	}



	public String getValuation() {
		return valuation;
	}

	public void setValuation(String valuation) {
		this.valuation = valuation;
	}




	public String getIssuedate() {
		return issuedate;
	}

	public void setIssuedate(String issuedate) {
		this.issuedate = issuedate;
	}

	public String getPolicytype() {
		return policytype;
	}

	public void setPolicytype(String policytype) {
		this.policytype = policytype;
	}




	

}

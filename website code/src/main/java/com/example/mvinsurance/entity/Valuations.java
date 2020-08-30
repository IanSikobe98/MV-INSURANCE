package com.example.mvinsurance.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "valuations")
public class Valuations {
	@Id
	@Column(name = "policyno")
	public String policyno;
	public int valuationvalue;
	
	public String valuatorid;
	
	
	
	@OneToOne(mappedBy = "valua")
    public Policies pol1;
	
//	(fetch =FetchType.LAZY)
//	@ManyToOne
//	@JoinColumn(name="valuatorid" ,nullable=false)
//	public Valuator val1;


	
//	public Valuator getVal1() {
//		return val1;
//	}
//	public void setVal1(Valuator val1) {
//		this.val1 = val1;
//	}
	public String getPolicyno() {
		return policyno;
	}
	public void setPolicyno(String policyno) {
		this.policyno = policyno;
	}
	public int getValuationvalue() {
		return valuationvalue;
	}
	public void setValuationvalue(int valuationvalue) {
		this.valuationvalue = valuationvalue;
	}
	public Policies getPol1() {
		return pol1;
	}
	public void setPol1(Policies pol1) {
		this.pol1 = pol1;
	}
	public String getValuatorid() {
		return valuatorid;
	}
	public void setValuatorid(String valuatorid) {
		this.valuatorid = valuatorid;
	}


}

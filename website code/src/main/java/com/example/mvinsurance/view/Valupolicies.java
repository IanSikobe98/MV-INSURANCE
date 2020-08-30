package com.example.mvinsurance.view;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="valupolicies")
public class Valupolicies {

@Id
@Column(name ="Valuationstatus")
public String valuationstatus;

@Column(name ="Policiesno")
public int policiesno;

public String getValuationstatus() {
	return valuationstatus;
}

public void setValuationstatus(String valuationstatus) {
	this.valuationstatus = valuationstatus;
}

public int getPoliciesno() {
	return policiesno;
}

public void setPoliciesno(int policiesno) {
	this.policiesno = policiesno;
}

	
}

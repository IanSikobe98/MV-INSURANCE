package test;

import javax.persistence.Entity;

@Entity
public class Payment {

	int Natid;
	String Regno; 
	String policyno; 
	String Transno ;
	int Amount ;  
	String  Date ;
	
	public int getNatid() {
		return Natid;
	}
	public void setNatid(int natid) {
		Natid = natid;
	}
	public String getRegno() {
		return Regno;
	}
	public void setRegno(String regno) {
		Regno = regno;
	}
	public String getPolicyno() {
		return policyno;
	}
	public void setPolicyno(String policyno) {
		this.policyno = policyno;
	}
	public String getTransno() {
		return Transno;
	}
	public void setTransno(String transno) {
		Transno = transno;
	}
	public int getAmount() {
		return Amount;
	}
	public void setAmount(int amount) {
		Amount = amount;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
}

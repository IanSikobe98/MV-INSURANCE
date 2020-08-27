package test;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Policy {
	String regno;
	@Id 
	String polno;
	 int amount;
	 String issue;
	 String model;
	 String type;
	 String gar;
	 String stat1;
	 String Vtype;
	 public int getNatid() {
		return natid;
	}
	public void setNatid(int natid) {
		this.natid = natid;
	}
	int natid;



	public String getRegno() {
		return regno;
	}
	public void setRegno(String regno) {
		this.regno = regno;
	}
	public String getPolno() {
		return polno;
	}
	public void setPolno(String polno) {
		this.polno = polno;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getIssue() {
		return issue;
	}
	public void setIssue(String issue) {
		this.issue = issue;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getGar() {
		return gar;
	}
	public void setGar(String gar) {
		this.gar = gar;
	}
	public String getStat1() {
		return stat1;
	}
	public void setStat1(String stat1) {
		this.stat1 = stat1;
	}
	public String getVtype() {
		return Vtype;
	}
	public void setVtype(String vtype) {
		Vtype = vtype;
	}

}

package com.example.mvinsurance.view;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="experience")
public class Experience {
    @Id
	@Column(name = "Experience")
	public int experience;
	@Column(name = "Drivers")
	public int drivers;
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public int getDrivers() {
		return drivers;
	}
	public void setDrivers(int drivers) {
		this.drivers = drivers;
	}
}

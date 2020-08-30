package com.example.mvinsurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mvinsurance.entity.Driver;


	@Repository
	public interface Driverrepo extends JpaRepository<Driver, Long>{

	}

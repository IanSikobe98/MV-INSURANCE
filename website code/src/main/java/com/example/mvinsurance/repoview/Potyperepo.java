package com.example.mvinsurance.repoview;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mvinsurance.view.Policytype;


@Repository
public interface Potyperepo extends JpaRepository<Policytype, Long>{
	

	}

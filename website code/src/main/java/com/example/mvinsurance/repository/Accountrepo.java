package com.example.mvinsurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mvinsurance.entity.Proposer;
@Repository
public interface Accountrepo extends JpaRepository<Proposer,Long>{
	
}

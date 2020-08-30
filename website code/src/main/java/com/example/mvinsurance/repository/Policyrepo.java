package com.example.mvinsurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mvinsurance.entity.Policies;


@Repository
public interface Policyrepo extends JpaRepository<Policies, Long>{

}

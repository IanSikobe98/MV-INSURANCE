package com.example.mvinsurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mvinsurance.entity.Valuations;

@Repository
public interface Valuationsrepo extends JpaRepository<Valuations, Long>{

}

package com.example.mvinsurance.repoview;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.mvinsurance.view.Valupolicies;



@Repository
public interface Valporepo extends JpaRepository<Valupolicies, Long>{

}
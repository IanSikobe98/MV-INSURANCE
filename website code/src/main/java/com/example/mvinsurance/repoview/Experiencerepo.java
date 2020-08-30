package com.example.mvinsurance.repoview;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mvinsurance.view.Experience;

@Repository
public interface Experiencerepo extends JpaRepository<Experience, Long>{

}

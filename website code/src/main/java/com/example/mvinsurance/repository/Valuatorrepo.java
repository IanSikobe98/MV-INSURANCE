package com.example.mvinsurance.repository;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;

	import com.example.mvinsurance.entity.Valuator;

	@Repository
	public interface Valuatorrepo extends JpaRepository<Valuator, Long>{

	}

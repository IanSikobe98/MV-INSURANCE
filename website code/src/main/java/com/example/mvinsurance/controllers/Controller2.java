package com.example.mvinsurance.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.mvinsurance.entity.Policies;
import com.example.mvinsurance.entity.Valuations;
import com.example.mvinsurance.entity.Valuator;
import com.example.mvinsurance.repository.Policyrepo;
import com.example.mvinsurance.repository.Valuationsrepo;
import com.example.mvinsurance.repository.Valuatorrepo;
import com.example.mvinsurance.repoview.Experiencerepo;
import com.example.mvinsurance.repoview.Potyperepo;
import com.example.mvinsurance.repoview.Valporepo;
import com.example.mvinsurance.repoview.Valuapol1repo;
import com.example.mvinsurance.view.Experience;
import com.example.mvinsurance.view.Policytype;
import com.example.mvinsurance.view.Valuapol1;
import com.example.mvinsurance.view.Valupolicies;


@RestController
public class Controller2 {
	
	 private Policyrepo policyrepo;
	 private Experiencerepo experiencerepo;
	 private Valporepo valporepo;
	 private Potyperepo potyerepo;
	 private Valuatorrepo valuatorrepo;
	 private Valuapol1repo valuapol1repo;
	 
	 
	
	


		@Autowired
		public Controller2(Policyrepo policyrepo,Experiencerepo experiencerepo,Valporepo valporepo,Potyperepo potyerepo,Valuatorrepo valuatorrepo, Valuapol1repo valuapol1repo) 
		{
		this.policyrepo = policyrepo;
		this.experiencerepo = experiencerepo;
		this.valporepo = valporepo;
		this.potyerepo = potyerepo;
		this.valuatorrepo = valuatorrepo; 
		this.valuapol1repo =valuapol1repo;
		
		}	
	
	
//		 @Query("SELECT policyno FROM policies WHERE policyno = 1234")
	  @GetMapping("/experience")
	  List<Experience> all() {
		  List<Experience> readingList = experiencerepo.findAll();
	    return readingList;
	  }
	
	  @GetMapping("/valuations")
	  List<Valupolicies> getvaluations() {
		  List<Valupolicies> readingList2 =valporepo.findAll();
	    return readingList2;
	  }
	  
	  @GetMapping("/type")
	  List<Policytype> getptypes() {
		  List<Policytype> readingList3 =potyerepo.findAll();
	    return readingList3;
	  }

	  @GetMapping("/policies")
	  List<Policies> getpolicies() {
		  List<Policies> readingList4 =policyrepo.findAll();
	    return readingList4;
	  }

	  @GetMapping("/valuators")
	  List<Valuator> getvaluators() {
		  List<Valuator> readingList5 =valuatorrepo.findAll();
	    return readingList5;
	  }
	  @GetMapping("/polpen")
	  List<Valuapol1> getvaluationspen() {
		  List<Valuapol1> readingList6 =valuapol1repo.findAll();
	    return readingList6;
	  }
}
	


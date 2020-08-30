package com.example.mvinsurance.controllers;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.mvinsurance.entity.Driver;
import com.example.mvinsurance.entity.Policies;
import com.example.mvinsurance.entity.Proposer;
import com.example.mvinsurance.entity.Valuations;
import com.example.mvinsurance.entity.Valuator;
import com.example.mvinsurance.repository.Accountrepo;
import com.example.mvinsurance.repository.Driverrepo;
import com.example.mvinsurance.repository.Policyrepo;
import com.example.mvinsurance.repository.Valuationsrepo;
import com.example.mvinsurance.repository.Valuatorrepo;
import com.example.mvinsurance.repoview.Experiencerepo;
import com.example.mvinsurance.view.Experience;
import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.opencsv.exceptions.CsvDataTypeMismatchException;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;

@Controller	
@RequestMapping(value = "/")
public class MainController {
	
	private Valuationsrepo valuationsrepo;
	private Valuatorrepo valuatorrepo;
	private Policyrepo policyrepo;
	private Driverrepo driverrepo;
	private Experiencerepo experiencerepo;
	private Accountrepo accountrepo;
	
	@Autowired
	public MainController(Accountrepo accountrepo,Driverrepo driverrepo,Valuationsrepo valuationsrepo, Valuatorrepo valuatorrepo,Policyrepo policyrepo,Experiencerepo experiencerepo ) {
		this.valuationsrepo = valuationsrepo;
		this.valuatorrepo = valuatorrepo;
		this.policyrepo = policyrepo;
		this.experiencerepo = experiencerepo;
		this.driverrepo=driverrepo;
		this.accountrepo=accountrepo;
	}
	
	@RequestMapping(value = "/valuation form", method = RequestMethod.GET)//it sends ra request that if one types /welcome in browser result is the return value
	public String valuationform(Model model) {
		
//		List<Policies> readingList5 = policyrepo.findAll();
//		if (readingList5 != null) {
//		model.addAttribute("policies", readingList5);
//		}	
		
		
		return "valuation form";
		
}
	@RequestMapping(value = "/valuator form", method = RequestMethod.GET)//it sends ra request that if one types /welcome in browser result is the return value
	public String valuatorform() {
		
		return "valuator form";
	
	}	
	
	@RequestMapping(value = "/reports", method = RequestMethod.GET)//it sends ra request that if one types /welcome in browser result is the return value
	public String reports(Model model) {
		List<Valuations> readingList = valuationsrepo.findAll();
		if (readingList != null) {
		model.addAttribute("valuations", readingList);
		}	
		
		
		List<Valuator> readingList2 = valuatorrepo.findAll();
		if (readingList2 != null) {
		model.addAttribute("valuators", readingList2);
		}
		return "reports";
	
	}	
	
	@RequestMapping(value = "/csv", method = RequestMethod.GET)//it sends ra request that if one types /welcome in browser result is the return value
	public void dcsv(Model model,HttpServletResponse response) throws Exception  {
		List<Policies> readingList = policyrepo.findAll();
		if (readingList != null) {
//		model.addAttribute("csv", readingList);
			
		
        String filename = "policies.csv";

        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");

        //create a csv writer
        StatefulBeanToCsv<Policies> writer = new StatefulBeanToCsvBuilder<Policies>(response.getWriter())
                .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
                .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
                .withOrderedResults(false)
                .build();
        
        writer.write(readingList);
		}
//		return "redirect:/reports";
	
	}	
	
	
	@RequestMapping(value = "/csv2", method = RequestMethod.GET)//it sends ra request that if one types /welcome in browser result is the return value
	public void dcsv2(Model model,HttpServletResponse response) throws Exception  {
		List<Driver> readingList = driverrepo.findAll();
		if (readingList != null) {
//		model.addAttribute("csv", readingList);
			
		
        String filename = "drivers.csv";

        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");

        //create a csv writer
        StatefulBeanToCsv<Driver> writer = new StatefulBeanToCsvBuilder<Driver>(response.getWriter())
                .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
                .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
                .withOrderedResults(false)
                .build();
        
        writer.write(readingList);
		}
//		return "redirect:/reports";
	
	}	
	
	@RequestMapping(value = "/csv3", method = RequestMethod.GET)//it sends ra request that if one types /welcome in browser result is the return value
	public void dcsv3(Model model,HttpServletResponse response) throws Exception  {
		List<Proposer> readingList = accountrepo.findAll();
		if (readingList != null) {
//		model.addAttribute("csv", readingList);
			
		
        String filename = "accounts.csv";

        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");

        //create a csv writer
        StatefulBeanToCsv<Proposer> writer = new StatefulBeanToCsvBuilder<Proposer>(response.getWriter())
                .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
                .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
                .withOrderedResults(false)
                .build();
        
        writer.write(readingList);
		}
//		return "redirect:/reports";
	
	}	
	@RequestMapping(value="/valuator form", method=RequestMethod.POST)
	public String addToList(Valuator valt) {

	valuatorrepo.save(valt);
	return "redirect:/valuator form";
	}
	
	
	@RequestMapping(value="/valuation form", method=RequestMethod.POST)
	public String addToList2(Policies pol, Valuations valu, Valuator valt) {

		
		valuationsrepo.save(valu);
		
//		Valuator val1 = valuatorrepo.save(valt);	
//		valu.setVal1(val1);
		
		
		
		
		
		//		Valuator valuator = 
//		valuatorrepo.save(valt);
		
//     proprepo.save(prop);
//	
//	Proposer proposer = proprepo.save(prop);	
//	veh.setProposer(proposer);
//	
//	
//	
//	
//	
//		
//		
//		
//	VehicleDetails vehicle = Vehicledetailsrepo.save(veh);
//	acc.setVehdet1(vehicle);
//	accrepo.save(acc);
//	
//	dr.setVehdet3(vehicle);
//	driversepo.save(dr);
	
	
	return "redirect:/valuation form";
	}	
    @GetMapping("/login")
    public String admin() {
        return "login";
    }
	
}
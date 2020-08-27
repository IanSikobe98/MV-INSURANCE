package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.json.JSONArray;
import org.json.JSONObject;

import com.google.gson.Gson;

@Path("/gpol")
public class Getpolicies {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Amountdue(@DefaultValue("2")@QueryParam("natid")int nid,@QueryParam("val")String val,@QueryParam("stat")String stat) throws Exception
	{
		int i=0;		
		System.out.println(nid+" "+" "+val+" "+" "+stat);
//		boolean sta = false;
		String message = "ian";
        

		 ArrayList<Policy> policyList = new ArrayList<>();
		 
		//Creating a JSONObject object
	      JSONObject jsonObject = new JSONObject();
	      //Creating a json array
	      JSONArray array = new JSONArray();
	      JSONObject record = new JSONObject();
	      
		  Statement stmt = null;
		  
		  if(val.equals("No")&& stat.equals("Active")) {
			  try{  
					//register driver
					Class.forName("com.mysql.cj.jdbc.Driver");  
					
					//open connection
					Connection con=DriverManager.getConnection(  
					"jdbc:mysql://localhost:/mv-insurance","root","");  
			     
				      //STEP 4: Execute a query
				      System.out.println("Creating statement...");
				      stmt = con.createStatement();
				      

			      ResultSet rs = stmt.executeQuery("SELECT * FROM `policystat1` WHERE valuation='"+val+"' AND policystat1='Active'   AND Natid='"+nid+"'");
			      //STEP 5: Extract data from result set
			     
	
			      while(rs.next()){
			    	  Policy policy = new Policy();
			          policy.setRegno(rs.getString("Regno"));
			          policy.setPolno(rs.getString("policyno"));
			          policy.setAmount(rs.getInt("Amounttopay"));
			          policy.setModel(rs.getString("Model"));
			          policy.setIssue(rs.getString("issueDate"));
			          policy.setType(rs.getString("policytype"));
			          policy.setGar(rs.getString("valgararage"));
			    	  policy.setStat1(rs.getString("policystat1"));
			    	  policy.setNatid(rs.getInt("Natid"));
			    	  policy.setVtype(rs.getString("Type"));
			    	  policyList.add(policy);

			      }
			     
			     
				      rs.close();
						con.close();  
					}catch(Exception e){ System.out.println(e);}  
			  
			  
			  
		  }
		  if(val.equals("No")&& stat.equals("Pend")) {
				try{  
					//register driver
					Class.forName("com.mysql.cj.jdbc.Driver");  
					
					//open connection
					Connection con=DriverManager.getConnection(  
					"jdbc:mysql://localhost:/mv-insurance","root","");  
			     
				      //STEP 4: Execute a query
				      System.out.println("Creating statement...");
				      stmt = con.createStatement();
				      

			      ResultSet rs = stmt.executeQuery("SELECT * FROM `policystat1` WHERE valuation='"+val+"' AND policystat1='Awaiting Payment'   AND Natid='"+nid+"'");
			      //STEP 5: Extract data from result set
			     
	
			      while(rs.next()){
			    	  Policy policy = new Policy();
			          policy.setRegno(rs.getString("Regno"));
			          policy.setPolno(rs.getString("policyno"));
			          policy.setAmount(rs.getInt("Amounttopay"));
			          policy.setModel(rs.getString("Model"));
			          policy.setIssue(rs.getString("issueDate"));
			          policy.setType(rs.getString("policytype"));
			          policy.setGar(rs.getString("valgararage"));
			    	  policy.setStat1(rs.getString("policystat1"));
			    	  policy.setNatid(rs.getInt("Natid"));
			    	  policy.setVtype(rs.getString("Type"));
			    	  policyList.add(policy);

			      }
			     
			     
				      rs.close();
						con.close();  
					}catch(Exception e){ System.out.println(e);}  
			  
			  
			  
			  
		  }
		  if(val.equals("Yes")&& stat.equals("Active")) {
			  try{  
					//register driver
					Class.forName("com.mysql.cj.jdbc.Driver");  
					
					//open connection
					Connection con=DriverManager.getConnection(  
					"jdbc:mysql://localhost:/mv-insurance","root","");  
			     
				      //STEP 4: Execute a query
				      System.out.println("Creating statement...");
				      stmt = con.createStatement();
				      

			      ResultSet rs = stmt.executeQuery("SELECT * FROM `policystat2` WHERE valuation='"+val+"' AND policystat2='Active'   AND Natid='"+nid+"'");
			      //STEP 5: Extract data from result set
			     
	
			      while(rs.next()){
			    	  Policy policy = new Policy();
			          policy.setRegno(rs.getString("Regno"));
			          policy.setPolno(rs.getString("policyno"));
			          policy.setAmount(rs.getInt("valuationvalue"));
			          policy.setModel(rs.getString("Model"));
			          policy.setIssue(rs.getString("issueDate"));
			          policy.setType(rs.getString("policytype"));
			          policy.setGar(rs.getString("valgararage"));
			    	  policy.setStat1(rs.getString("policystat2"));
			    	  policy.setNatid(rs.getInt("Natid"));
			    	  policy.setVtype(rs.getString("Type"));
			    	  policyList.add(policy);
			    	  

			      }
			     
			     
				      rs.close();
						con.close();  
					}catch(Exception e){ System.out.println(e);}  
		  }
		  if(val.equals("Yes")&& stat.equals("Pendv")) {
			  try{  
					//register driver
					Class.forName("com.mysql.cj.jdbc.Driver");  
					
					//open connection
					Connection con=DriverManager.getConnection(  
					"jdbc:mysql://localhost:/mv-insurance","root","");  
			     
				      //STEP 4: Execute a query
				      System.out.println("Creating statement...");
				      stmt = con.createStatement();
				      

			      ResultSet rs = stmt.executeQuery("SELECT * FROM `policystat1` WHERE valuation='"+val+"' AND policystat1='Awaiting Valuation'   AND Natid='"+nid+"'");
			      //STEP 5: Extract data from result set
			     
	
			      while(rs.next()){
			    	  Policy policy = new Policy();
			          policy.setRegno(rs.getString("Regno"));
			          policy.setPolno(rs.getString("policyno"));
			          policy.setAmount(rs.getInt("Amounttopay"));
			          policy.setModel(rs.getString("Model"));
			          policy.setIssue(rs.getString("issueDate"));
			          policy.setType(rs.getString("policytype"));
			          policy.setGar(rs.getString("valgararage"));
			    	  policy.setStat1(rs.getString("policystat1"));
			    	  policy.setNatid(rs.getInt("Natid"));
			    	  policy.setVtype(rs.getString("Type"));
			    	  policyList.add(policy);
			    	 

			      }
			      
			     
			     
				      rs.close();
						con.close();  
					}catch(Exception e){ System.out.println(e);}  
			  
			  
		  }
		  if(val.equals("Yes")&& stat.equals("Pendp")) {
			  
			  try{  
					//register driver
					Class.forName("com.mysql.cj.jdbc.Driver");  
					
					//open connection
					Connection con=DriverManager.getConnection(  
					"jdbc:mysql://localhost:/mv-insurance","root","");  
			     
				      //STEP 4: Execute a query
				      System.out.println("Creating statement...");
				      stmt = con.createStatement();
				      

			      ResultSet rs = stmt.executeQuery("SELECT DISTINCT * FROM `policystat2` WHERE valuation='"+val+"' AND policystat2='Awaiting Payment'   AND Natid='"+nid+"'");
			      //STEP 5: Extract data from result set
			     


			      while(rs.next()){
			    	  
//			          Policy policy1 = new Policy(rs.getString("Regno"), rs.getString("policyno"), rs.getInt("Amounttopay"), rs.getString("Model"));
//			          policyList.add(policy1);
			    	  Policy policy1 = new Policy();
			          policy1.setRegno(rs.getString(1));
			          policy1.setPolno(rs.getString("policyno"));
			          policy1.setAmount(rs.getInt("valuationvalue"));
			          policy1.setModel(rs.getString("Model"));
			          policy1.setIssue(rs.getString("issueDate"));
			          policy1.setType(rs.getString("policytype"));
			          policy1.setGar(rs.getString("valgararage"));
			    	  policy1.setStat1(rs.getString("policystat2"));
			    	  policy1.setNatid(rs.getInt("Natid"));
			    	  policy1.setVtype(rs.getString("Type"));
//			    	  policyList.add(policy);
			    	  policyList.add(i, policy1);
			    	  System.out.println(rs.getString("Regno"));
i++;

record.put("ID", rs.getString("valuationvalue"));
record.put("First_Name", rs.getString("policystat2"));
array.put(record);
			      }
			      
			     
			      jsonObject.put("Players_data", array);
				      rs.close();
						con.close();  
					}catch(Exception e){ System.out.println(e);}  
		  }
		  
	
		System.out.println(message);

		 for (Policy obj : policyList) {
	          System.out.print("Regno: "+obj.getRegno()+", ");
	          System.out.print("Amount: "+obj.getAmount()+", ");
	          System.out.print("gar: "+obj.getGar()+", ");
	          System.out.print("issue date: "+obj.getIssue()+", ");
	          System.out.print("model: "+obj.getModel()+", ");
	          System.out.print("polno: "+obj.getPolno()+", ");
	          System.out.print("stat1: "+obj.getStat1()+", ");
	          System.out.print("type: "+obj.getType()+", ");
	          
	          
	          System.out.println();
	       }

		 System.out.println("FINISH"+i);
	        boolean ans = policyList.isEmpty(); 
	        if (ans == true) 
	        { System.out.println("The ArrayList is empty"); 
	        
	        Policy policy1 = new Policy();
	          policy1.setRegno("None");
	          policy1.setPolno("None");
	          policy1.setAmount(0);
	          policy1.setModel("None");
	          policy1.setIssue("None");
	          policy1.setType("None");
	          policy1.setGar("None");
	    	  policy1.setStat1("None");
	    	  policy1.setNatid(nid);
	    	  policy1.setVtype("None");
	    	  policyList.add(i, policy1);}
	        else {
	            System.out.println("The ArrayList is not empty"); 
	        }
	        
		 Gson gson = new Gson();
		 String jsonArray = gson.toJson(policyList);
		
		return jsonArray;
	
	
	}}
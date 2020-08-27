package test;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/signup")
public class Propstore {
	





		@GET
		@Produces(MediaType.APPLICATION_JSON)
		public String Amountdue(@DefaultValue("2")@QueryParam("pno")int pno ,@QueryParam("nid")int nid,@QueryParam("fna")String fna,@QueryParam("mna")String mna,@QueryParam("sna")String sna,@QueryParam("gen")String gen,@QueryParam("poa")String poa,@QueryParam("pa")String pa,@QueryParam("ga")String ga,@QueryParam("occ")String occ,@QueryParam("town")String town,@QueryParam("dob")String dob,@QueryParam("pass")String pass) throws Exception
		{
			
			System.out.println(pno+" "+nid+" "+fna+" "+mna+" "+sna+" "+gen+" "+poa+" "+pa+" "+ga+" "+occ+" "+town+" "+dob+" "+pass+" ");
			String food2 = "{\"status\": "+true+", \"message\": \" "+nid+" is registered \"}";
			String food3="";
			
			try{  
				//register driver
				Class.forName("com.mysql.cj.jdbc.Driver");  
				
				//open connection
				Connection con=DriverManager.getConnection(  
				"jdbc:mysql://localhost:/mv-insurance","root","");  
				//
				
			 //execute query-statement 
				Statement stmt=con.createStatement();  
				
				  ResultSet rs = stmt.executeQuery("SELECT * FROM `proposer` WHERE `Natid`='"+nid+"'");
			      //STEP 5: Extract data from result set
			     
			      String no="0";
			      if(rs.next()== false) {
				
				 stmt.executeUpdate("INSERT INTO `proposer`(Phonenumber,Natid,Fname,Mname,Sname,Gender,Poa,Pha,Garageaddr,Occupation,Town,DOB,Password) VALUE ('"+pno+"','"+nid+"','"+fna+"','"+mna+"','"+sna+"','"+gen+"','"+poa+"','"+pa+"','"+ga+"','"+occ+"','"+town+"','"+dob+"','"+pass+"')");
				
				 food3 = "{\"status\": "+true+", \"message\": \" "+pno+" is registered\"}";
				System.out.println(" records inserted");  
				
			      }
			      
			      else {
			    	  food3 = "{\"status\": "+false+", \"message\": \" "+nid+" already registered\"}";
			    	  System.out.println("Duplication error");  
			      }

				
				
	 
				con.close();  
				}catch(Exception e){ System.out.println(e);}  
			
			
			
			
			
			
			food2=food3;
			return food2;
		
		
		
	}}
	

package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/gpasswd2")
public class Respass2 {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Amountdue(@QueryParam("nid")int nid,@QueryParam("pass")String pass) throws Exception
	{
		
		System.out.println(pass+" "+nid+" ");
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
			
//			  ResultSet rs = stmt.executeQuery("SELECT * FROM `proposer` WHERE `Natid`='"+nid+"'");
		      //STEP 5: Extract data from result set
		     
		      String no="0";
//		      if(rs.next()== false) {
			
//			 stmt.executeUpdate("UPDATE `proposer` SET Phonenumber="+pno+",Natid="+nid+",Fname="+fna+",Mname="+mna+",Sname"+sna+",Gender,Poa,Pha,Garageaddr,Occupation,Town,DOB,Password) VALUE ('"+pno+"','"+nid+"','"+fna+"','"+mna+"','"+sna+"','"+gen+"','"+poa+"','"+pa+"','"+ga+"','"+occ+"','"+town+"','"+dob+"','"+pass+"')");
//		    	  update `proposer` SET `Natid`='12'  where `Natid`='0'
		      PreparedStatement update = con.prepareStatement
		    		    ("UPDATE proposer SET Password = ? WHERE Natid = ?");

		    		update.setString(1,pass);
		    		update.setInt(2,nid);
		    		
		    		
		    		
		    		
		    		update.executeUpdate();

  
			 food3 = "{\"status\": "+true+", \"message\": \" "+nid+" is updated\"}";
			System.out.println(" records updated");  
			
//		      }
//		      
//		      else {
//		    	  food3 = "{\"status\": "+false+", \"message\": \" "+nid+" already registered\"}";
//		    	  System.out.println("Duplication error");  
//		      }

			
			
 
			con.close();  
			}catch(Exception e){ 
				 food3 = "{\"status\": "+false+", \"message\": \" "+nid+" is not updated\"}";
				System.out.println(e);}  
		
		
		
		
		
		
		food2=food3;
		return food2;
	
	
	
}}

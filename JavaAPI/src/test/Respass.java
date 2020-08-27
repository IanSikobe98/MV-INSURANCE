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

@Path("/gpasswd")
public class Respass {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getPassword(@QueryParam("nid")int nid ) throws Exception
	{
		System.out.println(nid+" "+" "+" ");
		boolean sta = true;
		String message = "ian";

		 String passw= " ";
	    	String food2 ="{\"status\": "+sta+", \"Message\": \""+message+"\"}";
		
		  Statement stmt = null;
		try{  
			//register driver
			Class.forName("com.mysql.cj.jdbc.Driver");  
			
			//open connection
			Connection con=DriverManager.getConnection(  
			"jdbc:mysql://localhost:/mv-insurance","root","");  
	     
		      //STEP 4: Execute a query
		      System.out.println("Creating statement...");
		      stmt = con.createStatement();
		      

	      ResultSet rs = stmt.executeQuery("SELECT * FROM `proposer` WHERE Natid='"+nid+"'");
	      //STEP 5: Extract data from result set
	      while(rs.next()){
		         //Retrieve by column name
                 passw = rs.getString("Password");


		         //Display values

		         System.out.print(", Password: " + passw);

	      }
	      
	      food2 = "{\"status\": "+sta+", \"message\": \" "+message+"\", \"Natid\":  "+nid+",\"password\": \""+passw+"\"}";
	      System.out.println(passw);
	      System.out.println();
	      rs.close();
			
 
			con.close();  
			}catch(Exception e){ System.out.println(e);}  
		
		
		System.out.println(message);

	
		
		return food2;
		
		
		
	}
}

package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/paysave")
public class Savepay {

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Amountdue(@DefaultValue("2")@QueryParam("polno")String polno ,@QueryParam("amount")String amount) throws Exception
	{
		System.out.println(polno+" "+amount+" ");
		String food2 = "{\"status\": "+true+", \"message\": \" "+polno+" there\"}";
		
		
		try{  
			//register driver
			Class.forName("com.mysql.cj.jdbc.Driver");  
			
			//open connection
			Connection con=DriverManager.getConnection(  
			"jdbc:mysql://localhost:/mv-insurance","root","");  
			//
			
		 //execute query-statement 
			Statement stmt=con.createStatement();  
			
			 stmt.executeUpdate("UPDATE policies " + "SET Amountpaid = "+amount+" WHERE policyno='"+polno+"'");
			
//			  String sql = "UPDATE Registration " +
//	                   "SET age = "+amount+" WHERE id in ("+polno+")";
			System.out.println(" records updated");  
			
			

			
			
 
			con.close();  
			}catch(Exception e){ System.out.println(e);}  
		
		
		
		
		
		
		return food2;
		


}
	
}
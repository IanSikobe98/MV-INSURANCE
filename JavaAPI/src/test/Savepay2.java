package test;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/paysave2")
public class Savepay2 {

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Amountdue(@DefaultValue("2")@QueryParam("polno")String polno ,@QueryParam("amount")String amount,@QueryParam("transno")String transno) throws Exception
	{
		System.out.println(polno+" "+amount+" "+transno+" ");
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
		
		
		
		storetrans(polno,amount,transno);
		
		
		return food2;
		


}

	private void storetrans(String polno, String amount, String transno) {
		Date date2 = new Date();  
		int certno = 0;	
		SimpleDateFormat form = new SimpleDateFormat("yyyy/MM/dd");
		String date=form.format(date2);
		System.out.println(date);
		
		System.out.println(date);  
		try{  
			//register driver
			Class.forName("com.mysql.cj.jdbc.Driver");  
			
			//open connection
			Connection con=DriverManager.getConnection(  
			"jdbc:mysql://localhost:/mv-insurance","root","");  
			//
			
		 //execute query-statement 
			Statement stmt=con.createStatement();  
			
			ResultSet rs=stmt.executeQuery("SELECT COUNT(`Transno`) AS `Transno` FROM `payments` ");
			 
		      while(rs.next()){
		    	  
		    	  certno = rs.getInt("Transno");
		      }
			certno=certno+1;
		      String str = String.format("%08d",certno);
		      System.out.println(str);
			
//			 stmt.executeUpdate("UPDATE policies " + "SET Amountpaid = "+amount+" WHERE policyno='"+polno+"'");
			 stmt.executeUpdate("INSERT INTO `payments`(Transno,Amount,Polno,Date,certno) VALUE ('"+transno+"','"+amount+"','"+polno+"','"+date+"','"+str+"')");
				
//			  String sql = "UPDATE Registration " +
//	                   "SET age = "+amount+" WHERE id in ("+polno+")";
			System.out.println(" records inserted");  
			
			
			
			
			

			
			
 
			con.close();  
			}catch(Exception e){ System.out.println(e);}  
		
	}
	
}
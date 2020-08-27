package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/savepol")
public class Polstore {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String polstore(@DefaultValue("2")@QueryParam("vehicle")String vrno ,@QueryParam("type")String type,@QueryParam("amount")String amount,@QueryParam("rate")String rate,@QueryParam("valuation")String valuation) throws Exception
	{
		
		System.out.println(vrno+" "+type+" "+amount+" "+rate+" "+valuation);
		String food2 = "{\"status\": "+true+", \"message\": \" "+vrno+" there\"}";
		
		Date dateRedeemed = new Date();   
		System.out.println(dateRedeemed);

		
		SimpleDateFormat form = new SimpleDateFormat("yyyy/MM/dd");
		String h=form.format(dateRedeemed);
		System.out.println(h);
		
		String dt = h;  // Start date
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
		Calendar c = Calendar.getInstance();
		c.setTime(sdf.parse(dt));
		c.add(Calendar.DATE, 366);  // number of days to add
		dt = sdf.format(c.getTime());  // dt is now the new date
		System.out.println(dt);
		
		Random dice = new Random();
		int polno = dice.nextInt(1000000);
		String polno2 = "";
		int no =0;
		int ty= 0;
		if(type.equals("Comprehensive")) {ty=1;}
		if(type.equals("Third Party-fire And Theft")) {ty=2;}
		if(type.equals("third-party")) {ty=3;}
		
		try{  
			//register driver
			Class.forName("com.mysql.cj.jdbc.Driver");  
			
			//open connection
			Connection con=DriverManager.getConnection(  
			"jdbc:mysql://localhost:/mv-insurance","root","");  
			//
			
		 //execute query-statement 
			Statement stmt=con.createStatement();  
			ResultSet rs=stmt.executeQuery("SELECT COUNT(`policyno`) AS `pol` FROM `policies` ");
			 
		      while(rs.next()){
		    	  
		    	  no = rs.getInt("pol");
		      }
		      no =no+1;
		      String str = String.format("%08d", no);
		      polno2 ="0"+ty+"/"+1+"/"+str+"/"+h+"";
			
			 stmt.executeUpdate("INSERT INTO `policies`(Amountpaid,policyno,regno,IssueDate,valuation,policytype,Amounttopay,EndDate,Rate) VALUE ('0','"+polno2+"','"+vrno+"','"+h+"','"+valuation+"','"+type+"','"+amount+"','"+dt+"','"+rate+"')");
			

			System.out.println(" records inserted");  
			
			

			
			
 
			con.close();  
			}catch(Exception e){ System.out.println(e);}  
		
		
		
		
		
		
		
		return food2;
	
	
	
}
}

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

@Path("/vehstore")
public class Vehstore {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Amountdue(@DefaultValue("2")@QueryParam("vrno")String vrno ,@QueryParam("vhype")String vhype,@QueryParam("model")String model,@QueryParam("YOM")String yom,@QueryParam("engine")String eng,@QueryParam("btype")String btype,@QueryParam("cost")String cost,@QueryParam("hpc")String hpc,@QueryParam("use")String use,@QueryParam("owid")String owid,@QueryParam("owfname")String owfname,@QueryParam("owsname")String owsname,@QueryParam("natid")int natid) throws Exception
	{
		
		System.out.println(vrno+" "+vhype+" "+model+" "+yom+" "+eng+" "+btype+" "+cost+" "+hpc+" "+use+" "+owid+" "+owid+" "+owfname+" "+owsname+" "+natid);
		String food2= "{\"status\": "+true+", \"message\": \" "+vrno+" already registered\"}";
		String food3="";
		
//		System.out.println("hello ian");
		
		try{  
			//register driver
			Class.forName("com.mysql.cj.jdbc.Driver");  
			
			//open connection
			Connection con=DriverManager.getConnection(  
			"jdbc:mysql://localhost:/mv-insurance","root","");  
			//
			
		 //execute query-statement 
			Statement stmt=con.createStatement();  
			
		      ResultSet rs = stmt.executeQuery("SELECT * FROM `vehicle` WHERE `Regno`='"+vrno+"'");
		      //STEP 5: Extract data from result set
		     
		      String no="0";
		      if(rs.next()== false) {
		     
		      
			 stmt.executeUpdate("INSERT INTO `vehicle`(Regno,Natid,VehType,Model,YOM,EngineCC,Bodytype,Sum,OwnerId,Ownerfname,Ownerlname,HPCcomp,Vhuse) VALUE ('"+vrno+"','"+natid+"','"+vhype+"','"+model+"','"+yom+"','"+eng+"','"+btype+"','"+cost+"','"+owid+"','"+owfname+"','"+owsname+"','"+hpc+"','"+use+"')");
			
			 food3 = "{\"status\": "+true+", \"message\": \" "+vrno+" is registered\"}";
			System.out.println(" records inserted");  
			
			
		      }
		      
		      else {
		    	  food3 = "{\"status\": "+false+", \"message\": \" "+vrno+" already registered\"}";
		    	  System.out.println("Duplication error");  
		      }
			
			
 
			con.close();  
			}catch(Exception e){ System.out.println(e);}  
		
		
		
		
		
		
		food2=food3;
		return food2;
	
	
	
}
}
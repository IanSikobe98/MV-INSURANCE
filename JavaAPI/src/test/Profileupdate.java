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


@Path("/updatepro")
public class Profileupdate {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Amountdue(@DefaultValue("2")@QueryParam("pno")int pno ,@QueryParam("nid")int nid,@QueryParam("fna")String fna,@QueryParam("mna")String mna,@QueryParam("sna")String sna,@QueryParam("gen")String gen,@QueryParam("poa")String poa,@QueryParam("pa")String pa,@QueryParam("ga")String ga,@QueryParam("occ")String occ,@QueryParam("town")String town,@QueryParam("dob")String dob,@QueryParam("nid2")int nid2) throws Exception
	{
		
		System.out.println(pno+" "+nid+" "+fna+" "+mna+" "+sna+" "+gen+" "+poa+" "+pa+" "+ga+" "+occ+" "+town+" "+dob+"  ");
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
//		      if(rs.next()== false) {
			
//			 stmt.executeUpdate("UPDATE `proposer` SET Phonenumber="+pno+",Natid="+nid+",Fname="+fna+",Mname="+mna+",Sname"+sna+",Gender,Poa,Pha,Garageaddr,Occupation,Town,DOB,Password) VALUE ('"+pno+"','"+nid+"','"+fna+"','"+mna+"','"+sna+"','"+gen+"','"+poa+"','"+pa+"','"+ga+"','"+occ+"','"+town+"','"+dob+"','"+pass+"')");
//		    	  update `proposer` SET `Natid`='12'  where `Natid`='0'
		      PreparedStatement update = con.prepareStatement
		    		    ("UPDATE proposer SET Fname = ?, Gender = ?, Mname = ?, Sname =? , Poa = ?, Pha = ?, Garageaddr = ?, Phonenumber = ?, Occupation = ?, Town = ?, DOB = ? WHERE Natid = ?");

		    		update.setString(1,fna);
		    		update.setString(2,gen);
		    		update.setString(3,mna);
		    		update.setString(4,sna);
		    		update.setString(5,poa);
		    		update.setString(6,pa);
		    		update.setString(7,ga);
		    		update.setInt(8,pno);
		    		update.setString(9,occ);
		    		update.setString(10,town);
		    		update.setString(11,dob);
		    		update.setInt(12,nid2);
		    		
		    		
		    		
		    		update.executeUpdate();

  
			 food3 = "{\"status\": "+true+", \"message\": \" "+nid+" is updated\"}";
			System.out.println(" records inserted");  
			
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
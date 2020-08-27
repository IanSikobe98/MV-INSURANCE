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

import com.google.gson.Gson;

@Path("/stick")
public class Getsticker {

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getstk(@DefaultValue("2")@QueryParam("polno")String pol) throws Exception
	{
		int i=0;		
		System.out.println(pol+" "+" ");
		ArrayList<Sticker> vehList = new ArrayList<>();
		
		
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
			      
//			      SELECT * FROM `vehicle` WHERE `Natid`="35032507" AND `VehType`="Motorcycle"
		      ResultSet rs = stmt.executeQuery("SELECT * FROM `sticker` WHERE  `policyno`='"+pol+"'");
		      //STEP 5: Extract data from result set
		     

		      while(rs.next()){
//		    	  Policy policy = new Policy();
		    	Sticker veh = new Sticker();
		    	  veh.setDate(rs.getString("Date"));
		    	  veh.setExpir(rs.getString("expir"));
                veh.setFname(rs.getString("Fname"));
		         
		          veh.setSname(rs.getString("Sname"));
		          veh.setRegno(rs.getString("Regno"));
		          veh.setName(rs.getString("Name"));
		          veh.setSign(rs.getString("Signlink"));
		    	  veh.setType(rs.getString("VehType"));
		    	  veh.setUse(rs.getString("Vhuse"));
		    	  veh.setCert(rs.getString("certno"));
		    	  veh.setPolicyno(pol);

		    	  vehList.add(veh);

		      }
		     
		     
			      rs.close();
					con.close();  
				}catch(Exception e){ System.out.println(e);}  
		  
		  
//			 for (Vehicle obj : vehList) {
//		          System.out.print("Regno: "+obj.getRegno()+", ");
//		          System.out.print("Amount: "+obj.getNatid()+", ");
//		          System.out.print("gar: "+obj.getGar()+", ");
//		          System.out.print("issue date: "+obj.getIssue()+", ");
//		          System.out.print("model: "+obj.getModel()+", ");
//		          System.out.print("polno: "+obj.getPolno()+", ");
//		          System.out.print("stat1: "+obj.getStat1()+", ");
//		          System.out.print("type: "+obj.getType()+", ");
//		          
//		          
//		          System.out.println();
//		       }

			 System.out.println("FINISH"+i);
		        boolean ans = vehList.isEmpty(); 
		        if (ans == true) 
		        { System.out.println("The ArrayList is empty"); 
		    	Sticker veh = new Sticker();
		    	  veh.setDate("None");
		    	  veh.setExpir("None");
              veh.setFname("None");
		         
		          veh.setSname("None");
		          veh.setRegno("None");
		          veh.setName("None");
		          veh.setSign("None");
		    	  veh.setType("None");
		    	  veh.setUse("None");
		    	  veh.setPolicyno(pol);    
		    	veh.setCert("none");
		    	  

		    	  vehList.add(i, veh);}
		        else {
		            System.out.println("The ArrayList is not empty"); 
		        }
		        
			 Gson gson = new Gson();
			 String jsonArray = gson.toJson(vehList);
			
			return jsonArray;
	
	}
}

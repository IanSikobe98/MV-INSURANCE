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

@Path("/findinf")
public class Getprof {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getmvc(@DefaultValue("2")@QueryParam("natid")int nid) throws Exception
	{
		int i=0;		
		System.out.println(nid+" "+" ");
//		boolean sta = false;
		String message = "ian";
		
		ArrayList<Profile> vehList = new ArrayList<>();
		//Creating a JSONObject object
	      JSONObject jsonObject = new JSONObject();
	      //Creating a json array
	      JSONArray array = new JSONArray();
	      JSONObject record = new JSONObject();
	      
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
		      ResultSet rs = stmt.executeQuery("SELECT * FROM `proposer` WHERE  `Natid`='"+nid+"'");
		      //STEP 5: Extract data from result set
		     

		      while(rs.next()){
//		    	  Policy policy = new Policy();
		    	Profile veh = new Profile();
		    	  veh.setPhonenumber(rs.getInt("PhoneNumber"));
		    	  veh.setNatid(rs.getInt("Natid"));
                  veh.setFname(rs.getString("Fname"));
		          veh.setMname(rs.getString("Mname"));
		          veh.setSname(rs.getString("Sname"));
		          veh.setGender(rs.getString("Gender"));
		          veh.setPoa(rs.getString("Poa"));
		          veh.setPha(rs.getString("Pha"));
		    	  veh.setGa(rs.getString("Garageaddr"));
		    	  veh.setOccupation(rs.getString("Occupation"));
		    	  veh.setTown(rs.getString("Town"));
		    	  veh.setDob(rs.getString("DOB"));
		    	  

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
		        Profile veh =new Profile();
		    	  veh.setPhonenumber(0);
		    	  veh.setNatid(nid);
                veh.setFname("None");
		          veh.setMname("None");
		          veh.setSname("None");
		          veh.setGender("None");
		          veh.setPoa("None");
		    	  veh.setPha("None");
		    	  veh.setGa("None");
		    	  veh.setOccupation("None");
		    	  veh.setTown("None");
		    	  veh.setDob("None");
		    	  

		    	  vehList.add(i, veh);}
		        else {
		            System.out.println("The ArrayList is not empty"); 
		        }
		        
			 Gson gson = new Gson();
			 String jsonArray = gson.toJson(vehList);
			
			return jsonArray;
		
		
		
	}
}

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

@Path("/gveh")
public class Getmvc {


		@GET
		@Produces(MediaType.APPLICATION_JSON)
		public String getmvc(@DefaultValue("2")@QueryParam("natid")int nid,@QueryParam("type")String type) throws Exception
		{
			int i=0;		
			System.out.println(nid+" "+" "+type+" "+" ");
//			boolean sta = false;
			String message = "ian";
			
			ArrayList<Vehicle> vehList = new ArrayList<>();
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
				      
//				      SELECT * FROM `vehicle` WHERE `Natid`="35032507" AND `VehType`="Motorcycle"
			      ResultSet rs = stmt.executeQuery("SELECT * FROM `vehicle` WHERE VehType='"+type+"'  AND Natid='"+nid+"'");
			      //STEP 5: Extract data from result set
			     
	
			      while(rs.next()){
//			    	  Policy policy = new Policy();
			    	  Vehicle veh =new Vehicle();
			    	  veh.setVrno(rs.getString("Regno"));
			    	  veh.setNatid(rs.getInt("Natid"));
                      veh.setVehType(rs.getString("VehType"));
			          veh.setModel(rs.getString("Model"));
			          veh.setYom(rs.getInt("YOM"));
			          veh.setEnginecc(rs.getInt("EngineCC"));
			          veh.setBodytype(rs.getString("Bodytype"));
			    	  veh.setCost(rs.getInt("Sum"));
			    	  veh.setOwnerid(rs.getInt("OwnerId"));
			    	  veh.setOwnerfname(rs.getString("Ownerfname"));
			    	  veh.setOwnerlname(rs.getString("Ownerlname"));
			    	  veh.setHpccomp(rs.getString("HPCcomp"));
			    	  veh.setUse(rs.getString("Vhuse"));

			    	  vehList.add(veh);

			      }
			     
			     
				      rs.close();
						con.close();  
					}catch(Exception e){ System.out.println(e);}  
			  
			  
//				 for (Vehicle obj : vehList) {
//			          System.out.print("Regno: "+obj.getRegno()+", ");
//			          System.out.print("Amount: "+obj.getNatid()+", ");
//			          System.out.print("gar: "+obj.getGar()+", ");
//			          System.out.print("issue date: "+obj.getIssue()+", ");
//			          System.out.print("model: "+obj.getModel()+", ");
//			          System.out.print("polno: "+obj.getPolno()+", ");
//			          System.out.print("stat1: "+obj.getStat1()+", ");
//			          System.out.print("type: "+obj.getType()+", ");
//			          
//			          
//			          System.out.println();
//			       }

				 System.out.println("FINISH"+i);
			        boolean ans = vehList.isEmpty(); 
			        if (ans == true) 
			        { System.out.println("The ArrayList is empty"); 
			        Vehicle veh =new Vehicle();
			    	  veh.setVrno("None");
			    	  veh.setNatid(nid);
                    veh.setVehType("None");
			          veh.setModel("None");
			          veh.setYom(0);
			          veh.setEnginecc(0);
			          veh.setBodytype("None");
			    	  veh.setCost(0);
			    	  veh.setOwnerid(0);
			    	  veh.setOwnerfname("None");
			    	  veh.setOwnerlname("None");
			    	  veh.setHpccomp("None");
			    	  veh.setUse("None");


			    	  vehList.add(i, veh);}
			        else {
			            System.out.println("The ArrayList is not empty"); 
			        }
			        
				 Gson gson = new Gson();
				 String jsonArray = gson.toJson(vehList);
				
				return jsonArray;
			
			
			
		}
	}

package test;


import java.sql.Connection;
import java.sql.*;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/form")
public class Form {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Amountdue(@DefaultValue("2")@QueryParam("lno")String lno,@QueryParam("exp")String exp,@QueryParam("sick")String sick,@QueryParam("con")String conv,@QueryParam("ldate")String ldate,@QueryParam("acc")String acc,@QueryParam("inc")String inc,@QueryParam("pr")String pr,@QueryParam("pr1")String pr1,@QueryParam("pr2")String pr2,@QueryParam("vrno")String vrno,@QueryParam("cost")String cost,@QueryParam("use")String use,@QueryParam("odr")String odr) throws Exception
	{
		
		String food2 = "{\"status\": "+true+", \"message\": \" "+lno+" there\"}";
		System.out.println(lno+" "+vrno+" "+exp+" "+odr+" "+sick+" "+conv+" "+ldate+" "+acc+" "+inc+" "+pr+" "+pr1+" "+pr2+" "+use+" "+cost);
	
		try{  
			//register driver
			Class.forName("com.mysql.jdbc.Driver");  
			
			//open connection
			Connection con=DriverManager.getConnection(  
			"jdbc:mysql://localhost:/mv-insurance","root","");  
			//
			
		 //execute query-statement 
			Statement stmt=con.createStatement();  
			
			 stmt.executeUpdate("INSERT INTO `driver`(Licenceno,Regno,Experience,Ohterdriver,Sickness,Conviction,Licencedate,Accident,Inscomp,Previns,Previns1,Previns2) VALUE ('"+lno+"','"+vrno+"','"+exp+"','"+odr+"','"+sick+"','"+conv+"','"+ldate+"','"+acc+"','"+inc+"','"+pr+"','"+pr1+"','"+pr2+"')");
			
//			String sql = "INSERT INTO users " +
//	                   "VALUES (username)";
//	      stmt.executeUpdate(sql);
//			
			
			
//			
//			
//			String sql ="UPDATE `emp` SET `id`=100,`age`=10,`first`= \"rew\",`last`=\"kas\" WHERE `id`=119";
//			stmt.executeUpdate(sql);  
//			
//			//execute query prepared statement
//			PreparedStatement ps= con.prepareStatement("insert into Emp values(?,?,?,?)");
//			ps.setInt(1,2);//1 specifies the first parameter in the query  
//			ps.setInt(2,12);
//			ps.setString(3,"rr");//1 specifies the first parameter in the query  
//			ps.setString(4,"Mark"); 
//			
//			  
//			int i=ps.executeUpdate();  
			System.out.println(" records inserted");  
			
			

			
			
			
			//GET ITEMS ROW BY ROW
		
//			while(rs.next())  
//			System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3));  
			con.close();  
			}catch(Exception e){ System.out.println(e);}  
		
		
		
		
		
return food2;
	}
}
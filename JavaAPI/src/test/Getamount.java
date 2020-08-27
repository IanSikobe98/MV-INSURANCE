package test;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Random;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.opencsv.CSVWriter;

import weka.classifiers.Evaluation;
import weka.classifiers.bayes.NaiveBayes;
import weka.core.Instance;
import weka.core.Instances;
import weka.core.converters.CSVLoader;
import weka.core.converters.ConverterUtils.DataSource;

@Path("/gamount")
public class Getamount {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
		public String Amountdue(@DefaultValue("2")@QueryParam("lno")String lno,@QueryParam("exp")int exp,@QueryParam("sick")String sick,@QueryParam("con")String con,@QueryParam("ldate")String ldate,@QueryParam("acc")String acc,@QueryParam("inc")String inc,@QueryParam("pr")String decin,@QueryParam("pr1")String decpre,@QueryParam("pr2")String pr2,@QueryParam("vrno")String vrno,@QueryParam("cost")int cost,@QueryParam("use")String cu,@QueryParam("odr")String odr) throws Exception
	{

System.out.println(exp+" "+cu+" "+acc+" "+sick+" "+con+" "+decin+" "+decpre+" ");
String r;
String store;

store=storeinfo(lno,vrno,exp,odr,sick,con,ldate,acc,inc,decin,decpre,pr2);
r=classify(exp,cu,acc,sick,con,decin,decpre);
storescore(r,vrno);
String food2 = "{\"status\": "+true+", \"id\": \" "+vrno+" there\"}";
String food = "{\"id\": "+r+", \"value\": \"Hello there\"}";
//String food2 = "[{\"id\": "+r+", \"value\": \" "+exp+" there\"},{\"id\": "+r+", \"value\": \" "+exp+" there\"}]";
String food3="["+food+","+food+"]";
File file = new File("C:\\Users\\Ian Sikobe\\Desktop\\RES.csv"); 
File file1 = new File("C:\\Users\\Ian Sikobe\\Desktop\\RES.arff"); 
File file2= new File("C:\\Users\\Ian Sikobe\\Desktop\\INSURANCEDATA.arff"); 

file.delete();
file1.delete();
file2.delete();

double amount[][];
amount = calculateamount(r,cost,vrno);


String type = null;
String jsdata[] = {"","","",""};
for(int row=0;row<amount.length;row++)
    
{
	for(int column=0;column<1;column++) {
if(amount[row][0]== 1) {type="Comprehensive";}
else if(amount[row][0]== 2) {type="Third Party-fire And Theft";}
else if(amount[row][0]== 3) {type="Third-party";}
		
		
//		a[row][1] =(a[row][1] +credit);
		 jsdata[row] = "{\"type\": \""+type+"\", \"rate\": "+amount[row][1]+", \"amount\": "+amount[row][2]+"}";
	}  
}

String food4 ="["+jsdata[0]+","+jsdata[1]+","+jsdata[2]+"]";

//String food2 = "{\"status\": "+true+", \"id\": \" "+vrno+" there\"}";
String food5 ="{\"status\": "+true+", \"Message\": \""+vrno+"\", \"data\": {\"choices\": ["+jsdata[0]+", "+jsdata[1]+", "+jsdata[2]+"] } }";

return food5;
	}
	
	
private void storescore(String r, String vrno) {
	int p=0;
	if(r.equals("LOW")) {
		p=-2;}
	else if(r.equals("HIGH")){
		p=2;}
	
	
	
	System.out.println(p);
	
	try{  
		//register driver
		Class.forName("com.mysql.jdbc.Driver");  
		
		//open connection
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:/mv-insurance","root","");  
		
		
	 //execute query-statement 
		Statement stmt=con.createStatement();  
		
		 stmt.executeUpdate("INSERT INTO `credit`(vrno,creditscore) VALUE ('"+vrno+"','"+p+"')");
		
 
		System.out.println(" records inserted");  
		
		con.close();  
		}catch(Exception e){ System.out.println(e);}  
	
		
	}


private double[][]  calculateamount(String r, int cost,String vrno) {
	//Enter dataset
	//C1-id of company(1-AIG,2-Jubilee,3-CIC)
	//C2-RATE &C3- SLOT FOR COST GOTTEN
	double[][] a= {
			{1,10,0},
			{2,20,0},
			{3,5,0},
                   };
	  int credit = 0;
	
	try{  
		//register driver
		Class.forName("com.mysql.jdbc.Driver");  
		
		//open connection
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:/mv-insurance","root","");  
		
		
	 //execute query-statement 
		Statement stmt=con.createStatement();  
		
	      //Retrieving the records
	      ResultSet rs = stmt.executeQuery("SELECT creditscore from creditscore Where Vrno='"+vrno+"'");
	      
	    
	      while(rs.next()) {
	    	  credit = rs.getInt("creditscore");
	      }
	      


 
		System.out.println(" records gotten");  
		
		con.close();  
		}catch(Exception e){ System.out.println(e);}  
	
	
	for(int row=0;row<2;row++)
	      
		{
			for(int column=0;column<1;column++) {

				a[row][1] =(a[row][1] +credit);
				
			}  
		}
	
	
	
	
	
//	//if low decrease
//	if(r.equals("LOW"))  {
//	
//	for(int row=0;row<a.length;row++)
//
//	{
//		for(int column=0;column<1;column++) {
//			a[row][1] =(a[row][1] +2);
//
//		}
//
//
//	}
//	
//
//	
//	
//	}
//	//if high increase rate
//	else if(r.equals("HIGH")) {
//		for(int row=0;row<a.length;row++)
//
//		{
//			for(int column=0;column<1;column++) {
//
//				a[row][1] =(a[row][1] +4);
//				
//			}
//
//
//		}
//		
//		
//
//	} 
//	
	
	for(int row=0;row<a.length;row++)

	{
		for(int column=0;column<1;column++) {
	a[row][2] =(a[row][1]*cost)/100;
	System.out.println("COMPANY " +(row+1) +" expected output = " +a[row][2] );
		}}
	
	

	return a;
	}


private String storeinfo(String lno, String vrno, int exp,String odr, String sick, String conv, String ldate, String acc,
			String inc, String decin, String decpre, String pr2) {
	try{  
		//register driver
		Class.forName("com.mysql.jdbc.Driver");  
		
		//open connection
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:/mv-insurance","root","");  
		//
		
	 //execute query-statement 
		Statement stmt=con.createStatement();  
		
		 stmt.executeUpdate("INSERT INTO `driver`(Licenceno,Regno,Experience,Ohterdriver,Sickness,Conviction,Licencedate,Accident,Inscomp,Previns,Previns1,Previns2) VALUE ('"+lno+"','"+vrno+"','"+exp+"','"+odr+"','"+sick+"','"+conv+"','"+ldate+"','"+acc+"','"+inc+"','"+decin+"','"+decpre+"','"+pr2+"')");
		
 
		System.out.println(" records inserted");  
		
		con.close();  
		}catch(Exception e){ System.out.println(e);}  
	
	
	String storestat = "false";
	return storestat;
		
	}


private String[] normalize(int exp, String cu, String acc, String sick, String con, String decin, String decpre) {
	String exp1;
	if(exp >4) {
		 exp1 ="0";
	}
	else {
		exp1="1";
	}
	if(cu.equals("Private")) {
		 cu ="0";
	}
	else if(cu.equals("Commercial")){
		cu ="1";
	}
	if(acc.equals("No")) {
		 acc ="0";
	}
	else {
		acc ="1";
	}
	if(sick.equals("No")) {
		 sick ="0";
	}
	else {
		sick ="1";
	}
	if(con.equals("No")) {
		 con ="0";
	}
	else {
		con ="1";
	}
	if(decin.equals("No")) {
		 decin ="0";
	}
	else {
		decin ="1";
	}
	if(decpre.equals("No")) {
		decpre ="0";
	}
	else {
		decpre ="1";
	}
	
	String[] data1 = { exp1,cu,acc,sick,con,decin,decpre,"LOW" }; 
	System.out.println(data1);
	return data1;
}


public String classify(int exp, String cu, String acc, String sick, String con, String decin, String decpre) throws Exception {
    CSV2arff("INSURANCEDATA");
    CSV2arff("TEST")
	;
 
NaiveBayes nb = new NaiveBayes();
nb =train();


csvwrite(exp,cu,acc,sick,con,decin,decpre);
CSV2arff("RES");	
//CSV2arff("IAN");	
//CSV2arff("INS");
	
	//evaluation
//load old dataset
DataSource source = new DataSource("C:\\Users\\Ian Sikobe\\Desktop\\INSURANCEDATA.arff");
Instances dataset = source.getDataSet();
dataset.setClassIndex(dataset.numAttributes()-1);
Evaluation eval = new Evaluation(dataset);
Random rand = new Random(1);
int folds = 10;
//load new dataset
DataSource source2 = new DataSource("C:\\Users\\Ian Sikobe\\Desktop\\TEST.arff");
Instances testDataset1 = source2.getDataSet();
//set class index to the last attribute
testDataset1.setClassIndex(testDataset1.numAttributes()-1);
//now evaluate model
eval.evaluateModel(nb, testDataset1);
//eval.crossValidateModel(nb, testDataset1, folds, rand);
System.out.println(eval.toSummaryString("Evaluation results:\n", false));
System.out.println("Correct % = "+eval.pctCorrect());
System.out.println("Incorrect % = "+eval.pctIncorrect());
System.out.println("AUC = "+eval.areaUnderROC(1));
System.out.println("kappa = "+eval.kappa());
System.out.println("MAE = "+eval.meanAbsoluteError());
System.out.println("RMSE = "+eval.rootMeanSquaredError());
System.out.println("RAE = "+eval.relativeAbsoluteError());
System.out.println("RRSE = "+eval.rootRelativeSquaredError());
System.out.println("Precision = "+eval.precision(1));
System.out.println("Recall = "+eval.recall(1));
System.out.println("fMeasure = "+eval.fMeasure(1));
System.out.println("Error Rate = "+eval.errorRate());
//the confusion matrix
System.out.println(eval.toMatrixString("=== Overall Confusion Matrix ===\n"));


	
	//load new dataset
			DataSource source1 = new DataSource("C:\\Users\\Ian Sikobe\\Desktop\\RES.arff");
			Instances testDataset = source1.getDataSet();	
			//set class index to the last attribute
			testDataset.setClassIndex(testDataset.numAttributes()-1);

			//loop through the new dataset and make predictions
			System.out.println("===================");
			System.out.println("Actual Class, NB Predicted");
//			for (int i = 0; i < testDataset.numInstances(); i++) {
				//get class double value for current instance
				double actualClass = testDataset.instance(0).classValue();
				//get class string value using the class index using the class's int value
				String actual = testDataset.classAttribute().value((int) actualClass);
				//get Instance object of current instance
				Instance newInst = testDataset.instance(0);
				//call classifyInstance, which returns a double value for the class
				double predNB = nb.classifyInstance(newInst);
				//use this value to get string value of the predicted class
				String predString = testDataset.classAttribute().value((int) predNB);
				System.out.println(actual+", "+predString);

	
//			}







		return predString;
		
			}





private void CSV2arff(String inf) throws IOException {
	 //load CSV
    CSVLoader loader = new CSVLoader();
    loader.setSource(new File("C:\\Users\\Ian Sikobe\\Desktop\\"+inf+".csv"));
    Instances data = loader.getDataSet();//get instances object
 
    
    
//    // save ARFF
//    ArffSaver saver = new ArffSaver();
//    saver.setInstances(data);//set the dataset we want to convert
//    //and save as ARFF
//    saver.setFile(new File("C:\\Users\\Ian Sikobe\\Desktop\\"+inf+".arff"));
//    saver.writeBatch();
    
    // save ARFF
    BufferedWriter writer = new BufferedWriter(new FileWriter("C:\\Users\\Ian Sikobe\\Desktop\\"+inf+".arff"));
    writer.write(data.toString());
    writer.flush();
    writer.close();

    
	
}


private NaiveBayes train() throws Exception {
	//load dataset
	DataSource source = new DataSource("C:\\Users\\Ian Sikobe\\Desktop\\INSURANCEDATA.arff");
	Instances dataset = source.getDataSet();	
	//set class index to the last attribute
	dataset.setClassIndex(dataset.numAttributes()-1);
	//create and build the classifier!
	NaiveBayes nb = new NaiveBayes();
	nb.buildClassifier(dataset);
	//print out capabilities
	System.out.println(nb.getCapabilities().toString());
	return nb;
	
}


	
private void csvwrite(int exp, String cu, String acc, String sick, String con, String decin, String decpre) throws IOException {
	String filePath = "C:\\Users\\Ian Sikobe\\Desktop\\RES.csv";
	File file = new File(filePath); 
   
        // create FileWriter object with file as parameter 
        FileWriter outputfile = new FileWriter(file); 
  
        // create CSVWriter object filewriter object as parameter 
        CSVWriter writer = new CSVWriter(outputfile); 
  
        // adding header to csv 
        String[] header = { "A", "B", "C", "D", "E", "F" ,"G","class" }; 
        writer.writeNext(header); 
  
        // add data to csv
        String[] data1 =normalize(exp,cu,acc,sick,con,decin,decpre);
        System.out.println(data1);
        writer.writeNext(data1); 
        String[] data2 = { "0", "0", "1","1", "1", "0","0", "HIGH" }; 
        writer.writeNext(data2); 
        String[] data3 = { "0", "0", "1","0", "0", "1","0", "HIGH" }; 
        writer.writeNext(data3); 
        String[] data4 = { "0", "0", "1","1", "0", "1","0", "LOW" }; 
        writer.writeNext(data4); 
        String[] data5 = { "1", "0", "0","1", "1", "0","1", "LOW" }; 
        writer.writeNext(data5); 
        String[] data6 = { "0", "1", "1","1", "0", "1","1", "LOW" }; 
        writer.writeNext(data6); 

  
        // closing writer connection 
        writer.close(); 
    

	
}


}
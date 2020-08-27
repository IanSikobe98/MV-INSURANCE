package test;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.opencsv.CSVWriter;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.json.JsonObject;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.core.Application;
import weka.*;
import weka.core.Instance;
import weka.core.Instances;
import weka.core.converters.ArffSaver;
import weka.core.converters.CSVLoader;
import weka.core.converters.ConverterUtils.DataSource;
import weka.classifiers.Evaluation;
import weka.classifiers.bayes.NaiveBayes;


@Path("/amount")
public class Hello {
//	@GET
//	@Produces(MediaType.TEXT_XML)
//	public String sayHello3()
//	{
//		String resource = "<? xml version ='1.0' ?>"
//				+ "<hello>Hi bad ian in good html</hello>";
//		return resource;
//		
//	}
	
//	@GET
//	@Produces(MediaType.APPLICATION_JSON)
//	public String sayHello()
//	{
//int r=10;
//r=classify(r);
//String food = "{\"id\": "+r+", \"value\": \"Hello there\"}";
//
//return food;
//	}
	
	
//	@GET
//	@Produces(MediaType.APPLICATION_JSON)
//	public String sayHello2(@QueryParam("name")String name,@QueryParam("id")int no)
//	{
//int r=no;
//r=classify(r);
//String food = "{\"id\": "+r+", \"value\": \"Hello there\"}";
//String food2 = "{\"id\": "+r+", \"value\": \" "+name+" there\"}";
//
//return food2;
//	}
//	
//	
//	public int classify(int r) {
//		r=r*r;		
//		return r;
//		
//	}
	
	
//	@GET
//	@Produces(MediaType.TEXT_HTML)
//	public String sayHello2()
//	{
//		String resource = "<h1>Hi leon in html</h1>";
//		return resource;
//		
//	}
	
	

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String Amountdue(@DefaultValue("2") @QueryParam("exp")int exp,@QueryParam("caruse") String cu,@QueryParam("accident")String acc,@QueryParam("sickness")String sick,@QueryParam("conviction")String con
			,@QueryParam("previns")String decin,@QueryParam("previns1")String decpre,@QueryParam("id")int no) throws Exception
	{

System.out.println(exp+" "+cu+" "+acc+" "+sick+" "+con+" "+decin+" "+decpre+" "+no+" ");
int r=7;

//String acc="Yes";
//String con ="No";
//String sick ="No";
//String decin="Yes";
//String decpre="No";
//int no =9999;
r=classify(r,exp,cu,acc,sick,con,decin,decpre);
String food = "{\"id\": "+r+", \"value\": \"Hello there\"}";
String food2 = "{\"id\": "+r+", \"value\": \" "+exp+" there\"}";

File file = new File("C:\\Users\\Ian Sikobe\\Desktop\\RES.csv"); 
File file1 = new File("C:\\Users\\Ian Sikobe\\Desktop\\RES.arff"); 
File file2= new File("C:\\Users\\Ian Sikobe\\Desktop\\INSURANCEDATA.arff"); 

file.delete();
file1.delete();
file2.delete();


return food2;
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
	
	String[] data1 = { exp1,cu,acc,sick,con,decin,decpre, "LOW" }; 
	return data1;
}


public int classify(int r,int exp, String cu, String acc, String sick, String con, String decin, String decpre) throws Exception {
    CSV2arff("INSURANCEDATA");
	int p=r*5;
 
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
DataSource source2 = new DataSource("C:\\Users\\Ian Sikobe\\Desktop\\RES.arff");
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







		return p;
		
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
        writer.writeNext(data1); 
        String[] data2 = { "1", "0", "1","1", "0", "1","1", "HIGH" }; 
        writer.writeNext(data2); 
        String[] data3 = { "0", "1", "1","1", "1", "0","1", "HIGH" }; 
        writer.writeNext(data3); 
        String[] data4 = { "1", "0", "0","0", "0", "0","1", "LOW" }; 
        writer.writeNext(data4); 
        String[] data5 = { "1", "0", "0","0", "0", "0","0", "LOW" }; 
        writer.writeNext(data5); 
        String[] data6 = { "1", "0", "0","0", "0", "1","1", "LOW" }; 
        writer.writeNext(data6); 

  
        // closing writer connection 
        writer.close(); 
    

	
}


}

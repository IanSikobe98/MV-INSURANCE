function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 1000000000) {
    text = "Input not valid";
    document.getElementById("demo").innerHTML = text;
    return false;
    
  } else {
    text = " ";
    document.getElementById("demo").innerHTML = text;
	var info = "Successful Submission..........";
	 document.getElementById("status").innerHTML = info;
    return true;
  }
 
}
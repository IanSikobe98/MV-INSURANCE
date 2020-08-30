
var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script); 
$.getJSON('http://localhost:8090/valuators', function(data)  {
	  			console.log(data);
	  			var items = [];

	  			for(var i in data) {
	  				items.push(data[i].valuatorid);
		              }


		  var str = ""
		  for (var item of items) {
		    str += "<option>" + item + "</option>"
		  }
		  document.getElementById("valuatorid").innerHTML = str;
	  		
			

	    });

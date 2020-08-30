    
    var script = document.createElement('script');script.src = "@{https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js}";document.getElementsByTagName('head')[0].appendChild(script); 
    $(document).ready(function(){
    	$.ajax({
    		url: "http://localhost:8090/experience", //http://localhost/projo copy/
    		method: "GET",
    		success: function(data) {
    			console.log(data);
    			var Experience = [];
    			var Drivers = [];
    			var Experience2 = [];
    			tr=0;
    			j=1;
    			k=data.length-1;


    			while(j<6){
    			    			for(i=0;i<data.length;i++) {
    			    			if(j == data[i].experience){
    							Experience.push(data[i].experience + "years");
    							Drivers.push(data[i].drivers);
    				}
    			    			else{
    			    				tr=tr+1;
    			 
    			                }

    			                  
    			    			}
    			    			console.log(tr);
    			    		if(tr==data.length){
    			              
    			    			Experience.push(j + "years");
    							Drivers.push(0);
    			}
    			    			tr=0
    			    			  
    			    			j++
    			    		}
    			
    			console.log(Experience);
                console.log(Drivers);
                console.log(k);
    			if(data[k].experience>5){
    				Experience.push(data[k].experience + "years");
					Drivers.push(data[k].drivers);
    			}
    			    		console.log(Experience);
    			                  console.log(Drivers);

    			var chartdata = {
    				labels: ["1 year","2 years","3 years","4 years","5 years",">5 years"],
    				datasets : [
    					{
    						label: 'Drivers',
    						backgroundColor: 'rgba(200, 200, 200, 0.75)',
    						borderColor: 'rgba(200, 200, 200, 0.75)',
    						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
    						hoverBorderColor: 'rgba(200, 200, 200, 1)',
    						fill: false,
    						data: Drivers
    					},

    				]
    			};

    			var ctx = $("#myChart");

    			var barGraph = new Chart(ctx, {
    				type: 'bar',
    				data: chartdata,    
    				options: {
    			        scales: {
    			            yAxes: [{
    			                ticks: {
    			                    beginAtZero: true
    			                }
    			            }]
    			        }
    			    }	
    			});
    			
    		},
    		
    		error: function(data) {
    			console.log(data);
    		}
    	});
    });
    
    
    
    

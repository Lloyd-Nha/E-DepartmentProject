function handleFiles(files) {
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          getAsText(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }

function getAsText(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8      
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }

function loadHandler(event) {
      var csv = event.target.result;
      processData(csv);
    }
// **************************************************************************************************************************


function processData(csv){

       var lines=csv.split(/\r\n|\n/);
        // removed var to make it global
        result = [];
   
       var headers=lines[0].split(",");

       for(var i=1;i<lines.length;i++){

	     var obj = {};
	      var currentline=lines[i].split(",");

	       for(var j=0;j<headers.length;j++){
		     obj[headers[j]] = currentline[j];
		   }
		   
		   result.push(obj)
		   
	    }

	  
}

    function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }
function SearchFunction(){
	var searchNumber = document.getElementById("Search_Number").value;
    
	for (var i=0; i<result.length; i++){
      if (result[i].centre_no == searchNumber){
		 
		  var table = document.getElementById("school_table");
		  var newRow = table.insertRow(1);
		  
		  var cel1 = newRow.insertCell (0);
		  var cel2 = newRow.insertCell (1);
		  var cel3 = newRow.insertCell (2);
		  var cel4 = newRow.insertCell (3);
		  
          cel1.innerHTML = result[i].name;
          cel2.innerHTML = result[i].wrote_2016;
		  cel3.innerHTML = result[i].passed_2016;
		  cel4.innerHTML = result[i].wrote_2016 - result[i].passed_2016;
		  
		}
	
	}
	
	
}	
	
	
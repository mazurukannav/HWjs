
  
  function calculate(){
  
	var a = document.getElementById("input_a").value; 
	var b = document.getElementById("input_b").value;
	var sign = document.getElementById("input_sign").value;
	var result = document.getElementById("result");
	var c;
  
 if (sign=="+") {
   c = parseInt(a,10) + parseInt(b,10);
      }
    else if(sign=="-") {
      c = parseInt(a,10) - parseInt(b,10);
      }
    else if(sign=="*"){
      c = parseInt(a,10)*parseInt(b,10);
      }
    else if(sign=="/"){
      c = parseInt(a,10)/parseInt(b,10);
      }
	 
	result.innerHTML = a + sign + b + '=' + c;


  }
  

  
  


	
	

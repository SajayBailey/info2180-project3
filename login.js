window.onload = function (){
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	
	var login = document.getElementById("button");
	login.addEventListener("click", log_me_in);
	

	
	function log_me_in(){
		var word = password.value;
		var name = username.value;
				
		//validate username
		if (username.value.trim() === ""){
			alert ("Username field cannot be empty");
		}else{
			if (password.value.trim() === ""){
				alert ("Password field cannot be empty");
			}else{
				//alert("Good to go");
				//document.loginform.action = "login.php";
				var response;
				var send_to = "login.php";
				var send_em = "username="+name+"&password="+word;
				var ajaxrequest = new XMLHttpRequest();
				
				ajaxrequest.open("POST",send_to, true);
				ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				ajaxrequest.send(send_em);
				//alert ("Sent:  "+send_em);
				
				ajaxrequest.onreadystatechange = function(){
					if(ajaxrequest.readyState==4 && ajaxrequest.status==200){
						response = ajaxrequest.responseText;
						
						if (response == "failed"){
							alert ("Failed login. Please check your username and password.");
						}
						if (response == "success"){
							window.location.href = "homescreen.html";
						}
					}else {
						//alert ("Failed ready state change."+" Status: "+ajaxrequest.status+" state: "+ajaxrequest.readyState);
					}
				};
				//alert("Status: "+ajaxrequest.status+" state: "+ajaxrequest.readyState+" Response: "+ajaxrequest.responseText);
				
			}
		}
		
		// cant get this section to work, espectially the part that redirects
		
		
		
		
	};
	
	
}
window.onload = function (){
	//setup logout button
	var logout = document.getElementById("logout");
	logout.addEventListener("click", out);
	
	//setup compose button
	var compose = document.getElementById("compose");
	compose.addEventListener("click", new_msg_temp);
	
	//setup new user button
	var new_user = document.getElementById("new_user");
	new_user.addEventListener("click",add_new_user);
	
	
	//new user function
	function add_new_user (){
		window.location.href = "add user.html";
	}
	
	
	
	
	function out(){
		//alert ("Check.");
		var logoutreq = new XMLHttpRequest();
		logoutreq.onreadystatechange = function(){
			if (logoutreq.readyState==4 && logoutreq.status == 200){
				var response = logoutreq.responseText;
				alert(response);
				window.location.href = "login.html";
			}
		}
		logoutreq.open("GET","logout.php",true);
		logoutreq.send();
	}
	//create emoty message template
	function new_msg_temp(){
		//alert("compose");
		var compose_panel=[
		'<div id ="compose_window">',
		'<div id="new_message">',
		'<div id="header"><strong> New Message </strong></div>',
		'</div>',
		'<form>',
		'<fieldset>',
		'<strong>To</strong><br> <input type="text" id ="recipient" name="recipient" class="textfield"> <br>',
		'<strong>Subject</strong><br> <input type="text" id="subject" name="subject" class="textfield"> <br><br>',
		'<strong>Message</strong><br> <textarea  id = "message_body" name="message_body" cols="40" rows="5"></textarea> <br>',
		'<button id="Send"> <strong> Send </strong> </button>',
		'</fieldset>',
		'</form>',
		'</div>',
		'<div id="Response"></div>',
		
	].join('');
	document.getElementById("inbox").innerHTML = compose_panel;
	var process = document.getElementById("Send");
	process.addEventListener("click",send_msg);
	}
	
		function send_msg () {
		var receiver = document.getElementById("recipient").value;
		var subject = document.getElementById("subject").value;
		var msg_body = document.getElementById("message_body").value;
		var msg_info = "recipient=" + receiver + "&subject=" + subject + "&body="+msg_body;
		
		var send_msg_req = new XMLHttpRequest();
		send_msg_req.open("POST","new_message.php", true);
		send_msg_req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		send_msg_req.send(msg_info);
		
		//test alert
		alert("Created and sent");
		
		send_msg_req.onreadystatechange = function(){
			alert("ran");
			if (send_msg_req.status == 200 && send_msg_req.readyState==4){
				var response = send_msg_req.responseText;
				alert(response);
			}else{
				//alert(send_msg_req.status + " " + send_msg_req.readyState);
			}
		}		
		
	};
}
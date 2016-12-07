window.onload = function (){
	//setup logout button
	var logout = document.getElementById("logout");
	logout.addEventListener("click", out);
	
	//setup compose button
	var compose = document.getElementById("compose");
	compose.addEventListener("click", new_msg_temp);
	
	
	function out(){
		alert ("Check.");
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
	
	function new_msg_temp(){
		alert("compose");
		var compose_panel=[
		'<div id ="compose_window">',
		'<div id="new_message">',
		'<div id="header"><strong> New Message </strong></div>',
		'</div>',
		'<form>',
		'<fieldset>',
		'<strong>To</strong><br> <input type="text" id ="recipient" name="recipient" class="textfield"> <br>',
		'<strong>Subject</strong><br> <input type="text" id="subject" name="subject" class="textfield"> <br><br>',
		'<strong>Message</strong><br> <textarea  id = "message_content" name="message_content" cols="40" rows="5"></textarea> <br>',
		'<button id="Send"> <strong> Send </strong> </button>',
		'</fieldset>',
		'</form>',
		'</div>',
		'<div id="Response"></div>',
		
	].join('');
	document.getElementById("inbox").innerHTML= compose_panel;
	document.getElementById("Send").onclick= insert_data;
	}
}
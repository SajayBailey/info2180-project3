window.onload = function(){
	var firstname = document.getElementById("first");
	var lastname = document.getElementById("last");
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var vpassword = document.getElementById("vpassword");
	

	var button = document.getElementById("button");
	button.addEventListener("click", validate);

	function validate(){
		

		
		//validate firstname
		if (firstname.value.trim() === ""){
			alert ("Firstname field cannot be empty");
		}
		
		
		// validate lastname
		if (lastname.value.trim() === ""){
			alert ("Lastname field cannot be empty");
		}
		
		
		//validate username
		if (username.value.trim() === ""){
			alert ("Username field cannot be empty");
		}
		
		
		
		//check passwords
		if (password.value.trim() === ""){
			alert ("Password field cannot be empty");
		}else {
			if (vpassword.value.trim() === ""){
				alert ("Please verify your password.");
			}else{
				var pattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32})/;
				if (pattern.test(password.value)){
					//if password verified, set form action.
					if(password.value===vpassword.value){
						document.myform.action = "newuser.php";
						alert("Succes password!");
					}else{
						alert("Password verification failed.");
					}
				}else{
				alert("Password must contain at least one number, one lowercase letter, one capital letter and are at least 8 characters long");
				}
			}
		}
		


	}

};
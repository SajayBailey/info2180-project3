<?php
session_start();
if (isset($_SESSION['username'])){
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$user_name = $_POST['username'];
	$password = $_POST['password'];
	$vpassword = $_POST['vpassword'];

	if (empty($firstname)) {
	echo "First name is empty.";
	} else {
		if (empty($lastname)){
			echo "Lastname is empty.";
		} else {
			if (empty($user_name)){
				echo "Username empty.";
			}else {
				if (empty($password)){
					echo "Password empty.";
				} else {
					if (empty($vpassword)){
						echo "Password needs verification.";
					} else{
						if ($vpassword != $password){
							echo "Password verification failed.";
						}else{
							if (preg_match("/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32})/", $password, $match)){
								$intoIt = crypt($password,"salt");
								//echo "Password success.";
								try{
									$host = getenv('IP');
									$username = getenv('C9_USER');
									$password = '';
									$dbname = "cheapomail";
									$conn = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);
									$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
									
									$firstname = filter_var($firstname,FILTER_SANITIZE_STRING);
									$lastname = filter_var($lastname,FILTER_SANITIZE_STRING);
									$user_name = filter_var($user_name,FILTER_SANITIZE_STRING);
									
									$new = "INSERT INTO User (firstname, lastname, username, password) VALUES ('$firstname' , '$lastname', '$user_name', '$intoIt')";
									$conn->exec($new);
									echo "insertion succes!!";
								}catch (PDOException $e){
									echo $new . "<br>" . $e->getMessage();
								}
						
							} else {
								echo "No paswd match.";
							
							}
						}
					}
				}
			}
		}
	}
	}else {
		echo "Please login.";
	}
?>
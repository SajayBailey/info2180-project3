<?php
session_start();
//$user_name = $_POST['username'];
//$_password = $_POST['password'];

try {
	$host = getenv('IP');
	$username = getenv('C9_USER');
	$password = '';
	$dbname = "cheapomail";
	$conn = new PDO("mysql:host=$host; dbname=$dbname", $username, $password);
	
	$stmt = $conn->prepare('SELECT username FROM User WHERE username = :username AND password = :password');
	
	//get username
	$user_name = $_POST['username']; // filter_input(INPUT_REQUEST, "username", FILTER_SANITIZE_STRING); works the same too :-)
	
	//get and crypt password
	$_password = crypt ($_POST['password'], 'salt');
	
	//biind params
	$stmt->bindParam(":password",$_password, PDO::PARAM_STR);
	$stmt->bindParam(":username", $user_name, PDO::PARAM_STR);
	
	$stmt->execute();
	
	//get the data from sql query
	$data = $stmt->fetch(PDO::FETCH_ASSOC);
	
	//print to test if worked
	if (is_null($data) || empty($data)){
		//inform js of failure.
		//echo "Pass: ".$_password." Username: ".$user_name;
		echo "failed";
	} else {
		//set session for user.
		$_SESSION['username'] = $user_name;
		
		//send confirmation to js
		echo "success";
		//echo "Welcome ". $_SESSION['username'];//"Welcome ".$data['username'] . '!!';
	}
	
} catch (Exception $e) {
	echo $e-> getMessage();
}

/*
if (isset($_SESSION['username'])){
	// do something
	
} else {
	echo "Please log in.";
}
*/
?>
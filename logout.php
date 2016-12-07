<?php
session_start();

if (isset($_SESSION['username'])){
	session_destroy();
	echo "You are now logged out.";
	
} else {
	echo "You are already logged out.";
}

?>
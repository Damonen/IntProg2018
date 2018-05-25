<?php
	include_once("DataBase.php");
	if(!isset($_SESSION)) {
		session_start();
	}
	$db = DataBase::getDB();
	$errors = "";
	
	
	$query_text = "SELECT * FROM users WHERE id = '".$_SESSION['id']."';";
	$result = $db->Query($query_text);
	$row = mysqli_fetch_array($result);
	$errors .= "Логин: ".$row['login']."<br>Имя: ".$row['name'];
	
	echo $errors;
?>
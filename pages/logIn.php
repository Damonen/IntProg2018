<?php
	include_once("DataBase.php");
	$errors = "";
	$login = "";
	$pass = "";
	if($_POST['reg'] == 0) {
		$login = htmlspecialchars($_POST["login"]);
		$pass = htmlspecialchars($_POST["pass"]);
		$db = DataBase::getDB();
		if(empty($login)) {
			$errors .= "Введите Логин <br>";		
		}
		if(empty($pass)) {
			$errors .= "Введите пароль <br>";		
		}
		if(empty($errors)) {
			$query_text = "SELECT * FROM users WHERE login = '$login';";
			$result = $db->Query($query_text) or die(mysql_error()." in ". $query_text);
			$result = mysqli_fetch_assoc($result);
			if($result['password'] ==  mb_substr(md5($pass), 0, -2)) {
				if(!isset($_SESSION)) {
					session_start();
				}
				$_SESSION['login'] = $login;
				$_SESSION['id'] = $result['id'];
				$_SESSION['status'] = $result['status'];
				$errors = 1;
			} else {
				print_r($result['password']);
				print_r(md5($pass));
				print_r($pass);
				$errors .= "Пароли не совпадают";
			}
		}
		echo $errors;
	}
?>
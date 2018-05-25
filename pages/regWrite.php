<?php
	include_once("DataBase.php");
	$errors = "";
	$login = "";
	$name = "";
	$pass = "";
	$pass2 = "";
	if($_POST['reg'] == 1) {
		$login = htmlspecialchars($_POST["login"]);
		$name = htmlspecialchars($_POST["name"]);
		$pass = htmlspecialchars($_POST["pass"]);
		$pass2 = htmlspecialchars($_POST["pass2"]);
		$db = DataBase::getDB();
		if(empty($login)) {
			$errors .= "Введите логин <br>";		
		}
		if(empty($pass)) {
			$errors .= "Введите пароль <br>";		
		}
		if(empty($pass2)) {
			$errors .= "Повторите пароль <br>";		
		}
		if($pass != $pass2 && !empty($pass)) {
			$errors .= "Пароли не совпадают <br>";
		}
		if(empty($errors)) {
			/*$query_text = "SELECT EXISTS (SELECT * FROM `users` WHERE login = '$login');";*/
			$query_text = "SELECT * FROM `users` WHERE login = '$login';";
			$q = $db->Query($query_text);
			if($q->numrows == 0) {
				$pass = md5($pass);
				$query_text = "INSERT INTO `users` (`login`, `password`, `name`, `status`) VALUES ('$login', '$pass', '$name', '0');";
				if($db->Query($query_text) == 1) {
					$errors .= "1";
				}
				if(!isset($_SESSION)) {
					session_start();
				}
				$query_text = "SELECT * FROM users WHERE login = '$login';";
				$result = $db->Query($query_text) or die(mysqli_error()." in ". $query_text);
				$result = mysqli_fetch_assoc($result);
				$_SESSION['login'] = $login;
				$_SESSION['id'] = $result['id'];
				$_SESSION['status'] = 0;
				$errors = 1;
			} else {
				$errors .= "Логин занят <br>";
			}
		}
		echo $errors;
	}
?>
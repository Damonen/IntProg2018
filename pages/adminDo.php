<?php
	include_once("DataBase.php");
	$errors = "";
	if(!isset($_SESSION)) {
		session_start();
	}
	if($_SESSION['status'] == 1) {
		$db = DataBase::getDB();
		
		switch($_POST['action']) {
			case "0" :
				$query_text = "SELECT `id`, `login`, `name`, `status` FROM `users` WHERE 1";
				$result = $db->Query($query_text) or die(mysqli_error()." in ". $query_text);
				$table = Array();
				while($row = mysqli_fetch_array($result)) {
					array_push($table,$row);
				}
				echo json_encode($table);
				break;
			case "1" :
				if($_POST['loginD'] != ""){
					$query_text = "DELETE FROM `users` WHERE login= '" . htmlspecialchars($_POST['loginD']) . "';";
					$result = $db->Query($query_text) or die(mysqli_error()." in ". $query_text);
					print_r ($result);
					if($errors == "") {
						$errors .= "Пользователь удален";
					}
				} else {
					$errors .= "Введите логин";
				}
				break;
			case "2" :
				if($_POST['idC'] != ""){
					$query_text = "UPDATE `users` SET name='" . $_POST['nameC'] . "' WHERE login='" . $_POST['idC'] . "';";
					$result = $db->Query($query_text) or die(mysqli_error()." in ". $query_text);
					if($errors == "") {
						$errors .= "Данные изменены";
					}
				} else {
					$errors .= "Введите id";
				}
				break;
			case "3" :
				$login = htmlspecialchars($_POST["loginA"]);
				$name = htmlspecialchars($_POST["nameA"]);
				$pass = htmlspecialchars($_POST["passwordA"]);
				if(empty($login)) {
					$errors .= "Введите логин <br>";		
				}
				if(empty($pass)) {
					$errors .= "Введите пароль <br>";		
				}
				if($errors == "") {
					$pass = md5($pass);
					$query_text = "SELECT * FROM users WHERE login = '$login';";
					$q = $db->Query($query_text);
					if($q->numrows == 0) {
						$query_text = "INSERT INTO users (`login`, `password`, `name`, `status`) VALUES ('$login', '$pass', '$name', '$status');";
						if($db->Query($query_text) != 1) {
							$errors .= mysqli_error(). ' at ' . $query_text;
						}
					}  else {
						$errors .= "Такой логин уже есть <br>";
					}
				}
				if($errors == "") {
					$errors .= "Пользователь добавлен";
				}
				break;
		}
	} else {
		$errors .= "Вы не админ";
	}
	echo $errors;
	
?>
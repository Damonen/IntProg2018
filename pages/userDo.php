<?php
	include_once("DataBase.php");
	if(!isset($_SESSION)) {
		session_start();
	}
	$db = DataBase::getDB();
	$errors = "";
	if($_POST['neW'] == ""){
		$errors .= 'Введите новый пароль';
	}
	if($_POST['old'] == ""){
		$errors .= 'Введите старый пароль';
	}
	if($errors == "") {
		$query_text = "SELECT * FROM users WHERE id = '".$_SESSION['id']."';";
		$result = $db->Query($query_text);
		$row = mysqli_fetch_array($result);
		if(md5(mb_substr(md5($_POST['old']), 0, -2)) ==  $row['password'])) {
			$query_text = "UPDATE `users` SET password='" . md5($_POST['neW']) . "' WHERE id='" . $_SESSION['id'] . "';";
			$result = $db->Query($query_text);
			$errors .= "Данные изменены";
		} else {
			$errors .= 'Старый пароль неверен';
		}
	}
	echo $errors;
?>
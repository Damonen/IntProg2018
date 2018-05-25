<?php
	include_once("header.php");
	include_once("/core/DataBase.php");
?>
			
<h1> Регистрация пользователя</h1>



<?php
	$errors = "";
	$login = "";
	$fio = "";
	$pass = "";
	$pass2 = "";
	if(isset($_POST['sub']))
	{
		$login = htmlspecialchars($_POST["login"]);
		$fio = htmlspecialchars($_POST["fio"]);
		$pass = htmlspecialchars($_POST["pass"]);
		$pass2 = htmlspecialchars($_POST["pass2"]);
		$db = DataBase::getDB();
		
		if($pass != $pass2 && !empty($pass))
				$errors .= "Пароли не совпадают <br />";
			
			
		if(empty($pass))
				$errors .= "Введите пароль <br />";		
		
		print_r($_REQUEST);
		
		if(empty($errors))
		{
			$query_text = "INSERT INTO `users` (`login`, `pass`, `fio`, `type`) VALUES ('$login', '$pass', '$fio', '0');";
			
			print_r($db->Query($query_text));
			
		}
		
	}
?>


<div class='errors'> <?=$errors ?> </div>

<form action='registration.php' method='post'>
	<table>
		<tr>
			<td>Логин</td>
			<td><input type='text' name='login' value='<?=$login?>'></td>
		</tr>
		<tr>
			<td>Пароль</td>
			<td><input type='password' name='pass' value=''></td>
		</tr>
		<tr>
			<td>Пароль повторно</td>
			<td><input type='password' name='pass2' value=''></td>
		</tr>		
		<tr>
			<td>Фамилия</td>
			<td><input type='text' name='fio' value='<?=$fio?>'></td>
		</tr>			
		<tr>
			<td><input type='submit' name='sub' value='Регистрация'></td>
		</tr>				
	</table>
</form>

			
			
			
			
			
			
<?php
	include_once("footer.php");
?>
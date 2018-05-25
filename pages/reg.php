<div id='phpInn' style='font: 300 13px/18px Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; color:white;'>
	<div class='innBlock'>
		<h1  style='text-align:center;'> Регистрация пользователя</h1>
		<form>
			<table style="margin:auto;">
				<tr>
					<td>Логин</td>
					<td><input type='text' id="loginU"></td>
				</tr>
				<tr>
					<td>Пароль</td>
					<td><input type='password' id="passU"></td>
				</tr>
				<tr>
					<td>Пароль повторно</td>
					<td><input type='password' id="pass2U"></td>
				</tr>		
				<tr>
					<td>Фамилия</td>
					<td><input type='text' id="nameU"></td>
				</tr>			
				<tr>
					<td><input type='button' id="subU" value='Регистрация' style='color:black;'/></td>
				</tr>				
			</table>
		</form>
	</div>
	<div class='innBlock'>
		<h1 style='text-align:center;'> Вход</h1>
		<form>
			<table style="margin:auto;">
				<tr>
					<td>Логин</td>
					<td><input type='text' id="loginV"></td>
				</tr>
				<tr>
					<td>Пароль</td>
					<td><input type='password' id="passV"></td>
				</tr>		
				<tr>
					<td><input type='button' id="subV" value='Войти' style='color:black;'></td>
				</tr>				
			</table>
		</form>
	</div>
	<p id="phpErr"></p>
</div>
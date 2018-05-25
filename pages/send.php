<?php
	if(isset($_POST['idP'])){
		if(!isset($_SESSION)) {
			session_start();
		}
		
		switch ($_POST['idP']) {
			case 0:
				echo file_get_contents('home.php');
				break;
			case 1:
				echo file_get_contents('about.php');
				break;
			case 2:
				echo file_get_contents('gallery.php');
				break;
			case 3:
				echo file_get_contents('contacts.php');
				break;
			case 4:
				if(isset($_SESSION['login'])) {
					echo 2;
				} else {
					echo file_get_contents('reg.php');
				}
				break;
			case 5:
				if(isset($_SESSION['login'])) {
					if($_SESSION['status'] == 1) {
						echo file_get_contents('admin.php');
					} else {
						echo file_get_contents('user.php');
					}
				} else {
					echo 0;
				}
				break;
		}
	}
	exit;
?>
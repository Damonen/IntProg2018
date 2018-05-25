<?php
	session_start();
	if(isset($_SESSION['id'])) {
		$id = (int)$_GET['id'];
		if ( $id > 0 ) {
			$db = DataBase::getDB();
			$query = "SELECT `pic` FROM `userpic` WHERE `id`=".$id;
			$result = $db->Query($query_text);
			if ( mysql_num_rows( $res ) == 1 ) {
				$image = mysql_fetch_array($res);
				header("Content-type: image/*");
				echo $image['content'];
			}
		}
	}
?>
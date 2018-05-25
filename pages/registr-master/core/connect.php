<?php
  $db = DataBase::getDB();
  $query = "SELECT * FROM `users` WHERE `id` > {?} AND `online` = {?}";
  $table = $db->select($query, array(10, 1)); 
  $query = "SELECT `login` FROM `users` WHERE `email` = {?}";
  $login = $db->selectCell($query, array("test@mail.ru"));
?>
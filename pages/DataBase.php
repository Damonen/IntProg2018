<?php
class DataBase {

  private static $db = null; // Единственный экземпляр класса, чтобы не создавать множество подключений
  private $mysqli; // Идентификатор соединения
  private $sym_query = "{?}"; // "Символ значения в запросе"

  public static function getDB() {
    if (self::$db == null) self::$db = new DataBase();
    return self::$db;
  }

  private function __construct() {
    $this->mysqli = new mysqli("localhost", "root", "", "users");
  }


  public function Query($query) {
    $result_set = $this->mysqli->query($query);
    
	if (!$result_set) 
		return false;
	else
		return $result_set;
  }

  /* При уничтожении объекта закрывается соединение с базой данных */
  public function __destruct() {
    if ($this->mysqli) $this->mysqli->close();
  }
}
?>
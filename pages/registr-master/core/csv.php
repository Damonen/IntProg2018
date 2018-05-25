<?php
 
/**
 * Класс для работы с csv-файлами 
 */
class CSV {
 
    private $_csv_file = null;
 
 
	 function toWindow($ii){
		return iconv( "utf-8", "windows-1251",$ii);
	}
    /**
     * @param string $csv_file  - путь до csv-файла
     */
    public function __construct($csv_file) {
		$this->_csv_file = $csv_file; 
        /*if (file_exists($csv_file)) { 
            $this->_csv_file = $csv_file; 
        }
        else { 
           // throw new Exception("Файл "$csv_file" не найден"); 
        }*/
    }
 
    public function setCSV(Array $csv) {
		//header('Content-Type: text/csv; charset=windows-1251');
        //Открываем csv для до-записи, 
        //если указать w, то  ифнормация которая была в csv будет затерта
		echo $this->_csv_file;
        $handle = fopen($this->_csv_file, "w"); 
 
        foreach ($csv as $value) { //Проходим массив
            //Записываем, 3-ий параметр - разделитель поля
            fputcsv($handle, explode(";", $value), ";"); 
        }
        fclose($handle); //Закрываем
    }
 
    /**
     * Метод для чтения из csv-файла. Возвращает массив с данными из csv
     * @return array;
     */
    public function getCSV() {
        $handle = fopen($this->_csv_file, "r"); //Открываем csv для чтения
 
        $array_line_full = array(); //Массив будет хранить данные из csv
        //Проходим весь csv-файл, и читаем построчно. 3-ий параметр разделитель поля
        while (($line = fgetcsv($handle, 0, ";")) !== FALSE) { 
            $array_line_full[] = $line; //Записываем строчки в массив
        }
        fclose($handle); //Закрываем файл
        return $array_line_full; //Возвращаем прочтенные данные
    }
 
}
 
try {
    $csv = new CSV("ox2.csv"); //Открываем наш csv
    /**
     * Чтение из CSV  (и вывод на экран в красивом виде)
     */
    //echo "<h2>CSV до записи:</h2>";
	
	$arr = array("Антонов Б.А.;Админ OX2.ru;89031233333",
        "Колобков В.Б.;Босс OX2.ru;89162233333","Колобков В.Б.;Босс OX2.ru;89162233333");
	header('Content-Type: text/csv; charset=utf-8');
	header("Content-Disposition: attachment; filename=result.csv");

	foreach($arr as $p=>$titlesItem){
		$arr[$p] = $csv->toWindow($titlesItem);
		echo $arr[$p]."\n";
	}
	
 
    /**
     * Запись новой информации в CSV
     */
    /*$arr = array("Антонов Б.А.;Админ OX2.ru;89031233333",
        "Колобков В.Б.;Босс OX2.ru;89162233333","Колобков В.Б.;Босс OX2.ru;89162233333");
	foreach($arr as $p=>$titlesItem){
		$arr[$p] = $csv->toWindow($titlesItem);
	}
	
    $csv->setCSV($arr);*/
}
catch (Exception $e) { //Если csv файл не существует, выводим сообщение
    echo "Ошибка: " . $e->getMessage();
}
?>
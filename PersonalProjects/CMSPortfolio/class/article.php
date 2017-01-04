<?php
    class Article{
        public $id;
        public $title;
        public $author;
        public $date;
        public $text;

        function __construct($id, $title, $author, $date, $text){
            $this->id = $id;
            $this->title = $title;
            $this->author = $author;
            $this->date = $date;
            $this->text = $text;
        }
    }
?>
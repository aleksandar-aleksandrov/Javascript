<?php

class Note {
    public $title;
    public $text;
    public $user;
    public $time;

    public function __construct($title, $text, $user, $time){
        $this->title = $title;
        $this->text = $text;
        $this->user = $user;
        $this->time = $time;
    }


}

?>
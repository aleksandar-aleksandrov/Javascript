<?php
    class Project{
        public $id;
        public $name;
        public $link;
        public $github;
        public $technologies;
        public $description;

        function __construct($id,$name, $link, $github, $technologies, $description){
            $this->id = $id;
            $this->name = $name;
            $this->link = $link;
            $this->github = $github;
            $this->technologies = $technologies;
            $this->description = $description;
        }
    }

?>
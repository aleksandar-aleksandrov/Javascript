<?php

    class User{
        public $name;
        public $email;
        public $pass;
        public $role;
        public $bio;
        public $imgpath;

        function __construct($name, $email, $pass, $role, $bio, $imgpath) {
            $this->name = $name;
            $this->email = $email;
            $this->pass = $pass;
            $this->role = $role;
            $this->bio = $bio;
            $this->imgpath = $imgpath;
        }
    }   

?>
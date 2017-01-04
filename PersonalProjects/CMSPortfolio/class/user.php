<?php

    class User{
        public $name;
        public $email;
        public $pass;
        public $role;
        public $bio;

        function __construct($name, $email, $pass, $role, $bio) {
            $this->name = $name;
            $this->email = $email;
            $this->pass = $pass;
            $this->role = $role;
            $this->bio = $bio;
        }
    }   

?>
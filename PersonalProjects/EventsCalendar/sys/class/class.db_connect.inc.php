<?php

    //declare(strict_types=1);

    class DB_Connect{

        protected $db;

        /**
        *   Checks if there is already db object and creates a new on if not
        *
        *   @param object $db A db object
        */

        protected function __construct($db=NULL){
            if(is_object($db)){
                $this->object = $db;
            } else {
                $dsn = "mysql:host=".DB_HOST.";dbname=".DB_NAME;
                try {
                    $this->db = new PDO($dsn, DB_USER, DB_PASS);
                } catch (Exception $e){
                    // If unsuccessful, output the error_log
                    die($e->getMessage());
                }
            }
        }

    }

?>
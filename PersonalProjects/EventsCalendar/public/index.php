<?php

    //declare(strict_types=1);

    include_once '../sys/core/init.inc.php';

    $cal = new Calendar($dbo, "2016-01-01 12:00:00");

    if(is_object($cal)){
        echo "<pre>", var_dump($cal), "</pre>";
    }

?>
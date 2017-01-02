<?php

    $server = "";
    $username = "";
    $password = "";

    $conn = mysqli_connect($server, $username, $password, $username);

    if(!$conn) {
        die('Connection failed: '. mysqli_connect_error());
    }

?>
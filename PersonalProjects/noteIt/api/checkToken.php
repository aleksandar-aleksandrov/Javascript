<?php

    // INCLUDE CONNECTION
    include('connection.php');

    // FETCH DATA FROM ANGULARJS

    $data = file_get_contents('php://input');
    $res = json_decode($data);
    $email = $res->email;
    $token = $res->token;
    $error = 'error';

    $data = array();

    // SEND DATA TO DB

    $sql = "SELECT username, email, token FROM users WHERE email = '$email'";

    $result = mysqli_query($conn, $sql);


    if (mysqli_num_rows($result) > 0) {
        
        $row = mysqli_fetch_assoc($result);

        if(strcmp($row['token'], $token) === 0) {
            $data = array('name' => $row['username'], 'email' => $row['email']);
            echo json_encode($data);
        } else {
            $data = array('error' => $error);
            echo json_encode($data);
        }

    } else {
        $data = array('error' => $error);
        echo json_encode($data);
    }
?>
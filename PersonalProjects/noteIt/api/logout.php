<?php

    include("connection.php");

    $postdata = file_get_contents("php://input");
    $res = json_decode($postdata);

    $email = $res->email;

    $query = "UPDATE users SET token='SIGNEDOUT' WHERE email='$email'";

    $result = mysqli_query($conn, $query);

    if($result){
        $data = array("message" => "success");
    } else {
        $data = array("message" => "error");
    }

    echo json_encode($data);

?>
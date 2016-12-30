<?php
    include("connection.php");

    $postdata = file_get_contents("php://input");
    $res = json_decode($postdata);

    $note = $res->note;
    $email = $res->email;

    $sql = "INSERT INTO notes(email, note) VALUES ('$email', '$note')";

    $result = mysqli_query($conn, $sql);

    if($result) {
        $data = array("message" => "success");
        echo json_encode($data);
    } else {
        $data = array("message" => "error");
        echo json_encode($data);
    }
?>
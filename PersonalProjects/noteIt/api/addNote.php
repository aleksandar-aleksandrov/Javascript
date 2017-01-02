<?php
    include("connection.php");
    include("Note.php");

    $postdata = file_get_contents("php://input");
    $res = json_decode($postdata);

    $note = new Note($res->title, $res->note, $res->email, 'n/a');

    $sql = "INSERT INTO notes(email, note, title) VALUES ('$note->user', '$note->text', '$note->title')";
    $result = mysqli_query($conn, $sql);

    if($result) {
        $data = array("message" => "success");
        echo json_encode($data);
    } else {
        $data = array("message" => "error");
        echo json_encode($data);
    }
?>
<?php
    include("connection.php");
    include("Note.php");

    $postdata = file_get_contents("php://input");
    $result = json_decode($postdata);

    $email = $result->email;
    
    $sql = "SELECT * FROM notes WHERE email='$email'";

    $result = mysqli_query($conn,$sql);

    $data = array();

    while($row = mysqli_fetch_assoc($result)) {
        array_push($data, new Note($row['title'], $row['note'], '$email', $row['time']));
    }

    echo json_encode($data);
?>
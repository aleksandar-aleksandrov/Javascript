<?php
    include('connection.php');

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);

    $query = "SELECT username, email FROM users";

    $result = mysqli_query($conn, $query);

    $users = array();

    while($row = mysqli_fetch_assoc($result)) {
        array_push($users, array(
            'name' => $row['username'],
            'email' => $row['email']
        ));
    }

    echo json_encode($users);

?>
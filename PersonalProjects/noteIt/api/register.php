<?php
    include('connection.php');

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);
    
    $date = date('Ymd');

    $user = $request->user;
    $email = $request->email;
    $pass = md5($request->pass);
    $token = md5($email.$pass.$date);

    $data = array();

    $query = "SELECT username, email, password, token FROM users WHERE email='$email'";

    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $data = array('There is already a registration with the given email.');
        echo json_encode($data);

    } else {

        $query = "INSERT INTO users (username, email, password, token) VALUES ('$user', '$email', '$pass', '$token')";

        $result = mysqli_query($conn, $query);

        if ($result) {

            echo json_encode($token);

        } else {

            echo json_encode('There was problem with registering. Please try again later.');

        }

    }
?>
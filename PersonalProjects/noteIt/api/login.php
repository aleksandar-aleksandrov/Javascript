<?php
    // INCLUDE CONNECTION
    include('connection.php');

    // FETCH DATA FROM ANGULARJS

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);

    $email = $request->email;
    $pass = md5($request->pass);
    $date = date('Ymd');
    $token = md5($email.$pass.$date);

    // ERROR MESSAGE
    $error = 'error';

    // SEND QUERY TO THE DB

    $sql = "SELECT * FROM users WHERE email='$email'";

    $result = mysqli_query($conn, $sql);

    // IF RESULTS
    if (mysqli_num_rows($result) > 0) {

        $row = mysqli_fetch_assoc($result);

        // COMPARE THE PASSWORDS
        if(strcmp($row['password'], $pass) === 0) {
            
            // UPDATE WITH NEW TOKEN
            $query = "UPDATE users SET token='$token' WHERE email='$email'";
            
            $result = mysqli_query($conn, $query);
            
            if ($result) {
                $data = array('email' => $email, 'token' => $token);
                echo json_encode($data);

            } else {
                $data = array('error' => $error);
                echo json_encode($data);

            }

        } else {
            $data = array('error' => $error);
            echo json_encode($data);
        }
        
    } else {
        $data = array('error' => $error);
        echo json_encode($data);
    }

?>
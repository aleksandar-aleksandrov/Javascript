<?php
    include('connection.php');

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);

   //$email = $request->email;
   // $pass = md5($request->pass);
    $email = 'as@a.com';
    $pass = md5('123456');
    $date = date('Ymd');
    $token = md5($email.$pass.$date);
    $error = 'ERROR';


    $sql = "SELECT * FROM users WHERE email='$email'";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {

        $row = mysqli_fetch_assoc($result);

        if ($row['password'] == $pass) {
            
            $query = "UPDATE users SET token='$token' WHERE email='$email' AND password='$pass'";
            
            $result = mysqli_query($conn, $query);
            
            if ($result) {

                echo json_encode($token);

            } else {
                echo $error.'hier';
                echo json_encode($error);

            }

        } else {
            echo $error.'da';
            echo json_encode($error);

        }
        
    } else {
        echo $error.'wiederhier';
        echo json_encode($error);

    }

?>
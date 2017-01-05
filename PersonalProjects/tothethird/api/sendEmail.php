<?php


    $postdata = file_get_contents("php://input");
    $email = json_decode($postdata);

    $to = "aaleksandar.aleksandrov@gmail.com";
    $subject = "FROM: ".$email->name." (".$email->from.") ".$email->phone;
    $message = $email->message;


    if(!(@mail($to, $subject, $message))){
        $data = array("error" => "error");
        echo json_encode($data);
    }

?>

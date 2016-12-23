<?php

    $postdata = file_get_contents('php://input');
    $emailInfo = json_decode($postdata);

    $to = 'aaleksandar.aleksandrov@gmail.com';
    $title = $emailInfo->title;
    $from = 'From: '.$emailInfo->name.' <'.$emailInfo->email.'>';
    $text = $emailInfo->msg;

    if(mail($to, $title, $text, $from)){
        echo json_encode('email sent');
    } else {
        echo json_encode('error');
    }


?>
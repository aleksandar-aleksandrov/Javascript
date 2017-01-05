<?php
    $postdata = file_get_contents("php://input");
    $res = json_decode($postdata);

    $dir = "/wamp64/www/pb/img/portfolio/".$res->id;
    $files = scandir($dir);
    $data = array_slice($files, 2);

    echo json_encode($data);
?>
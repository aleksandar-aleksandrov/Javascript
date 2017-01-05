<?php
    $id = 6;
    $dir = "/wamp64/www/pb/img/portfolio/".$id;
    $files = scandir($dir, 1);

    echo json_encode($files);
?>
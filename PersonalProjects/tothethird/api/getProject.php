<?php

    include("connection.php");
    include("class/project.php");

    $postdata = file_get_contents("php://input");
    $res = json_decode($postdata);


    $sql = "SELECT * FROM projects WHERE id='$res->id'";

    $result = mysqli_query($db, $sql);
    $row = mysqli_fetch_assoc($result);
    
    if($row){
        $project = new Project($row['id'], $row['name'],$row['link'],$row['github'],$row['technologies'],$row['description']);

        echo json_encode($project);
    } else {
        $data = array('error' => "error");
        echo json_encode($data);
    }
    



?>
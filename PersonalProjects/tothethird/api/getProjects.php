<?php

    include("connection.php");
    include("class/project.php");

    $data = array();

    $sql = "SELECT * FROM projects";

    $result = mysqli_query($db, $sql);

    while($row = mysqli_fetch_assoc($result)){
        $project = new Project($row['id'], $row['name'],$row['link'],$row['github'],$row['technologies'],$row['description']);
        array_push($data, $project);
    }

    echo json_encode($data);



?>
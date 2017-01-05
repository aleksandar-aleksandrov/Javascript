<?php

    include("connection.php");
    include("class/article.php");

    $sql = "SELECT id, title, author, date FROM articles";

    $result = mysqli_query($db, $sql);

    $data = array();

    while($row = mysqli_fetch_assoc($result)){

        array_push($data, new Article($row['id'], $row['title'], $row['author'], $row['date'], ''));

    }

    echo json_encode($data);


?>
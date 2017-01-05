<?php
    include("connection.php");
    include("class/article.php");

    $postdata = file_get_contents("php://input");
    $res = json_decode($postdata);

    $id = $res->id;

    $sql = "SELECT * FROM articles WHERE id='$id'";
    
    $result = mysqli_query($db, $sql);

    $row = mysqli_fetch_assoc($result);

    $data = array();

    if($row){
        $article = new Article($row['id'], $row['title'], $row['author'], $row['date'], $row['atext']);
        echo json_encode($article);
    } else {
        $data = array("error" => "error");
        echo json_encode($data);
    }

?>
<?php
    include('connection.php');


    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $level = $request->levelNumerical;

    $query = "SELECT * FROM roundone WHERE level='$level' ORDER BY rand()  LIMIT 5";
    $result = mysqli_query($conn, $query) or die(mysqli_error($conn));

    $words = array();

    while ($row = mysqli_fetch_array($result)) {
        array_push($words, array(
            "german" => $row['german'],
            "english" => $row['english']
        ));
    }

    echo json_encode($words);


?>
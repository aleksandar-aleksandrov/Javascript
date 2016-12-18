<?php

    include('connection.php');

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);
    $level = $request->levelNumerical;

    $query = "SELECT * FROM roundthree WHERE level='$level' ORDER BY rand() LIMIT 5";

    $result = mysqli_query($conn, $query);

    $senddata = array();

    while($row = mysqli_fetch_array($result)) {
        array_push($senddata, array(
            "firstPart" => $row['firstPart'],
            "secondPart" => $row['secondPart'],
            "missingWord" => $row['missingWord']
        ));
    }

    echo json_encode($senddata);


?>
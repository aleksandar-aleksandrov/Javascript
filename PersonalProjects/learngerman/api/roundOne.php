<?php
    include('connection.php');
    include('globalVariables.php');


    // RECEIVE DATA FROM ANGULARJS
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $level = $request->levelNumerical;

    // SEND A QUERY TO DB
    $query = "SELECT * FROM roundone WHERE level='$level' ORDER BY rand()  LIMIT 5";
    $result = mysqli_query($conn, $query) or die(mysqli_error($conn));

    $words = array();

    // FETCH THE RESULTS TO AN ARRAY
    while ($row = mysqli_fetch_array($result)) {
        array_push($words, array(
            "germanWord" => $row['german'],
            "englishWord" => $row['english']
        ));
    }

    // SEND BACK THE RESULTS
    if(count($words) > 0) {
        echo json_encode($words);
    } else {
        echo json_decode($error);
    }
    

?>
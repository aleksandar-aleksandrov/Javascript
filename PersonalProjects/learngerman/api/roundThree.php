<?php

    include('connection.php');
    include('globalVariables.php');

    // Get data from Angularjs

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);
    $level = $request->levelNumerical;

    // Connect and send query to DB

    $query = "SELECT * FROM roundthree WHERE level='$level' ORDER BY rand() LIMIT 5";

    $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
    $senddata = array();

    // Fetch the results
    while($row = mysqli_fetch_array($result)) {
        array_push($senddata, array(
            "firstPart" => $row['firstPart'],
            "secondPart" => $row['secondPart'],
            "missingWord" => $row['missingWord']
        ));
    }
    
    // Send results back to AngularJS

    if($senddata) {
        echo json_encode($senddata);
    } else {
        echo $error;
    }
    


?>
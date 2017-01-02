<?php

    include('connection.php');
    include('globalVariables.php');

    // Get data from Angularjs

    $postdata = file_get_contents('php://input');
    $request = json_decode($postdata);
    $level = $request->levelNumerical;

    // Connect and send query to DB

    $query = "SELECT DISTINCT * FROM roundthree WHERE level='$level' ORDER BY rand() LIMIT 5";

    $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
    $dataToSend = array();

    // Fetch the results
    while($row = mysqli_fetch_array($result)) {
        //echo json_encode($row['missingWord']);
        array_push($dataToSend, array(
            "firstPart" => $row['firstPart'],
            "secondPart" => $row['secondPart'],
            "missingWord" => $row['missingWord']
        ));
    }

    //echo json_encode("halp");
    //echo $dataToSend;
    // Send results back to AngularJS

    if(count($dataToSend) > 0) {
        echo json_encode($dataToSend);
    } else {
        $dataToSend = array("error" => $error);
        echo json_encode($dataToSend);
    }
    


?>
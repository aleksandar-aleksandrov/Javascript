<?php

    // GET CONNECTION
    include('connection.php');
    include('globalVariables.php');

    // RECEIVE JSON DATA FROM ANGULARJS
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $level = $request->levelNumerical;

    // THE RESULTS WILL BE STORRED HERE
    $word = array();
    
    // QUERY FOR ONE WORD IN THE CORRECT LEVEL
    $query = "SELECT * FROM roundTwo WHERE level='$level' ORDER BY rand() LIMIT 1";

    // SEND TO DB 
    $result = mysqli_query($conn, $query) or die(mysqli_error_list());

    // FETCH THE RESULTS

    while($row = mysqli_fetch_assoc($result)){
        $word = array(
            "germanWord" => $row['german'],
            "desc" => $row['descript']
        );
    }

    // SEND RESULTS BACK TO ANGULARJS
    if(count($word) > 0) {
        echo json_encode($word);
    } else {
        echo json_encode($error);
    }
    

?>
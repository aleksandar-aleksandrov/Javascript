<?php
    include('connection.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $level = $request->levelNumerical;
    $word = array();
    $query = "SELECT * FROM roundTwo WHERE level='$level' ORDER BY rand() LIMIT 1";
    $result = mysqli_query($conn, $query) or die(mysqli_error_list());
    while($row = mysqli_fetch_assoc($result)){
        $word = array(
            "germanWord" => $row['german'],
            "desc" => $row['descript']
        );
    }

    echo json_encode($word);

?>
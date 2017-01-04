<?php
    $user;
    $id = $_SESSION['id'] +1;
    $sql = "SELECT * FROM users WHERE id='$id'";
    $result = mysqli_query($db, $sql);
    $row = mysqli_fetch_assoc($result);
    $user = new User($row['name'], $row['email'], '', $row['role'], $row['bio']);
    
?>
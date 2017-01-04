<?php
    if(array_key_exists("logout", $_GET)) {
        session_destroy();
        setcookie("id", "", time() - 60*60);
        $_COOKIE["id"] = "";
    } else if ((array_key_exists("id", $_SESSION) AND $_SESSION['id']) OR (array_key_exists("id", $_COOKIE) AND $_COOKIE['id'])) {
        
        header("Location: loggedinpage.php");
        
    }

?>
<?php
    include("config/config.php");
    include("class/user.php");

    session_start();

    $container = "<div class='alert alert-danger'>";
    $error = null;
    $message = null;

    if(isset($_POST['submit'])) {
        $user = new User('',mysqli_real_escape_string($db,$_POST['email']), $_POST['password'],'','');

        if(!$user->email) {
            $error .= "An email address is required.<br />";
        }

        if(!$user->pass) {
            $error .= "A password is required.<br />";
        }

        if($error != "") {
            $message = $container."<p><b>There were error(s) in your form:</b></p>".$error."</div>";
        } else {
            $sql = "SELECT id, email, password FROM users WHERE email='$user->email'";

            $result = mysqli_query($db, $sql);

            $row = mysqli_fetch_assoc($result);
            $hash = md5(md5($row['id']).$_POST['password']);

            if($row && $hash == $row['password']){
                $_SESSION['id'] = mysqli_insert_id($db);

                if($_POST['stayLoggedIn'] == '1'){
                    setcookie("id", $row['id'], time() + 60*60*24);
                }

                header("Location: dashboard.php");
            } else {
                $message = $container."<p><b>The credentials are wrong!</b></p></div>";
            }
        }
    }
?>
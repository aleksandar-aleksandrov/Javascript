<?php

    $loginError = "";
    if( isset($_POST['login'])) {
        function validateFormData($formData) {
            $formData = trim(stripcslashes(htmlspecialchars($formData)));
            return $formData;
        }

        $formUser = validateFormData($_POST['username']);
        $formPass = validateFormData($_POST['password']);

        include('connection.php');

        $query = "SELECT username, email, password FROM users WHERE username='$formUser'";

        $result = mysqli_query($conn, $query);

        if(mysqli_num_rows($result) > 0) {

            while($row = mysqli_fetch_assoc($result)) {
                $user = $row['username'];
                $email = $row['email'];
                $hashedPass = $row['password'];
            }

            if(password_verify($formPass,$hashedPass)) {
                // correct login details

                session_start();

                $_SESSION['loggedUser'] = $user;
                $_SESSION['loggedEmail'] = $email;

                header('Location: profile.php');
            } else {
                $loginError = "<div class='alert alert-danger'> Wrong username / password combination. Try again</div>";

            }

        } else {
            $loginError = "<div class='alert alert-danger'> No such user in database. Please try again. <a class='close' data-dismiss='alert'>&times;</a></div>";
        }

        mysqli_close($conn);
    }

?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Login</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">


    <!-- Custom styles for this template -->
    <link href="blog.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    </head>

    <body>
	<div class="container">
        <h1>Login</h1>
        <p class="lead">Use this form to log in to your account</p>

        <?php echo $loginError; ?>

        <form action="<?php echo htmlspecialchars( $_SERVER['PHP_SELF'] ); ?>" class="form-inline" method="post">
            <div class="form-group">
                <label for="login-username" class="sr-only">Username</label>
                <input type="text" class="form-control" id="login-username" placeholder="username" name="username">
            </div>
            
            <div class="form-group">
                <label for="login-password" class="sr-only">Password</label>
                <input type="password" class="form-control" id="login-password" name="password">
            </div>

            <button class="btn btn-default" name="login">Login</button>

        </form>
    
    </div>
    


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </body>
</html>

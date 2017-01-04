<?php
    include("login/login.php");
    include("login/logout.php");
    
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

    <title>Admin Panel</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="css/main.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
        

        <div class="container-fluid">
          <div class="row">
              <div class="col-lg-4 col-lg-offset-4">
                  <form method="post" enctype="multipart/form-data" action="" class="signin" novalidate>
                        <h2 class="signin-heading">Please sign in</h2>
                        <div class="form-group">
                            <label for="email" class="sr-only">Email address</label>
                            <input type="email" id="email" name="email" class="form-control" placeholder="Email address" autofocus>
                        </div>
                        <div class="form-group">
                            <label for="password" class="sr-only">Password</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label><input type="checkbox" name="stayLoggedIn" value=1> Keep me logged in!</label>
                        </div>
                        <input class="btn btn-lg btn-primary btn-block" type="submit" name="submit" />
                        
                    </form>
                    <?php echo $message; ?>
              </div>
          </div>
      </div>

    


    
  </body>
  <script src="libs/jquery-3.1.1.min.js"></script>
  <script src="js/signin.js"></script>
</html>

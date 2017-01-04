<?php
    include("../config/config.php");
    include("../class/user.php");
    include("../class/article.php");
    include("../login/checkSigned.php");
    include("../login/getUser.php");
    $id = $_GET['id'];
    $message = "Are you sure you want to delete article with ID = '$id' ?";
    if(array_key_exists('delete', $_POST)){
        $sql = "DELETE FROM articles WHERE id='$id'";
        if(!mysqli_query($db,$sql)){
            $message = "An problem occured. Try again later";
        } else {
            header("Location: ../articles.php");
        }
    } else if(array_key_exists('return', $_POST)) {
        header("Location: ../articles.php");
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

    <title>Admin Panel</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="../css/main.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <?php include("../structure/nav.php"); ?>
    <div class="container-fluid dashboard">
        <div class="row">
            <?php include("../structure/sidebar.php"); ?>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
                
                <div class="col-sm-8 col-sm-offset-2 col-delete">
                    <div class="alert alert-danger">
                        <span><?php echo $message;?></span>
                    </div>
                </div>
                <div class="col-sm-offset-5 col-sm-5">
                    <form method="post">
                        <button class="btn btn-danger" name='delete'>DELETE</button>
                        <button class="btn btn-default" name="return">GO BACK</button>
                    </form>
                        
                </div>
                    
              
                

            </div>
        </div>
    </div>

    
  </body>
  <script src="../libs/jquery-3.1.1.min.js"></script>
  <script src="../js/articles.js"></script>
</html>

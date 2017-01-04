<?php
    include("config/config.php");
    include("class/user.php");
    include("login/checkSigned.php");
    include("login/getUser.php");
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
    <?php include("structure/nav.php"); ?>
    <div class="container-fluid dashboard">
        <div class="row">
            <?php include("structure/sidebar.php"); ?>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2">
                <h1 class="page-header">Articles <button class="btn btn-default pull-right" id="goAddArticle">Add New Article</button></h1>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Title</th>
                                <th>Timestamp</th>
                                <th>Author</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php include("articles/loadarticles.php"); ?>
                        </tbody>
                    </table>
                </div>
                
                <div class="pagechange">
                    <span class="glyphicon glyphicon-glyphicon glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="glyphicon glyphicon glyphicon-chevron-right" alt="edit" aria-hidden="true"></span>
                </div>
                

            </div>
        </div>
    </div>

    
  </body>
  <script src="libs/jquery-3.1.1.min.js"></script>
  <script src="js/articles.js"></script>
</html>

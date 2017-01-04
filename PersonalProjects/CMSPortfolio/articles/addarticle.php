<?php
    include("../config/config.php");
    include("../class/user.php");
    include("../class/article.php");
    include("../login/checkSigned.php");
    include("../login/getUser.php");

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
                <h1 class="page-header">Add New Article <button class="btn btn-default pull-right" id="goArticles">Go Back To Articles</button></h1>
                
                <form method="post" enctype="multipart/form-data" action="" class="form-horizontal" novalidate>
                    <div class="form-group">
                        <label for="title" class="col-sm-2 control-label">Title</label>
                        <div class="col-sm-8">
                            <input type="text" id="title" name="title" class="form-control" autofocus>
                        </div>
                    </div>
                   
                    
                    <div class="form-group">
                        <label for="atext" class="col-sm-2 control-label">Article</label>
                        <div class="col-sm-8">
                            <textarea id="atext" name="atext" class="form-control" rows="25"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-6 col-sm-offset-4">
                        <button class="btn btn-primary pull-right" name="submit" id="addArticle">Add The Article</button>
                        
                    </div>
                    <div class="col-sm-8 col-sm-offset-2">
                        <?php include("addArticleDB.php"); ?>
                    </div>
                    
                </form>
                

            </div>
        </div>
    </div>

    
  </body>
  <script src="../libs/jquery-3.1.1.min.js"></script>
  <script src="../js/articles.js"></script>
</html>

<?php
    include("../config/config.php");
    include("../class/user.php");
    include("../class/project.php");
    include("../login/checkSigned.php");
    include("../login/getUser.php");
    if($_GET['id']){
        $id = $_GET['id'];
        $sql = "SELECT * FROM projects where id='$id'";
        $result = mysqli_query($db, $sql);
        if($row = mysqli_fetch_assoc($result)){
            $project = new Project($row['id'], $row['name'], $row['link'], $row['github'], $row['technologies'], $row['description']);
        } else {
            header("Location: ../projects.php");
        }
        
    } else {
        header("Location: ../projects.php");
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
                <h1 class="page-header">Edit Project(id = <?php echo $id; ?>) <button class="btn btn-default pull-right goProjects">Go Back To Projects</button></h1>
                
                <form method="post" enctype="multipart/form-data" action="" class="form-horizontal" novalidate>
                    <div class="form-group">
                        <label for="name" class="col-sm-2 col-sm-offset-2 control-label">Project Name</label>
                        <div class="col-sm-6">
                            <input type="text" id="name" name="name" value = "<?php echo $project->name ?>" class="form-control" autofocus>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="link" class="col-sm-2 col-sm-offset-2 control-label">Link</label>
                        <div class="col-sm-6">
                            <input type="text" id="link" name="link" value = "<?php echo $project->link ?>" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="github" class="col-sm-2 col-sm-offset-2 control-label">Github</label>
                        <div class="col-sm-6">
                            <input type="text" id="github" name="github" value = "<?php echo $project->github ?>" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="tech" class="col-sm-2 col-sm-offset-2 control-label">Technologies</label>
                        <div class="col-sm-6">
                            <input type="text" id="tech" name="tech" value = "<?php echo $project->technologies ?>" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="description" class="col-sm-2 col-sm-offset-2 control-label">Description</label>
                        <div class="col-sm-6">
                            <textarea id="description" name="description" class="form-control" rows="15"><?php echo $project->description; ?>
                            </textarea>
                        </div>
                    </div>
                    <div class="col-sm-6 col-sm-offset-4">
                        <button class="btn btn-primary pull-right" name="submit" id="addProject">Update The Project</button>
                        
                    </div>
                    <div class="col-sm-6 col-sm-offset-4">
                        <?php include("editProjectDB.php"); ?>
                    </div>
                    
                </form>
                

            </div>
        </div>
    </div>

    
  </body>
  <script src="../libs/jquery-3.1.1.min.js"></script>
  <script src="../js/projects.js"></script>
</html>

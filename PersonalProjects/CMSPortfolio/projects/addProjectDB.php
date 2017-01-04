<?php
    

    $blankInputs = "<div class='alert alert-danger'><p>Please fill all the input fields!</p></div>";
    $error = "<div class='alert alert-danger'><p>There was an error!</p></div>";
    $success= "<div class='alert alert-success'><p>Project successfully added!</p></div>";

    if(isset($_POST['submit'])) {
        $project = new Project('',$_POST['name'], mysqli_real_escape_string($db,$_POST['link']),
                                                mysqli_real_escape_string($db,$_POST['github']), 
                                                mysqli_real_escape_string($db,$_POST['tech']),
                                                mysqli_real_escape_string($db,$_POST['description']));

        if($project->name && $project->link && $project->github && $project->technologies && $project->description){
            $sql = "INSERT INTO projects(name, link, github, technologies, description) 
                    VALUES ('$project->name', '$project->link', '$project->github', '$project->technologies', '$project->description')";
            $result = mysqli_query($db, $sql);

            if($result){
                echo $success;
            } else {
                echo $error;

            }
        } else {
            echo $blankInputs;
            echo $success;
        }
    }
?>
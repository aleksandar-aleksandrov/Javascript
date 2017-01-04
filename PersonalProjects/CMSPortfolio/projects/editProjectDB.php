<?php
    

    $blankInputs = "<div class='alert alert-danger'><p>Please fill all the input fields!</p></div>";
    $error = "<div class='alert alert-danger'><p>There was an error!</p></div>";
    $success= "<div class='alert alert-success'><p>Project successfully added!</p></div>";

    if(isset($_POST['submit'])) {
        $updatedProject = new Project($project->id,$_POST['name'], mysqli_real_escape_string($db,$_POST['link']),
                                                mysqli_real_escape_string($db,$_POST['github']), 
                                                mysqli_real_escape_string($db,$_POST['tech']),
                                                mysqli_real_escape_string($db,$_POST['description']));

        if($updatedProject->name && $updatedProject->link && $updatedProject->github && $updatedProject->technologies && $updatedProject->description){
            $sql = "UPDATE projects 
                    SET name = '$updatedProject->name', link = '$updatedProject->link', github = '$updatedProject->github', 
                    technologies = '$updatedProject->technologies', description =  '$updatedProject->description' 
                    WHERE id = '$id' ";
            $result = mysqli_query($db, $sql);

            if($result){
                echo $success;
                $project = $updatedProject;
            } else {
                echo $error;

            }
        } else {
            echo $blankInputs;
            echo $success;
        }
    }
?>
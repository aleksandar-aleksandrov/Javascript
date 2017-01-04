<?php

    $blankInputs = "<div class='alert alert-danger'><p>Please fill all the input fields!</p></div>";
    $error = "<div class='alert alert-danger'><p>There was an error!</p></div>";
    $success= "<div class='alert alert-success'><p>Article successfully added!</p></div>";

    if(isset($_POST['submit'])) {
        $article = new Article('',mysqli_real_escape_string($db, $_POST['title']), $user->name, '', mysqli_real_escape_string($db, $_POST['atext']));
        
        if($article->title && $article->author && $article->text){
            $sql = "INSERT INTO articles(title, author, atext) 
                    VALUES ('$article->title', '$article->author', '$article->text')";
            
            if(mysqli_query($db, $sql)){
                echo $success;
            } else {
                echo $error;

            }
        } else {
            echo $blankInputs;
        }
    }
?>
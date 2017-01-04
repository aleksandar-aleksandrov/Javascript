<?php

    $blankInputs = "<div class='alert alert-danger'><p>Please fill all the input fields!</p></div>";
    $error = "<div class='alert alert-danger'><p>There was an error!</p></div>";
    $success= "<div class='alert alert-success'><p>Article successfully updated!</p></div>";

    if(isset($_POST['submit'])) {
       $updatedArticle = new Article($article->id,mysqli_real_escape_string($db,$_POST['title']),'','',mysqli_real_escape_string($db,$_POST['atext']));
        
        if($updatedArticle->title && $updatedArticle->text){
            $sql = "UPDATE articles SET title='$updatedArticle->title', atext='$updatedArticle->text' WHERE id='$updatedArticle->id'";
            
            if(mysqli_query($db, $sql)){
                $article = $updatedArticle;
                echo $success;
            } else {
                echo $error;

            }
        } else {
            echo $blankInputs;
        }
    }
?>
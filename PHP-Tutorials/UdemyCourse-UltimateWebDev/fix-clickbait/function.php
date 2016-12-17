<?php
    function checkForClickbait(){
        $clickbait = strtolower($_POST["clickbait_headline"]);

        $a = array(
            "scientists",
            "doctors",
            "hate",
            "epic",
            "unbelievable",
            "hack",
            "trick",
            "weird",
            "simple",
            "stupid"
        );

        $b = array(
            "so-called scientists",
            "so-called doctors",
            "don't like",
            "normal",
            "boring",
            "method",
            "method",
            "average",
            "not hard",
            "not so smart"
        );

        $honestHeading = str_replace($a, $b, $clickbait);

        return array($clickbait, $honestHeading);
    }

    function displayHonestHeadline($clickbait, $honestHeading){
            echo "<strong class='text-danger'>Original Headline</strong><h4>".ucwords($clickbait)."</h4>";
            echo "<br/><br/>";
            echo "<strong class='text-success'>Fixed Headline</strong><h4>".ucwords($honestHeading)."</h4>";
            echo "<br/><br/>";
    }
?>
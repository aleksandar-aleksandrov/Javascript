<?php

    $sql = "SELECT id, name, link, github FROM projects";

    $result = mysqli_query($db, $sql);

    while($row = mysqli_fetch_assoc($result)){
        echo '<tr>';
        foreach($row as $key=>$cell){
            echo '<td>'.$cell.'</td>';
        }
        echo '<td>
                <span class="glyphicon glyphicon-glyphicon glyphicon-share btn-show" aria-hidden="true"></span>
                <span class="glyphicon glyphicon-pencil btn-edit" alt="edit" aria-hidden="true"></span>
                <span class="glyphicon glyphicon-glyphicon glyphicon glyphicon-remove btn-del" aria-hidden="true"></span>
              </td>';
        echo '</tr>';
    }
    

?>
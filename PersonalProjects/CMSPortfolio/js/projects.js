$(".goProjects").click(function(){
    window.location.replace("../projects.php")
})

$(".goAddProject").click(function(){
    window.location.replace("projects/addproject.php")
})

$('.btn-del').click(function(){
    var $row = $(this).closest("tr"),
    $tds = $row.find("td:nth-child(1)");
    var url = "projects/deleteProject.php?id=" + $tds.text();
    window.location.href = url;
})

$('.btn-edit').click(function(){
    var $row = $(this).closest("tr"),
    $tds = $row.find("td:nth-child(1)");
    var url = "projects/editProject.php?id=" + $tds.text();
    window.location.href = url;


})

$('.btn-show').click(function(){
    var $row = $(this).closest("tr"),        // Finds the closest row <tr> 
    $tds = $row.find("td:nth-child(1)"); // Finds the 2nd <td> element

    $.each($tds, function() {                // Visits every single <td> element
        console.log($(this).text());         // Prints out the text within the <td>
    });
})
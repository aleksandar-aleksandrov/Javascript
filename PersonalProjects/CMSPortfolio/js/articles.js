$("#goArticles").click(function(){
    window.location.replace("../articles.php")
})

$("#goAddArticle").click(function(){
    window.location.replace("articles/addarticle.php")
})

$("#addProject").click(function(){
    var name = $("#name").val()
    var link = $("#link").val()
    var github = $("#github").val()
    var tech = $("#tech").val()
    var description = $("description").val()

    if(name === "" || link === "" || github ==="" || tech === "" || description === ""){
        console.log("dasfadsfad")
    }

})

$('.btn-del').click(function(){
    var $row = $(this).closest("tr"),
    $tds = $row.find("td:nth-child(1)");
    var url = "articles/deletearticle.php?id=" + $tds.text();
    window.location.href = url;
})

$('.btn-edit').click(function(){
    var $row = $(this).closest("tr"),
    $tds = $row.find("td:nth-child(1)");
    var url = "articles/editarticle.php?id=" + $tds.text();
    window.location.href = url;


})

$('.btn-show').click(function(){
    var $row = $(this).closest("tr"),        // Finds the closest row <tr> 
    $tds = $row.find("td:nth-child(1)"); // Finds the 2nd <td> element

    $.each($tds, function() {                // Visits every single <td> element
        console.log($(this).text());         // Prints out the text within the <td>
    });
})
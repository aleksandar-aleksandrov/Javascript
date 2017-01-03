app.
    controller('NotesController', ['$scope', '$location', '$http', 
        function($scope, $location, $http){

            $('[data-toggle="popover"]').popover({ trigger: 'hover' })

            /* FETCH USER DATA */

            var user

            getUser()
            checkUser()
            getNotes()            
            
            $scope.email = user.email
            

            
            /* ADD NEW NOTE */

            $scope.addNote = function() {
                // REMOVE PREVIOUS FEEDBACK
                removeFeedback()

                // FETCH THE NEW NOTE

                var newNote = {
                    title: $scope.noteTitle,
                    note: $scope.note,
                    email: user.email
                }

                
                // SEND NON EMPTY NOTE AND EMAIL TO DB

                if(newNote.note && newNote.email && newNote.title){
                    $http({
                        url: "api/addNote.php",
                        method: "POST",
                        data: newNote
                    }).success(function(data){
                        if(data.message === "success"){
                            // SHOW FEEDBACK
                            showFeedback(true, "Thanks! You added a new entry.")
                            // CLEAR THE NOTE FIELD
                            $scope.note = ""
                            $scope.noteTitle = ""
                            newNote = null
                            // RELOAD THE NOTES
                            getNotes()
                        } else {
                            showFeedback(false, "Sorry, there was problem with your request.")
                        }
                    })
                } else {
                    showFeedback(false, "You can not submit an empty note!")
                }
            }

            /* USER LOGOUT */

            $scope.logout = function(){
                $http({
                    url: "api/logout.php",
                    method: "post",
                    data: user
                })
                localStorage.removeItem("email")
                localStorage.removeItem("token")
                $location.path("/main")
            }


            /* FETCH USER DATA FUNCTIONS */

            function getUser(){
                user = {
                    email: localStorage.getItem('email'),
                    token: localStorage.getItem('token')
                }
            }


            function checkUser(){

                // CONNECT TO API 

                $http({
                    url: 'api/checkToken.php',
                    method: 'post',
                    data: user
                }).success(function(data){
                    if(data.error !== "error"){
                        user = {
                            email: data.email,
                            name: data.name
                        }
                    } else {
                        $location.path('/main')
                    }
                }).error(function(data){
                    $location.path('/error')
                })

            }

            function getNotes(){
                $http({
                    method: 'post',
                    url: 'api/getNotes.php',
                    data: user
                }).success(function(data){
                    $scope.list = data
                    $scope.list.reverse()
                })
            }

            /* FEEDBACK TO NEW NOTES */

            function showFeedback(isSuccess, msg){
                var el = angular.element(document.querySelector("#message-box"))
                if(isSuccess){
                    el.addClass("alert-success")
                    el.html(msg)
                } else {
                    el.addClass("alert-danger")
                    el.html(msg)
                }
            }
            
            function removeFeedback(){
                var el = angular.element(document.querySelector("#message-box"))
                el.removeClass("alert-success")
                el.removeClass("alert-danger")
                el.html("")
            }

            

            /* PAGINATION  */
           
            $scope.currentPage = 0
            $scope.pageSize = 5
            $scope.numberofPages = function(){
                return Math.ceil($scope.list.length/$scope.entryLimit)
            }
            
            $scope.noteClick = function(text, title){
                $scope.noteTitle = title
                $scope.note = text
            }
               
}])
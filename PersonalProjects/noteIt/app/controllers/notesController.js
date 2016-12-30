app.
    controller('NotesController', ['$scope', '$location', '$http', 
        function($scope, $location, $http){
            var user
            getUser()
            $scope.users = []
            checkData()
            getUsers()
            console.log(user)
            $scope.email = user.email

            $http({
                method: 'post',
                url: 'api/getNotes.php',
                data: user
            }).success(function(data){
                $scope.list = data
                console.log($scope.list)
            })

            $scope.currentPage = 0
            $scope.pageSize = 5
            $scope.numberofPages = function(){
                return Math.ceil($scope.list.length/$scope.entryLimit)
            }
            
            $scope.noteClick = function(i){
                console.log(i)
            }


            $scope.addNote = function() {
                removeFeedback()
                var newNote = {
                    note: $scope.note,
                    email: user.email
                }
                console.log(newNote)
                if(newNote.note && newNote.email){
                    $http({
                        url: "api/addNote.php",
                        method: "POST",
                        data: newNote
                    }).success(function(data){
                        console.log(data)
                        if(data.message === "success"){
                            showFeedback(true, "Thanks! You added a new entry.")
                        } else {
                            showFeedback(false, "Sorry, there was problem with your request.")
                        }
                    })
                } else {
                    showFeedback(false, "You can not submit an empty note!")
                }
            }

            $scope.logout = function(){
                $http({
                    url: "api/logout.php",
                    method: "post",
                    data: user
                }).success(function(data){
                    console.log(data)
                }).error(function(data){

                })
                localStorage.removeItem("email")
                localStorage.removeItem("token")
                $location.path("/main")
            }






            function getUser(){
                user = {
                    email: localStorage.getItem('email'),
                    token: localStorage.getItem('token')
                }
            }


            function checkData(){

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
                        console.log(data)
                        $location.path('/main')
                    }
                }).error(function(data){
                    $location.path('/error')
                })

            }

            function showFeedback(isSuccess, msg){
                var el = angular.element(document.querySelector("#message-box"))
                console.log(msg)
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

            function getUsers(){
                
            }

           
            
}])
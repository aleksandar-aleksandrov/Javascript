angular.module('chat-app').controller('MainController', ['$scope', '$http', '$location', function($scope, $http, $location){

    var registerData = {
        user: $scope.regUser,
        email: $scope.regEmail,
        pass: $scope.regPass
    }


    $scope.register = function(){
        //Take User Inputted Data
        var newUser = {
            user: $scope.regUser,
            email: $scope.regMail,
            pass: $scope.regPass
        }

        console.log(newUser)

        //Validate the data
        var errors = ""

        //Check if all fields are filled in
        if (newUser.user && newUser.email && newUser.pass){
            var regExp = /\S+@\S+\.\S+/;

            //Validate emails
            if(!(regExp.test(newUser.email))){
                errors += "</br>Email is not valid."
            }

            //Validate password
            if(newUser.pass.length < 6){
                errors += "</br>Password is too short. Try at least 6 characters."
            }

        } else {
            errors += "You need to fill in all the inputs!"
        }
        
        if (!errors){
            $http({
                url: 'api/register.php',
                method: 'post',
                data: newUser
            }).success(function(data){

                if (data == 'There is already a registration with the given email.' || data == 'There was problem with registring. Please try again later.' ){

                    showErrors(data)

                } else {
                    console.log(data)
                    localStorage.setItem('token', data)
                    //location.path('/chat')
                }

            }).error(function(data){

            })
        } else {
            showErrors(str)
        }

    }


    $scope.login = function(){
        
        var user = {
            email: $scope.logEmail,
            pass: $scope.logPass
        }
        console.log(user)
        if (user.email && user.pass) {

            $http({
                url: 'api/logIn',
                method: 'post',
                data: user
            }).success(function(data){
                if (data != 'error'){
                    console.log(data)
                    localStorage.setItem('user', data)
                    $location.path('/chat')
                } else {
                    console.log(data)
                }  
            }).error(function(data){

            })

        } else {

        }
    }

    function showErrors(str){
        console.log(showErrors)
    }
}])
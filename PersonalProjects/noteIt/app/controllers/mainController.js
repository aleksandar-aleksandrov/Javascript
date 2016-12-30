angular.module('chat-app').controller('MainController', ['$scope', '$http', '$location', function($scope, $http, $location){



    $scope.register = function(){
        hideErrors()
        //Take User Inputted Data
        var newUser = {
            user: $scope.regUser,
            email: $scope.regMail,
            pass: $scope.regPass
        }

        //Validate the data
        var errors = ""

        //Check if all fields are filled in
        if (newUser.user && newUser.email && newUser.pass){
            var regExp = /\S+@\S+\.\S+/;

            //Validate emails
            if(!(regExp.test(newUser.email))){
                errors += "Email is not valid."
            }

            //Validate password
            if(newUser.pass.length < 6){
                errors += "Password is too short. Try at least 6 characters."
            }

        } else {
            errors += "You need to fill in all the inputs!"
        }
        
        if (!errors){
            // If no erros, send data to API

            $http({
                url: 'api/register.php',
                method: 'post',
                data: newUser
            }).success(function(data){

                if (data[0] === 'There is already a registration with the given email.' || data[0] === 'There was problem with registering. Please, try again later.') {
                    showErrors(data[0])
                } else {
                    localStorage.setItem('email', newUser.email)
                    localStorage.setItem('token', data)
                    $location.path('/notes')
                }

            }).error(function(data){
                showErrors('There was a problem with registering. Please, try again later.')
            })
        } else {
            showErrors(errors.toString())
        }

    }


    $scope.login = function(){
        
        // FETCH DATA FROM USER

        var user = {
            email: $scope.logEmail,
            pass: $scope.logPass
        }

        console.log(user)

        // CHECK IF BOTH EMAIL AND PASS ARE PRESENT
        if (user.email && user.pass) {

            // SEND DATA TO API

            $http({
                url: 'api/logIn',
                method: 'post',
                data: user
            }).success(function(data){
                console.log(data)
                if (data.error !== 'error'){
                    console.log(data)
                    localStorage.setItem('email', data.email)
                    localStorage.setItem('token', data.token)
                    $location.path('/notes')
                } else {
                    console.log(data)
                    giveFeedback()
                }  
            }).error(function(data){
                giveFeedback()
            })

        } else {
            console.log('error')
            giveFeedback()
        }
    }

    function showErrors(str){
        var element = angular.element(document.querySelector(".reg-alert"))
        element.removeClass("hidden")
        element.html(str)
    }

    function hideErrors(){
        var element = angular.element(document.querySelector(".reg-alert"))
        element.addClass("hidden")
    }

    function giveFeedback(){
        var logGroup = angular.element(document.querySelector(".log-group"))
        var logGroup2 = angular.element(document.querySelector(".log-group2"))
        var logEmail = angular.element(document.querySelector("#logEmail"))
        var logPass = angular.element(document.querySelector("#logPass"))

        console.log(logEmail)
        console.log(logPass)
        logGroup.addClass('has-warning')
        logGroup2.addClass('has-warning')
        logPass.after('<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>')
        logEmail.after('<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>')
    }
}])
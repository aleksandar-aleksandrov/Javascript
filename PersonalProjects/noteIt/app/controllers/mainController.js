angular.module('chat-app').controller('MainController', ['$scope', '$http', '$location', 

    function($scope, $http, $location){

        /* REGISTER FUNCTION */

        $scope.register = function(){
            hideRegisterFeedback()
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

                //Validate email
                if(!(regExp.test(newUser.email))){
                    errors += "Email is not valid."
                }

                //Validate password
                if(newUser.pass.length < 6){
                    errors += " Password is too short. Try at least 6 characters."
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
                        showRegisterFeedback(false, data[0])
                    } else {
                        localStorage.setItem('email', newUser.email)
                        localStorage.setItem('token', data)
                        showRegisterFeedback(true, 'You registered successfully!')
                    }

                }).error(function(data){
                    showRegisterFeedback(false, 'There was a problem with registering. Please, try again later.')
                })
            } else {
                showRegisterFeedback(false, errors.toString())
            }

        }

        /* LOGIN FUNCTION */

        $scope.login = function(){
            
            // FETCH DATA FROM USER

            var user = {
                email: $scope.logEmail,
                pass: $scope.logPass
            }


            // CHECK IF BOTH EMAIL AND PASS ARE PRESENT
            if (user.email && user.pass) {

                // SEND DATA TO API

                $http({
                    url: 'api/login.php',
                    method: 'post',
                    data: user
                }).success(function(data){
                    if (data.error !== 'error'){
                        localStorage.setItem('email', data.email)
                        localStorage.setItem('token', data.token)
                        $location.path('/notes')
                    } else {
                        giveLoginFeedback()
                    }  
                }).error(function(data){
                    giveLoginFeedback()
                })

            } else {
                giveLoginFeedback()
            }
        }

        /* ADDITIONAL FUNCTIONS */
        function showRegisterFeedback(isPositive, str){
            if(isPositive) {
                var element = angular.element(document.querySelector(".reg-alert"))
                element.removeClass("hidden")
                element.removeClass("alert-danger")
                element.addClass("alert-success")
                element.html(str)
            } else {
                var element = angular.element(document.querySelector(".reg-alert"))
                element.removeClass("hidden")
                element.html(str)
            }
        }

        function hideRegisterFeedback(){
            var element = angular.element(document.querySelector(".reg-alert"))
            element.addClass("hidden")
        }

        function giveLoginFeedback(){
            var logGroup = angular.element(document.querySelector(".log-group"))
            var logGroup2 = angular.element(document.querySelector(".log-group2"))
            var logEmail = angular.element(document.querySelector("#logEmail"))
            var logPass = angular.element(document.querySelector("#logPass"))

            logGroup.addClass('has-warning')
            logGroup2.addClass('has-warning')
            logPass.after('<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>')
            logEmail.after('<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>')
        }
}])
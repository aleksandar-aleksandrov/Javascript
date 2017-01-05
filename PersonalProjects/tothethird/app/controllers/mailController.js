angular.module('tothethird.controllers')
    .controller('MailController', ['$scope', '$http', '$location', function($scope, $http, $location){
        var email
        deleteOnClick()

        $scope.sendEmail = function(){
            email = {
                name: $scope.name,
                from: $scope.email,
                phone: $scope.phone,
                message: $scope.message 
            }

            var nameValid = validateName(email.name)
            var emailValid = validateEmail(email.from)
            var messageValid = validateMessage(email.message)
            
            if(nameValid && emailValid && messageValid){
                $http({
                    method: "post",
                    url: "api/sendEmail.php",
                    data: email
                }).success(function(data){
                    if(data.error){
                        $(".alert").addClass("alert-danger")
                        $(".alert").html("An error occured! Please, try one more time!")
                    } else {
                        $(".alert").addClass("alert-success")
                        $(".alert").html("Email was sent successfully!")
                    }
                }).error(function(data){
                    $(".alert").addClass("alert-danger")
                    $(".alert").html("An error occured! Please, try one more time!")
                })
            }

        }



        function validateName(name){
            if(!name){
                $("#name").next().html("The name field must not be empty.")
                return false
            }
            return true
        }

        function validateMessage(message){
            if(!message){
                $("#message").next().html("The message field must not be empty.")
                return false
            }
            return true
        }

        function validateEmail(email){
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if(!email){
                $("#email").next().html("The email field must not be empty.")
                return false
            } else if(!re.test(email)){
                $("#email").next().html("The given email is invalid.")
                return false
            }

            return true
        }

        function deleteOnClick(){
            
            $("input").click(function(){
                $(this).next().html("")
            })

            $("textarea").click(function(){
                $(this).next().html("")
            })
        }
}])
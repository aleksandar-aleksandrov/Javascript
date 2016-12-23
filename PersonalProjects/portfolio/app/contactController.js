angular.module('portfolio.controllers')
    .controller('ContactController', ['$scope', '$http', function($scope, $http){
        // VARIABLES

        // Letter To Be Send

        var letter = {
            email: '',
            name: '',
            title: '',
            msg: ''
        }


        // FUNCTIONS

        // SCOPE FUNCTIONS

        $scope.sendEmail = function(){
            
            collectInfo()

            var errors = validateInfo()

            if(errors.length > 0){
                console.log(errors)
            } else {
                $http({
                    url: 'api/sendEmail.php',
                    method: 'post',
                    data: letter
                }).then(function(data){
                    if(data !== 'error'){
                        showSuccess(data)
                    } else {
                        showError(data)
                    }
                }, function(data){
                    showError(data)
                })
            }
            
        }

        // ADDITIONAL FUNCTIONS

        function collectInfo(){
            letter.email = $scope.email
            letter.name = $scope.name
            letter.title = $scope.title
            letter.msg = $scope.message
        }

        function validateInfo(){
            var errors = []
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            // Validate email
            if(!re.test(letter.email)) {
                errors.push('Fill in a valid email!')
            }

            // Validate name
            if(!letter.name) {
                errors.push('Fill in the name!')
            }

            // Validate title
            if(!letter.title) {
                errors.push('Fill in the title!')
            }

            // Validate msg
            if(!letter.msg) {
                errors.push('Fill in the Message area!')
            }

            return errors
        }

        function showSuccess(data){
            console.log(data)
        }

        function showError(data){
            console.log(data)
        }

}])
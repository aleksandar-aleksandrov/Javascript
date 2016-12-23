angular.module('learn-german.controllers')
    .controller('RoundThreeController', ['$scope','$location', '$http' ,'user', function($scope, $location, $http, user){
        //Prevent from going back to redo rounds and skipping rounds
        if(user.thirdRound){
            $location.path('/error')
        }

        // Round Three
        
        // VARIABLES

        // Set User's Level and points
        $scope.level = user.level
        $scope.points = user.points

        var data = {
            levelNumerical: user.levelNumerical
        }

        $scope.sentences = []
        $scope.isDisabled = false


        // FUNCTIONS

        // Send request for words package
        $http({
            url: 'api/roundThree.php',
            method: 'post',
            data: data
        }).success(function(data) {
            if(data !== 'error'){
                $scope.sentences = data
                generateWords()
            } else {
                location.path('/error')
            }
            
        }).error(function(data){
            location.path('/error')
        })

        
        // Scope Functions

        $scope.check = function(){
            $scope.isDisabled = true;
            var inputs = angular.element(document.getElementsByClassName('input-missing-word'))
            console.log(inputs)
            var points = 0
            for(var i = 0; i < inputs.length; i++) {
                if($scope.sentences[i].missingWord === inputs[i].value){
                    points++
                }
            }

            // Update HTML Element
            var p = parseInt(user.points)
            p += (points*20)
            user.points = p
            $scope.points = user.points

            //Display a message to the user
            var message = "You got " + points + "/5 correct. You gained " + (points*20) + " points."
            var alert = angular.element(document.querySelector('.alert-feedback'))
            alert.removeClass('hidden')
            alert.html(message) 
        }
        

        $scope.showAnswers = function(){
            var inputs = angular.element(document.getElementsByClassName('input-missing-word'))
            console.log(inputs)
            var points = 0
            for(var i = 0; i < inputs.length; i++) {
                inputs[i].value = $scope.sentences[i].missingWord
            }
        }

        $scope.goGameOver = function(){
            user.thirdRound = true
            $location.path('/gameover')
        }

        //Additional Functions

        function generateWords(){
            var message = '<b>Missing words:</b> '
            var words = copy()
            message += shuffle(words)
            var el = angular.element(document.querySelector('.words'))
            el.html(message)
        }

        function copy(){
            var arr = []
            for(var i = 0; i < $scope.sentences.length; i++) {
                arr.push($scope.sentences[i].missingWord)
            }
            return arr
        }

        function shuffle(arr){
            var temp, rand, current = arr.length

            
            //KNUTH shuffle algorithm

            while (0 !== current) {
                rand = Math.floor(Math.random() * current--)

                temp = arr[current]
                arr[current] = arr[rand]
                arr[rand] = temp

            }
            return arr.join(', ');

        }

        function giveFeedback(inp, isCorrect){
            var el = angular.element(inp)
            el.addClass('has-feedback')

             //Add the css styling
            if(isCorrect){
                el.addClass('has-success')
                el.after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>')
            } else {
                console.log('hier')
                el.addClass('has-error')
                el.after('<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>')
            }

        }

        
    }])
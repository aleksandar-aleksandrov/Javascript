angular.module('learn-german.controllers')
    .controller('RoundOneController', ['$scope','$location', '$http', 'user', function($scope, $location, $http,user){
        //Round One Game


        //VARIABLES

        // Set User's Level and Points
        $scope.level = user.level
        $scope.points = user.points

        //Responsible for the state of the inputs
        $scope.isDisabled = false;

        
        //Generate words

        //Initiate array for storage of the words
        var dict = [];


        //Send request to api
        //Send level of the user as param
        $http({
            url: 'api/roundOne.php',
            method: 'post',
            data: {
                levelNumerical: user.levelNumerical
            }
        }).success(function(data){
            console.log(data)
            //If is successful, add the words to the array
            for(var i = 0; i < data.length; i++){
                dict.push({
                    germanWord: data[i].german,
                    englishWord: data[i].english
                })
            }
            // Add the words to the scope
            $scope.words = dict
   
        }).error(function(data, status, headers, config){
            console.log(error)
        })
        
        
        //FUNCTIONS
        

        

        //Check the user inputs
        $scope.checkAnswers = function(){
             //Set button-check and inputs to disabled and button-continue to enabled
            $scope.isDisabled = true
            
            //Get the user inputs
            var translations = [$scope.word1 || "", $scope.word2 || "", $scope.word3 || "", $scope.word4 || "", $scope.word5 || ""]

            var correct = 0

            //Check how many translations are correct
            for(var i = 0; i < 5; i++) {
                
                if(dict[i].englishWord.toLowerCase() === translations[i].toLowerCase()){
                    //UpdateScore              
                    correct++
                    //Update Input
                    giveFeedback(i+1, true)
                } else {
                    giveFeedback(i+1, false)
                }
                
            }

            // Update HTML Element
            var p = parseInt(user.points)
            p += (correct*20)
            user.points = p
            $scope.points = user.points

            //Display a message to the user
            var message = "You translated " + correct + "/5 words correctly. You gained " + p + " points."
            var alert = angular.element(document.querySelector('.alert-feedback'))
            alert.removeClass('hidden')
            alert.html(message) 
        }

        $scope.goRound2 = function(){
            $location.path('/second-round')
        }

        function giveFeedback(num, isCorrect){
            // Get element div
            var idName = "#divTrans" + num
            var el = angular.element(document.querySelector(idName))
            el.addClass('has-feedback')

            // Get element input
            var idNameInput = "#translation" + num
            var inp = angular.element(document.querySelector(idNameInput))

            //Add the css styling
            if(isCorrect){
                el.addClass('has-success')
                el.css('background-color: orange;')
                inp.after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>')
            } else {
                el.addClass('has-error')
                el.css('background-color: black;')
                inp.after('<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>')
            }
        }

    }])
angular.module('learn-german.controllers')
    .controller('RoundTwoController', ['$scope','$location', '$http', 'user', function($scope, $location, $http, user){
        //Prevent from going back to redo rounds and skipping rounds
        if(user.secondRound){
            $location.path('/error')
        }
        
        
        // ROUND TWO
        
        
        // VARIABLES

        $scope.description = ''
        $scope.word = ''
        $scope.length = 0
        $scope.searchedWord = ''

        // Variables for canvas drawing

        var drawState = 0
        $scope.isShown = false
        var canvas = document.getElementById('round-two-canvas')
        var ctx = canvas.getContext('2d')

        //Set User's Level and Points
        $scope.level = user.level
        $scope.points = user.points

        
        // Send request to api
        // Send level of the user as param
        $http({
            url: 'api/roundTwo.php',
            method: 'post',
            data: {
                levelNumerical: user.levelNumerical
            }
        }).success(function(data){
            if(data.error !== 'error'){
                $scope.word = data.germanWord.toUpperCase()
                $scope.description = data.desc
                $scope.length = $scope.word.length
                initString()
                initCanvas()
            } else {
                $location.path('/error')
            }
            
        }).error(function(data){
            $location.path('/error')
        })


        // FUNCTIONS

        // SCOPE functions

        $scope.addLetter = function(event){
            //Get the letter
            var letter = $(event.target).attr("id")
            var isApparent = false;

            //Find and replace in the word
            for(var i = 0; i < $scope.word.length; i++){
                if(letter == $scope.word.charAt(i)){
                    $scope.searchedWord = replaceAt($scope.searchedWord, i, letter)
                    isApparent = true
                }
            }

            //If not present, draw next part of the hangman
            if(!isApparent){
                drawNext(++drawState)
            }

            //If found, give points
            if($scope.searchedWord === $scope.word){
                finishGame(true)
            }
            
        }

        $scope.goRoundThree = function() {
            user.secondRound = true
            $location.path('/third-round')
        }


        // Additional Functions
        function drawNext(stage){
            switch(stage){
                case 1:
                    drawHead()
                    break
                case 2:
                    drawBody()
                    break
                case 3:
                    drawLeftArm()
                    break
                case 4:
                    drawRightArm()
                    break
                case 5:
                    drawLeftLeg()
                    break
                case 6:
                    drawRightLeg()
                    break
            }

        }

        function drawHead(){
            ctx.beginPath()
            ctx.moveTo(170,60)
            ctx.arc(150, 60, 20, 0, 2 * Math.PI, false)
            ctx.stroke()
        }

        function drawBody(){
            ctx.beginPath()
            ctx.moveTo(150,80)
            ctx.lineTo(150,190)
            ctx.stroke()
        }

        function drawLeftArm(){
            ctx.beginPath()
            ctx.moveTo(150,140)
            ctx.lineTo(110,100)
            ctx.stroke()
        }
        function drawRightArm(){
            ctx.beginPath()
            ctx.moveTo(150,140)
            ctx.lineTo(190,100)
            ctx.stroke()
        }
        function drawLeftLeg(){
            ctx.beginPath()
            ctx.moveTo(150,190)
            ctx.lineTo(120,250)
            ctx.stroke()
        }
        function drawRightLeg(){
            ctx.beginPath()
            ctx.moveTo(150,190)
            ctx.lineTo(180,250)
            ctx.stroke()
            finishGame(false)
        }
        
        function finishGame(isWon){
            if (isWon) {
                $scope.isShown = true
                var el = angular.element(document.querySelector('#result'))
                el.addClass('alert-success')
                el.html("Congratz. You found the word and got 100 points. On to the next round.")
                var p = parseInt(user.points)
                p += 100
                user.points = p
                $scope.points = user.points
            } else {
                $scope.isShown = true
                var el = angular.element(document.querySelector('#result'))
                el.addClass('alert-danger')
                el.html("You didn't find the word. Please use the button below to continue to Round 3.")
            }
        }

        function replaceAt(str, index, char) {
            var res = (str.substr(0, index) + char + str.substr(index+1))
            console.log(res)
            return res
        }

        function initString(){
            for(var i = 0; i < $scope.word.length; i++){
                $scope.searchedWord += '_'
            }
        }

        function initCanvas(){
            ctx.beginPath()
            ctx.moveTo(50,20)
            ctx.lineTo(50,270)
            ctx.moveTo(20,270)
            ctx.lineTo(80,270)
            ctx.moveTo(50,20)
            ctx.lineTo(150,20)
            ctx.lineTo(150,40)
            ctx.stroke()
        }

    }])
angular.module('learn-german.controllers')
    .controller('BeginController', ['$scope', '$location', 'centerElement' ,'user', function($scope, $location, centerElement, user){
        // Reset User VARIABLES

        function resetValues(){
            user.level = 'Beginner'
            user.levelNumerical = '1'
            user.points = '0'
            user.firstRound = false
            user.secondRound = false
            user.thirdRound = false
        }

        resetValues()

        //VARIABLES

        //Used for marking the moment at which the buttons should appear
        var i = 0;
        $scope.isShown = false;
        var msg = "Hallo! Ich Habe Eine Frage ...", msg2 =  "Hey, I Have A Question. <br> Do You Want To Learn German?"

        //FUNCTIONS

        // Center Element Vertically
        centerElement($(".begin-container"))

        //Function for the typing-of-string effect
        //TYPED.JS is used as additional library

        $(function(){
            $(".begin-title").typed({
                strings: [msg, msg2],
                typeSpeed: 0,
                onStringTyped: function() {
                    i++;
                    if(i === 2){
                        $scope.isShown = true
                        $scope.$apply()
                    }
                }
            })
        })

        //Simple function for redirecting to the next view
        $scope.chooseLevel = function(){
            $location.url("/choose-level")
        }

        //Function for notification
        //NOTYJS is used as additional library

        $scope.showNoty = function(){
            noty({
                type: 'alert',
                theme: 'defaultTheme',
                text: 'Embrace the pain',
                animation: {
                    open: {height: 'toggle'},
                    close: {height: 'toggle'},
                    easing: 'swing',
                    speed: 500
                },
                layout: 'bottom',
                timeout: '3000'

            })
        }
    }])
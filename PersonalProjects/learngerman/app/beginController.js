angular.module('learn-german.controllers')
    .controller('BeginController', ['$scope', '$location', function($scope, $location){
        //VARIABLES

        //Used for marking the moment at which the buttons should appear
        var i = 0;
        $scope.isShown = false;


        //FUNCTIONS

        //Function for the typing-of-string effect
        //TYPED.JS is used as additional library

        $(function(){
            $(".begin-title").typed({
                strings: ["Hallo! Ich Habe Eine Frage ...", "Hey, I Have A Question. <br> Do You Want To Learn German?"],
                typeSpeed: 0,
                onStringTyped: function() {
                    i++;
                    console.log(i)
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
                timeout: '1500'

            })
        }
    }])
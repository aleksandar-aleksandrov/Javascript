angular.module('learn-german.controllers', [])
    .controller('InItController', ['$scope', '$location', function($scope, $location){
        var i = 0;
        $(function(){
            $(".init-title").typed({
                strings: ["Hallo! Ich habe eine Frage ...", "Hey, I Have A Question. <br> Do You Want To Learn German?"],
                typeSpeed: 0,
                onStringTyped: function() {
                    i++;
                    if(i === 2){
                        $("#btn-init-yes").show();
                        $("#btn-init-no").show();
                    }
                }
            })
        })

        $scope.chooseLevel = function(){
            $location.path("/choose-level")
        }

        $scope.showNoty = function(){
            noty({
                type: 'alert',
                theme: 'defaultTheme',
                text: 'Embrace the pain',
                animation: {
                    open: {height: 'toggle'}, // jQuery animate function property object
                    close: {height: 'toggle'}, // jQuery animate function property object
                    easing: 'swing', // easing
                    speed: 500 // opening & closing animation speed
                },
                layout: 'bottom'

            })
        }
    }])
    .controller('ChooseLevelController', ['$scope','$location', function($scope, $location){
        $(function(){
            $(".level-text").typed({
                strings: ["Good! We Are Going To Play A Simple Game In 3 Rounds.  Choose Your Level!"],
                typeSpeed: 0,
                onStringTyped: function() {
                    $("#btn-beginner").show();
                    $("#btn-intermediate").show();
                    $("#btn-advanced").show();
                }
            })
        })

        $scope.chooseBeginner = function(){
            localStorage.setItem("Level", 1);
            $location.path("/first-round-pregame")
        }

        $scope.chooseIntermediate = function(){
            localStorage.setItem("Level", 2);
            $location.path("/first-round-pregame")
        }

        $scope.chooseAdvanced = function(){
            localStorage.setItem("Level", 3);
            $location.path("/first-round-pregame")
        }
    }])
    .controller('RoundOneController', ['$scope','$location', function($scope, $location){
        $(function(){
            $(".round1-pregame-text").typed({
                strings: ["In First Round, You Have To Translate 5 German Words In English. You Have 30 Seconds For Each Word."],
                typeSpeed: 0,
                onStringTyped: function() {
                    $("#btn-ready").show();
                }
            })
        })
        $scope.startFirstRound = function(){
            $location.path("/first-round")
        }
        var timer = 10;
        var count = setInterval(function () {
            seconds = parseInt(timer % 60, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.getElementById("timer").innerHTML = seconds;

            if (--timer < 0) {
                console.log("stopping");
                clearInterval(count);
            }
        }, 1000);

        $scope.stop = function(){
            clearInterval(count);
        }
    }])
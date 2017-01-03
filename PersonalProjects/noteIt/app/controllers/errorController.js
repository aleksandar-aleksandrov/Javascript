angular.module('chat-app').controller('ErrorController', ['$scope', '$location', 

    function($scope, $location){

        // CENTER ELEMENT
        var error = $(".error")
        error.css("position", "absolute")
        error.css("top", Math.max(0, (($(window).height() - error.outerHeight()) / 2.5) + $(window).scrollTop()) + "px")

        // GOBACK function

        $scope.goMain = function(){
            $location.path('/main')
        }
}])
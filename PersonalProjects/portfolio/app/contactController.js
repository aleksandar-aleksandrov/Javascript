angular.module('portfolio.controllers')
    .controller('ContactController', ['$scope', function($route){
        var liCont = angular.element(document.querySelector('#li-contact'))
        liCont.addClass('active')
}])
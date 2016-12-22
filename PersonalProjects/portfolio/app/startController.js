angular.module('portfolio.controllers')
    .controller('AboutMeController', ['$scope', function($route){
    var liBio = angular.element(document.querySelector('#li-bio'))
    liBio.addClass('active')
}])